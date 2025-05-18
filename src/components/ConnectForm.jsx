import { useState } from "react";

export default function ConnectForm({ onConnect }) {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ip || !port) return alert("Please enter IP and Port");
    onConnect(ip, port);
    setIp("");
    setPort("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow">
      <input
        type="text"
        placeholder="IP Address"
        className="p-2 border rounded"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <input
        type="text"
        placeholder="Port"
        className="p-2 border rounded"
        value={port}
        onChange={(e) => setPort(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Connect
      </button>
    </form>
  );
}
