# 🚀 MERN Stack Template

A modern, responsive starter template built with React + Vite, featuring Authentication, Protected Routes, and Tailwind CSS styling.

\
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)](https://vitejs.dev/)

## ✨ Features

- 📱 **Responsive Design** - Mobile-first design approach
- 🔒 **Authentication System** - Complete auth flow with protected routes
- 🎨 **Modern UI** - Clean and professional design with Tailwind CSS
- 🚦 **Route Protection** - Secure route handling for authenticated users
- 🔄 **Persistent Login** - Session management across page refreshes
- ⚡ **Fast Development** - Powered by Vite for quick development and hot reloading

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite 7
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Authentication:** JWT (ready to integrate)

## 📦 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/VarunS27/React-Tailwind_Template-.git
   cd mern_template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🗂️ Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── Home.jsx
│   └── ...
├── pages/
│   ├── auth/          # Authentication pages
│   │   ├── login.jsx
│   │   └── register.jsx
│   └── dashboard/     # Protected pages
├── context/           # Context providers
└── App.jsx           # Main application component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 🎯 Ready-to-Use Features

1. **Authentication System**
   - Login/Register forms
   - Protected routes
   - Persistent sessions
   - JWT ready

2. **Component Library**
   - Responsive navbar
   - Form components
   - Loading states
   - Error handling

3. **Page Templates**
   - Landing page
   - Dashboard
   - Auth pages
   - 404 page

## 🚀 Deployment

1. **Build your application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. Deploy the contents of the `dist` folder to your hosting provider

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
```



## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 💖 Built With Love

Built with ❤️ for developers by [Varun Shah](https://github.com/VarunS27)

---

**Note:** This is a starter template designed to help developers quickly bootstrap their MERN stack projects. Feel free to modify and customize it according to your needs.

Happy Coding! 🎉
