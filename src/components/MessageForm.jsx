import { useState } from "react";

export default function MessageForm({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSend} className="mt-4 flex gap-2">
      <input
        type="text"
        className="p-2 border rounded w-full"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="bg-green-600 text-white px-4 rounded hover:bg-green-700">
        Send
      </button>
    </form>
  );
}
