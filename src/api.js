// src/api.js

const API_BASE = "http://localhost:5000/api";

export async function connectToDevice(ip, port) {
  const res = await fetch(`${API_BASE}/connect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ip, port }),
  });
  return res.json();
}

export async function sendMessage(message) {
  const res = await fetch(`${API_BASE}/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json();
}

export async function getConnectedDevices() {
  const res = await fetch(`${API_BASE}/devices`);
  return res.json();
}
