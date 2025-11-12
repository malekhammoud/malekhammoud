# 👋 Hey, I'm Malek Hammoud

**Software engineer | AI + Robotics Builder | Bronze Medalist @ Canada-Wide Science Fair**  
📍 Based in London, Ontario | [malekhammoud.com](https://malekhammoud.com)

---

## 💡 About Me

I'm a passionate builder with experience in full-stack web development, autonomous robotics, and applied AI.  
I’ve worked on consulting projects for Microsoft and IKEA, built scalable web apps, and developed award-winning robotics systems that blend hardware and software.

Whether it’s solving real-world problems with AI or launching clean, fast web apps — I’m always excited to build.

---

## 🔧 Skills & Technologies

- **Languages:** Python, C++, Java, JavaScript, HTML/CSS, SQL, PHP  
- **Web:** React, Node.js, WASP, Prisma  
- **AI/ML:** CNNs, Reinforcement Learning  
- **Other:** Git, Linux, Agile workflows, Hardware prototyping, Raspberry Pi, Arduino


## 🏆 Highlights

- 🥉 **Bronze Medalist**, Canada-Wide Science Fair 2024  
- 💼 **Consulted for Microsoft & IKEA** on AI and sustainability solutions  
- 🛠️ Interned at startups building scalable, user-focused software  
- 🏁 Currently building and experimenting with AI, robotics, and impactful tools

---

## 📫 Let’s Connect

- 🌐 Website: [malekhammoud.com](https://malekhammoud.com)  
- 💼 LinkedIn: [linkedin.com/in/malekhammoud](https://linkedin.com/in/malekhammoud)  
- ✉️ Email: [malek@malekhammoud.com](mailto:malek@malekhammoud.com)

Always happy to collaborate, connect, or just talk about cool ideas.

---

## AI Chat configuration

Create `.env.local` in the project root (this file is git-ignored) and add:

```
GEMINI_API_KEY=your_ai_studio_api_key
# Optional, override default model (defaults to gemini-pro)
GEMINI_MODEL=gemini-pro
```

Note: Do not prefix with quotes. Ensure there are no trailing spaces.

Run the health check to verify envs are loaded:

- GET `/api/chat/health` returns `{ ok: true, model, keyPreview }` if the key is present.
- GET `/api/chat/models` lists supported model names for your key.

If you see `API_KEY_INVALID` errors, rotate your key in Google AI Studio and update `.env.local`. On Vercel or other hosting, set the same env vars in the dashboard.

---

> “Aim high, then get halfway there.”
