# HackForge

**The One-Click MVP Builder for Developers**

Production-ready full-stack applications in 60 seconds. Just type your idea—let AI handle the rest, from React frontend to MongoDB backend to live deployment. Built for Bolt⚡.

---

## 🚀 Features

- **AI-Powered App Generation:** Describe your idea, and HackForge scaffolds a full-stack app for you.
- **Modern Tech Stack:** React, TypeScript, TailwindCSS, Express, MongoDB, and more.
- **One-Click Deploy:** Seamless deployment to Vercel/Render with CI/CD and domain setup.
- **Template Library:** Discover, remix, and share production-ready templates with the community.
- **Workspace IDE:** Edit, preview, and manage your generated code in-browser with Monaco Editor.
- **Command Palette:** Fast navigation and actions via ⌘K/ctrl+K.
- **Gamified Experience:** Earn XP, badges, and achievements as you build and share projects.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, TailwindCSS, Framer Motion
- **Routing:** React Router DOM
- **Editor:** @monaco-editor/react
- **Icons:** Lucide React
- **State & UX:** React Hooks, Framer Motion, Hotkeys
- **Backend (Generated):** Express, MongoDB (Mongoose), Auth (Firebase/Auth0)
- **Deployment:** Vercel/Render (simulated in UI)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/hackforge.git
cd hackforge
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

---

## 🖥️ Project Structure

```
├── src/
│   ├── components/      # Navbar, CommandPalette, etc.
│   ├── pages/           # Forge, Workspace, Deploy, Library, Account
│   ├── App.tsx          # Main app and routing
│   └── main.tsx         # Entry point
├── public/
├── index.html
├── package.json
└── ...
```

---

## 📚 Key Pages & Components

- **Forge:** Start by describing your app idea. Use text or voice input. AI generates the project.
- **Workspace:** In-browser IDE to view/edit generated code (Monaco Editor), file explorer, and terminal.
- **Deploy:** Configure and simulate one-click deployment, environment variables, and domain setup.
- **Library:** Browse and remix community templates. Filter by category, search, and upload your own.
- **Account:** View your profile, XP, achievements, and manage your projects.
- **Navbar & CommandPalette:** Fast navigation and global actions.

---

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- [Bolt](https://bolt.fun/) Hackathon
- [Vercel](https://vercel.com/), [Render](https://render.com/)
- [Lucide Icons](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)

---

> **HackForge** — Build, deploy, and share MVPs at lightning speed. Powered by AI. Built for builders. # HackForge
