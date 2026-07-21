import http from 'node:http';
import { appendFile, mkdir, readFile, stat, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = Number(process.env.PORT || 3000);
const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const submissionsDir = path.join(rootDir, 'data');
const submissionsPath = path.join(submissionsDir, 'contact-submissions.jsonl');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(JSON.stringify(payload));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function normalizePath(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  return decoded === '/' ? '/' : decoded.replace(/^\/+/, '');
}

async function resolveFilePath(requestPath) {
  const normalizedPath = normalizePath(requestPath);
  const relativePath = normalizedPath === '/' ? 'index.html' : normalizedPath;

  const candidates = [
    path.join(distDir, relativePath),
    path.join(publicDir, relativePath),
    path.join(distDir, 'index.html'),
  ];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Try next candidate.
    }
  }

  return null;
}

async function serveStatic(req, res, url) {
  const filePath = await resolveFilePath(url.pathname);
  if (!filePath) {
    sendJson(res, 404, { success: false, message: 'Not found' });
    return;
  }

  try {
    const fullPath = path.resolve(filePath);
    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const fileBuffer = await readFile(fullPath);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(fileBuffer);
  } catch {
    sendJson(res, 500, { success: false, message: 'Unable to read asset' });
  }
}

async function handleContact(req, res) {
  try {
    const body = await readBody(req);
    const payload = body ? JSON.parse(body) : {};
    const { name, email, phone, subject, message, serviceType } = payload;

    if (!name || !email || !phone || !subject || !message) {
      sendJson(res, 400, { success: false, message: 'Please provide all required fields.' });
      return;
    }

    const submission = {
      receivedAt: new Date().toISOString(),
      name,
      email,
      phone,
      subject,
      message,
      serviceType: serviceType || null,
    };

    await mkdir(submissionsDir, { recursive: true });
    await appendFile(submissionsPath, `${JSON.stringify(submission)}\n`, 'utf8');
    sendJson(res, 200, { success: true, message: 'Message received.' });
  } catch {
    sendJson(res, 400, { success: false, message: 'Invalid request payload.' });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost');

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  if (req.method === 'GET' && url.pathname === '/healthz') {
    sendJson(res, 200, { status: 'ok' });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/contact') {
    await handleContact(req, res);
    return;
  }

  if (req.method === 'GET' || req.method === 'HEAD') {
    await serveStatic(req, res, url);
    return;
  }

  sendJson(res, 405, { success: false, message: 'Method not allowed' });
});

server.listen(port, () => {
  console.log(`Contact server listening on port ${port}`);
});
