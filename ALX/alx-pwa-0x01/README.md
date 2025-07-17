# 🎬 CineSeek - Movie Discovery App

> ALX Final Project - MoviesDatabase API Integration using Next.js

---

## 🌐 Live Demo

Experience the app directly via GitHub Pages:  
🔗 [https://elharba-abdelmounaim.github.io/alx-project-0x14/alx-movie-app/](https://elharba-abdelmounaim.github.io/alx-project-0x14/alx-movie-app/)

---

## 🧠 Project Overview

**CineSeek** is a modern web application built with **Next.js** and **TypeScript**, enabling users to explore a rich library of movies. It integrates with the **MoviesDatabase API** via [RapidAPI](https://rapidapi.com/SAdrian/api/moviesdatabase) to provide up-to-date movie data.

Users can:
- 🔍 Browse and search movies
- 🎞️ Filter by genre and release year
- 📄 Navigate between pages (pagination)
- ⚡ Experience a clean and fast user interface

---

## 🚀 Features

- ✅ Movie browsing with pagination
- 🎬 Filter by genre and release year
- 📷 Movie posters and metadata display
- 💡 Responsive design
- 🌀 Loading animation while fetching
- ⚙️ Optimized for GitHub Pages static deployment

---

## ⚙️ Technologies Used

- **Next.js** (React framework)
- **TypeScript**
- **Tailwind CSS** for UI styling
- **Fetch API** for data fetching
- **React Hooks** (`useState`, `useEffect`, `useCallback`)
- **MoviesDatabase API** via [RapidAPI](https://rapidapi.com/)

---

## 🛠️ How to Install and Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/elharba-abdelmounaim/alx-project-0x14.git
cd alx-project-0x14/alx-movie-app
```

2. **Install dependencies**
```
npm install
```

3. **Set up environment variables**

Create a .env.local file in the root of the project and add your API key from RapidAPI:
```
MOVIE_API_KEY=YOUR_RAPIDAPI_KEY_HERE
```

You can obtain a key by subscribing to MoviesDatabase API.

4. **Start the development server**


```
npm run dev
```
Visit http://localhost:3000 in your browser.


## 📱 Run on Your Mobile Device (Same Wi-Fi)
Find your local IP from terminal (shown when running npm run dev, e.g. http://192.168.1.10:3000)

Open that IP on your phone browser

Make sure firewall is not blocking the port


## 📁 Folder Structure
```
alx-movie-app/
├── components/
│   └── commons/
│       ├── Button.tsx
│       ├── Loading.tsx
│       └── MovieCard.tsx
├── pages/
│   ├── api/
│   │   └── fetch-movies.ts
│   └── movies/
│       └── index.tsx
├── interfaces/
│   └── index.ts
├── public/
├── styles/
├── .env.local
├── package.json
└── next.config.js
```
## 🤝 Contribution

Your contributions are welcome!  
If you find a bug, have a suggestion, or want to improve the project, feel free to open an **Issue** or submit a **Pull Request**.  
Together, we can make CineSeek even better. 🚀

---

## 📜 License

This project is open-source and licensed under the **MIT License**.  
You are free to use, modify, and distribute it with proper attribution.

---

## 📬 Contact

Made with ❤️ by **[Abdelmounaim Elharba][(https://www.linkedin.com/in/monim-elharba-246861338)](https://www.linkedin.com/in/abdelmounaim-elharba-246861338/)**  
📧 **Email**: [elharba.abdelmounaim@gmail.com](mailto:elharba.abdelmounaim@gmail.com)  

