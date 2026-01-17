#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

console.log('🚀 Starting development server...\n');

// Kill any process using port 3000
exec('lsof -i :3000 | grep -v COMMAND | awk \'{print $2}\' | xargs kill -9 2>/dev/null || true', (err) => {
  // Wait a second for port to be freed
  setTimeout(() => {
    // Start webpack dev server
    const server = exec('webpack serve --config webpack.dev.js', {
      cwd: path.dirname(path.dirname(__filename)),
      stdio: 'inherit'
    });

    server.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    server.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    server.on('close', (code) => {
      process.exit(code);
    });
  }, 1000);
});
