# 📸 ClicksAlbum

ClicksAlbum is a modern full-stack social media platform that lets creators share posts, stories, and highlights with a sleek, interactive UI. The app blends a React + Tailwind front end with an Express + MongoDB API, Redis-backed sessions, and secure authentication.

## 🚀 Features

- 🔐 **Secure Authentication** with password hashing, OTP email verification, and Google OIDC.
- 📝 **Create, Update & Delete Posts** with likes, comments, shares, and saves.
- 🎞️ **Story Editor** with fonts, filters, and color accents.
- 💬 **Interactive UI** designed for modern creator workflows.
- 🧠 **Session Storage in Redis (Hash datatype)** for scalable auth sessions.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose ODM
- **Session Store:** Redis (hash sessions)
- **Auth:** Passport (Google OIDC) + OTP email verification

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB
- Redis

### Frontend
```sh
npm install
npm run dev
```

### Backend
```sh
cd server
npm install
npm run dev
```

### Environment Variables
Create a `.env` file inside `server/`:
```env
PORT=4000
CLIENT_ORIGIN=http://localhost:5173
SESSION_SECRET=replace-with-a-strong-secret
MONGO_URI=mongodb://localhost:27017/clicksalbum
REDIS_URL=redis://localhost:6379

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:4000/api/auth/google/callback

SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=no-reply@clicksalbum.com
```

## 📂 Project Structure

```plaintext
clicksalbum/
├── public/
├── src/             # React client
├── server/          # Express API
│   ├── src/
│   └── package.json
├── package.json
└── vite.config.js
```

## ✅ Roadmap

- [x] Modern UI for posts and stories
- [x] CRUD post interactions with comments, likes, shares, saves
- [x] Story editor with typography + filters
- [x] MongoDB + Mongoose backend
- [x] Redis session storage
- [ ] Media uploads & CDN delivery
- [ ] Real-time notifications

## 📜 License
This project is licensed under the **MIT License**.
