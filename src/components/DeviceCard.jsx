export default function DeviceCard({ device }) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="font-bold text-lg">Device: {device.ip}:{device.port}</h2>
      <p className="text-sm text-gray-500">Status: {device.status}</p>
      <div className="mt-2 bg-gray-50 p-2 rounded">
        <p className="text-xs text-gray-700">Last Message:</p>
        <p className="text-sm">{device.lastMessage || "No messages yet"}</p>
      </div>
    </div>
  );
}
