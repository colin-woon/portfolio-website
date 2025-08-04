# 👨‍💻 Colin's Personal Portfolio

This repository contains the source code for my personal portfolio, a dynamic and responsive single-page application built with React, TypeScript, and Vite. It is designed to showcase my skills, projects, and experience in a clean and modern interface.

The live version is deployed and can be viewed [here](https://colin-woon.github.io/portfolio-website/) 🚀

## ⚡ Technical Features

This portfolio is more than just a static site. It incorporates several interesting technical features:

### 🌤️ 1. Dynamic Weather Widget
- **Live Data Integration:** Fetches real-time weather forecast data from Malaysia's public data API (`data.gov.my`).
- **Client-Side Caching:** Implements a caching mechanism using `localStorage` to reduce redundant API calls, respecting rate limits and improving performance. The cache is set to a 10-minute expiry.
- **Dynamic UI:** The widget displays the current day's weather, including a descriptive emoji, the forecast summary, and temperature range.

### ✨ 2. Interactive & Animated UI
- **Custom Components:** Built with a component-based architecture, featuring reusable and modular UI elements like project cards, a menu dock, and more.
- **Animations:** Utilizes `framer-motion` for smooth page transitions and a custom-built typing animation for the hero section, creating an engaging user experience.
- **Responsive Design:** The layout is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices using Tailwind CSS.

### 🔄 3. Automated CI/CD Pipeline
- **GitHub Actions:** A CI/CD pipeline is configured using GitHub Actions to automate the build and deployment process.
- **Continuous Deployment:** Every push to the `main` branch automatically triggers the pipeline, which builds the application and deploys it to GitHub Pages, ensuring the live portfolio is always up-to-date with the latest changes.

## 🛠️ Core Technologies
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:** 📥
    ```bash
    git clone https://github.com/colin-woon/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
