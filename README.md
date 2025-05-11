# 🎉 Discord Bot Template 🚀

A 🔥 **TypeScript** + **discord.js** template to kickstart your Discord bot project in no time! It includes MongoDB integration with Mongoose, command & event handlers, automatic slash command registration, and utility functions.

## ✨ Features

- ⚡️ Fast setup with TypeScript  
- 📥 Automatic slash command registration (`registerCommands.ts`)  
- 🔄 Robust event & command handlers  
- 🗄️ MongoDB integration via Mongoose  
- ⏱️ Cooldown mechanism for commands  
- 🖼️ Dynamic image generation using `node-html-to-image`  

## 🛠️ Requirements

- Node.js v18 or higher  
- Bun (optional) or Nodemon  
- MongoDB connection URI  
- Discord Bot Token  

## 🚀 Installation

```powershell
git clone https://github.com/<username>/discord-bot-template.git
cd discord-bot-template
# Using npm
npm install
# Or with Bun
bun install
```

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

## 📂 Project Structure

```
.
├─ src  
│  ├─ commands          # Slash command definitions  
│  ├─ database  
│  │  ├─ dbConnection.ts  
│  │  └─ models         # Mongoose models  
│  ├─ events            # Discord event handlers  
│  ├─ handlers          # Custom event & command logic  
│  ├─ types             # TypeScript type definitions  
│  └─ utils             # Utility functions (e.g., cooldowns)  
├─ templates            # HTML templates for image generation  
├─ nodemon.json         # Nodemon config  
├─ package.json  
├─ tsconfig.json  
└─ README.md  
```

## ⚙️ Usage

> **Register commands**  
```powershell
npm run registerCommands
```

> **Start development server**  
```powershell
npm run dev
```

> Or with Bun:  
```powershell
bun run dev
```

## 🤝 Contributing

1. Fork the repository 🍴  
2. Create a new branch (`git checkout -b feature/YourFeature`) 🌿  
3. Commit your changes (`git commit -m "Add some feature"`) 📝  
4. Push to the branch (`git push origin feature/YourFeature`) 🚀  
5. Open a Pull Request 🎉

## 📄 License

This project is licensed under the ISC License. 🚀
