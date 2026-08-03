const express = require("express");
const server = express();
const fs = require("fs");
const path = require("path");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Construct the formatted string, omitting 0 values for larger units
  let parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);

  return parts.join(" ");
}

function keepAlive(client) {
  server.all("/", (req, res) => {
    // Safely extract client data (may be undefined if bot not logged in yet)
    const botPing = client && client.ws && typeof client.ws.ping === "number" ? client.ws.ping : "N/A";
    const botUptime = client && typeof client.uptime === "number" ? formatTime(client.uptime) : "N/A";
    const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    const botTag = client && client.user && client.user.tag ? client.user.tag : "Not logged in";

    // Build HTML
    let htmlContent = `
      <html>
        <head>
          <title>Bot Status: ${botTag}</title>
          <style>
            body { font-family: sans-serif; background-color: #2c2f33; color: #ffffff; padding: 20px; }
            h1 { color: #5865F2; }
            h3 { border-bottom: 1px solid #4f545c; padding-bottom: 5px; }
            .status-box { background-color: #23272a; padding: 15px; margin-bottom: 20px; border-radius: 8px; }
            .status-item { margin-bottom: 8px; }
            .status-label { font-weight: bold; color: #99aab5; margin-right: 10px; }
            .command-box { background-color: #23272a; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 5px solid #5865F2; }
            .cmd-name { font-weight: bold; font-size: 1.1em; color: #00b0f4; }
            .cmd-desc { color: #99aab5; margin-left: 10px; }
            .dir-box { background-color: #1f2225; padding: 10px; margin-bottom: 8px; border-radius: 6px; }
            .file-item { color: #b9bbbe; }
            .ping-good { color: #43b581; }
            .ping-warn { color: #faa61a; }
            .ping-bad { color: #f04747; }
          </style>
        </head>
        <body>
          <h1>🟢 ${botTag} Status</h1>

          <div class="status-box">
            <h3>📊 Real-Time Metrics</h3>
            <div class="status-item"><span class="status-label">Uptime:</span><span>${botUptime}</span></div>
            <div class="status-item"><span class="status-label">Gateway Ping:</span><span>${typeof botPing === 'number' ? (botPing < 100 ? '<span class="ping-good">' + botPing + 'ms</span>' : botPing < 200 ? '<span class="ping-warn">' + botPing + 'ms</span>' : '<span class="ping-bad">' + botPing + 'ms</span>') : botPing}</span></div>
            <div class="status-item"><span class="status-label">Server Time:</span><span>${currentTime}</span></div>
          </div>

          <h3>📜 Active Commands (from client.commands):</h3>
    `;

    // Prefer client.commands Collection, but fall back to commandArray
    let commandsList = [];
    if (client && client.commands) {
      if (typeof client.commands.forEach === 'function') {
        client.commands.forEach((c) => commandsList.push({ name: c.name || c.commandName || 'unknown', description: c.description || '' }));
      } else if (Array.isArray(client.commands)) {
        commandsList = client.commands.map((c) => ({ name: c.name || 'unknown', description: c.description || '' }));
      }
    } else if (client && client.commandArray) {
      const src = Array.isArray(client.commandArray) ? client.commandArray : Array.from(client.commandArray.values());
      commandsList = src.map((c) => ({ name: c.name || 'unknown', description: c.description || '' }));
    }

    if (commandsList.length > 0) {
      commandsList.forEach((cmd) => {
        htmlContent += `<div class="command-box"><span class="cmd-name">/${cmd.name}</span> <span class="cmd-desc">${cmd.description || ''}</span></div>`;
      });
    } else {
      htmlContent += `<p class="dir-box">No commands loaded or client not ready yet.</p>`;
    }

    // List project folders: commands, events, handlers, logs
    const projectRoot = path.resolve(__dirname);
    const foldersToShow = ["commands", "events", "handlers", "logs"];

    htmlContent += `<h3>📁 Project Folders (relative to ${projectRoot}):</h3>`;

    foldersToShow.forEach((folder) => {
      const fullPath = path.join(projectRoot, folder);
      htmlContent += `<div class=\"dir-box\"><strong>/${folder}</strong><div>`;
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
        try {
          const items = fs.readdirSync(fullPath, { withFileTypes: true });
          if (items.length === 0) {
            htmlContent += `<div class="file-item">(empty)</div>`;
          } else {
            items.forEach((it) => {
              const display = it.isDirectory() ? `[dir] ${it.name}` : it.name;
              htmlContent += `<div class="file-item">${display}</div>`;
            });
          }
        } catch (err) {
          htmlContent += `<div class="file-item">Error reading folder: ${err.message}</div>`;
        }
      } else {
        htmlContent += `<div class="file-item">(folder not found)</div>`;
      }
      htmlContent += `</div></div>`;
    });

    htmlContent += `</body></html>`;
    res.send(htmlContent);
  });

  // eslint-disable-next-line no-undef
  const PORT = process.env.PORT || 3000;
  const HOSTNAME = "0.0.0.0";
  server.listen(PORT, HOSTNAME, () => {
    console.log(`Web server listening on http://${HOSTNAME}:${PORT}`);
  });
}

module.exports = keepAlive;
