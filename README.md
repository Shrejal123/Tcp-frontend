# 📡 TCP/IP Device Communication Framework

A full-stack application to connect, read, and write data to devices in a manufacturing plant using TCP/IP communication. Built using **React + Tailwind CSS (frontend)** and **Node.js + Express (backend)**.

---

## ✅ Features

* 📶 Connect to devices over TCP/IP using IP and Port.
* 🔄 Read and Write real-time data from/to devices.
* ⚙️ Protocol parser to support multiple communication protocols.
* 🔌 Stub server for testing TCP/IP communication without real devices.
* 🧪 Jest-based unit tests for backend logic.

---

## 🛠️ Installation & Running the App

### 1. Backend Setup

```bash
cd backend
npm install
node server.js
```

### 2. Stub Device Setup (for testing)

```bash
cd backend/stub
node tcpStubServer.js
```

> Runs a dummy TCP device at 127.0.0.1:9000

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```


---

## 🔬 Running Unit Tests

The backend contains code-driven unit tests using **Jest**.

### 1. Install Jest:

```bash
cd backend
npm install --save-dev jest
```

### 2. Add test script to `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

### 3. Run tests:

```bash
npm test
```


## 🧪 Protocol Example

```
READ:temperature      # Read a temperature value
WRITE:status=on       # Write 'on' to 'status' key
```

## 📞 API Routes

**POST /api/connect** – Connects to a device

```
Body: {
  "ip": "127.0.0.1",
  "port": 9000
}
```

**POST /api/send** – Sends a message to the connected device

```
Body: {
  "message": "READ:temperature"
}
```

---

## 📌 Notes

* TCP devices can run on any port, default stub runs on **9000**

---

## 🧰 Tools & Stack

* Frontend: React.js, Tailwind CSS, Vite
* Backend: Node.js, Express.js
* TCP Server: Node's net module
* Testing: Jest

---

## 🙌 Author

Built by Shrejal Jaiswal

---

## 📎 License

MIT License
