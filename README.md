<div align="center">

# 🏨 Fixyland - Luxury Hotel Website Clone

**A feature-rich, fully interactive clone of the Fixyland website, built with React, Vite, and Tailwind CSS.**

</div>

---

This project is a complete front-end clone of the Fixyland luxury hotel website, built from the ground up to demonstrate modern web development practices. The application is fully responsive, animated, and includes a persistent dark/light mode, making it a polished and professional portfolio piece.

## ✨ Features

-   **Multi-Page Navigation:** Fully routed application with pages for Home, Rooms, and Contact using **React Router DOM**.
-   **Dynamic Room Filtering:** Interactive filtering on the rooms page by category (Solo, Couples, Family) with smooth animations.
-   **Mock Booking System:** A functional booking flow where users can select a room, open a modal with a form, and receive a confirmation message.
-   **Full Dark/Light Mode:** A persistent theme switcher that respects the user's OS preference and saves their choice in `localStorage`.
-   **Custom Animated Cursor:** Replaces the default system cursor with a custom one that animates and reacts to interactive elements.
-   **Interactive Spotlight Cards:** A subtle radial gradient follows the user's cursor on room and news cards for an engaging effect.
-   **Fully Responsive Design:** Optimized for all screen sizes, from mobile phones to widescreen desktops.
-   **Advanced Animations:**
    -   Smooth page transitions.
    -   Scroll-reveal animations for sections.
    -   Staggered animations for list items.
    -   Micro-interactions and hover effects.

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
</p>

---

### 💡 Why This Tech Stack?

The technology stack for this project was deliberately chosen to create a modern, high-performance, and interactive user experience while maintaining an excellent developer experience.

-   **React (with Vite):** Chosen for its **component-based architecture** and declarative UI, making the codebase clean, scalable, and easy to maintain. **Vite** provides an **unparalleled developer experience** with lightning-fast server starts and instant Hot Module Replacement (HMR).

-   **Tailwind CSS:** A utility-first framework that enables **rapid UI development** directly in the JSX. It enforces a consistent design system and makes implementing responsive design and dark mode incredibly intuitive.

-   **React Router:** The industry standard for creating a **seamless client-side navigation** experience in a Single Page Application (SPA), eliminating full page reloads.

-   **Framer Motion:** A powerful, declarative animation library that integrates perfectly with React. It was essential for implementing **sophisticated UI animations**, page transitions, and micro-interactions that bring the website to life.

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v16.x or later) and npm installed.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Project

To start the development server, run:
```sh
npm run dev

Open http://localhost:5173 to view it in your browser.

📜 Available Scripts
Script	Description
npm run dev	Runs the app in development mode with HMR.
npm run build	Builds the app for production to the dist folder.
npm run lint	Lints the source code using ESLint.
npm run preview	Serves the production build locally to preview it.
📂 Project Structure

The project follows a standard component-based structure to keep the codebase organized and scalable.

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
project-root/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context providers (ThemeContext)
│   ├── pages/           # Page-level components
│   ├── App.jsx          # Main application layout
│   ├── main.jsx         # Main entry point
│   └── index.css        # Global styles & Tailwind directives
└── ... (config files)
