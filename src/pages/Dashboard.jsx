import { useState } from "react";
import ConnectForm from "../components/ConnectForm";
import DeviceCard from "../components/DeviceCard";
import MessageForm from "../components/MessageForm";

export default function Dashboard() {
  const [devices, setDevices] = useState([]);

  const handleConnect = (ip, port) => {
    const id = `${ip}:${port}`;
    setDevices(prev => [...prev, { id, ip, port, status: "Connected", lastMessage: "" }]);
  };

  const handleSendMessage = (message) => {
    console.log("Sending to all devices:", message);
    setDevices(prev =>
      prev.map(device => ({ ...device, lastMessage: message }))
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">TCP Device Dashboard</h1>
      <ConnectForm onConnect={handleConnect} />
      <MessageForm onSend={handleSendMessage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}
