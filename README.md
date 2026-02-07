# Weekly React Project Portfolio

## 👤 About Me
Hi, I’m **Quanda Grant**, a developer currently completing weekly React assignments focused on strengthening core frontend skills. This portfolio showcases coursework projects and demonstrates my understanding of React components, props, and dynamic rendering using modern development tools.

---

## 🎯 Assignment Objective
The goal of this assignment is to consolidate the use of **React Components and Props** by creating a professional portfolio-style application. The project dynamically displays multiple projects by mapping structured data to reusable components, reinforcing best practices in component architecture and data-driven UI development.

---

## 🛠️ Tech Stack
- React
- Vite
- JavaScript (ES6+)
- CSS (Flexbox / Grid)
- npm

---

## 🚀 Project Setup
This project was initialized using Vite:

```bash
npm create vite@latest
npm install
npm run dev
All default files and styles were removed to begin with a clean project structure.

🧩 Component Architecture
ProjectCard.jsx
A reusable component located in src/components/ that receives the following props:

title – The project title

description – A brief summary of the project

link – A URL linking to the GitHub repository or live demo

Each card presents project details along with a button or link for navigation.

📊 Dynamic Rendering
In App.jsx, an array of objects represents weekly assignment projects. Each object includes:

id

title

description

link

The .map() method is used to iterate over the array and render a ProjectCard component for each project. Each rendered component is assigned a unique key to follow React best practices.

🎨 Layout & Styling
Project cards are organized using CSS Flexbox or Grid.

The layout is responsive and visually structured.

Each card includes a clear call-to-action button linking to the GitHub repository or live demo.

📸 Screenshots
Final Browser View
(Insert screenshot of the completed portfolio displaying project cards)

🔗 Submission Details
GitHub Repository: [Insert public repository link]

Screenshot: Included above

✅ Learning Outcomes
Building reusable React components

Passing and consuming props effectively

Rendering dynamic lists with .map()

Structuring a React project professionally

Applying modern CSS layout techniques