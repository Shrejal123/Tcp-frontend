// src/components/DeviceControl.jsx

import React, { useState, useEffect } from "react";
import { connectToDevice, sendMessage, getConnectedDevices } from "../api";

function DeviceControl() {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const [message, setMessage] = useState("");
  const [devices, setDevices] = useState([]);
  const [log, setLog] = useState("");

  const handleConnect = async () => {
    try {
      const res = await connectToDevice(ip, port);
      setLog(res.message || res.error);
      fetchDevices();
    } catch (err) {
      setLog("Error connecting to device");
    }
  };

  const handleSend = async () => {
    try {
      const res = await sendMessage(message);
      setLog(res.message || res.error);
    } catch (err) {
      setLog("Error sending message");
    }
  };

  const fetchDevices = async () => {
    const res = await getConnectedDevices();
    setDevices(res.devices || []);
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Device Connector</h2>

      <input
        className="border p-2 w-full"
        type="text"
        placeholder="IP Address"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Port"
        value={port}
        onChange={(e) => setPort(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleConnect}
      >
        Connect to Device
      </button>

      <textarea
        className="border p-2 w-full"
        rows="3"
        placeholder="Message to send"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSend}
      >
        Send Message
      </button>

      <div className="bg-gray-100 p-3 rounded">
        <strong>Status:</strong> {log}
      </div>

      <div>
        <h3 className="font-semibold">Connected Devices:</h3>
        <ul className="list-disc list-inside">
          {devices.length > 0 ? (
            devices.map((dev, i) => <li key={i}>{dev}</li>)
          ) : (
            <li>No devices connected</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DeviceControl;
