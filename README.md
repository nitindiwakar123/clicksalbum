# 📸 ClicksAlbum

ClicksAlbum is a modern social media platform that allows users to upload, share, and interact with photos and short videos. Designed for seamless user experience, ClicksAlbum brings a powerful and engaging way to connect through visual content.

## 🚀 Features

- 🔐 **User Authentication** (Sign Up, Login, Logout)
- 📸 **Photo & Video Uploading** with Appwrite Storage
- ❤️ **Post Likes & Comments**
- 🏠 **Personalized Feed & Explore Section**
- 👤 **User Profiles & Bio Customization**
- 📝 **Advanced Post Editor** (Similar to Instagram)

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Storage:** Appwrite Storage
- **Authentication:** Appwrite Auth (OAuth & JWT)

## 📦 Installation & Setup

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (v16+)
- Git
- Appwrite Server Setup

### Steps to Run Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/nitindiwakar123/clicksalbum.git
   cd clicksalbum
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Setup Environment Variables**
   - Create a `.env` file in the root directory and add the following:
     ```env
     VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
     VITE_APPWRITE_PROJECT_ID=your_project_id
     VITE_APPWRITE_BUCKET_ID=your_bucket_id
     ```

4. **Start the Development Server**
   ```sh
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to see the app in action.

## 📂 Project Structure

```plaintext
clicksalbum/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── utils/
│   ├── App.js
│   └── main.js
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🏗️ Project Roadmap

### ✅ Completed
- Initial React Setup with Vite
- User Authentication with Appwrite
- Post Uploading Feature

### 🔜 Upcoming Features
- Video Upload & Playback
- Post Editing & Deletion
- Follow/Unfollow System
- Dark Mode UI

## 🤝 Contributing

Contributions are always welcome! If you’d like to improve this project:
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push and create a pull request

## 📞 Contact
For any queries or collaboration, feel free to reach out:
- ✉️ Email: nitindiwakar2006@gmail.com

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

