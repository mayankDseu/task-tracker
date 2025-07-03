# 📝 Personal Task Tracker

## 📖 Description
A clean, responsive task management application built using React.  
This app lets users log in with a username, add and manage tasks, filter them by status or priority, and toggle between light and dark themes — all data is stored locally using `localStorage`.

---

## 🚀 Features
- 🔐 **Simple Login**  
  Users can enter a name to get started (stored in localStorage).

- 🧾 **Task Management**  
  Add, edit, delete, and toggle completion of tasks.

- 🧮 **Task Metadata**  
  Includes title, description, creation date/time, priority (High/Medium/Low), and category.

- 🔍 **Filtering & Search**  
  Tabs for All, Completed, Pending tasks. Search input filters by title/description.

- 🌓 **Dark Mode Toggle**  
  Seamless switch between light and dark UI.

- 🧱 **Responsive Design**  
  Mobile and desktop views are optimized using media queries.

- 💾 **Persistent Data**  
  All tasks are stored in `localStorage` to survive page refreshes.

---

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personal-task-tracker.git
   ```

2. **Navigate to the project**
   ```bash
   cd personal-task-tracker
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. Open your browser at  
   [http://localhost:3000](http://localhost:3000)

---

## 🧰 Technologies Used

- **React.js** – Functional components and hooks  
- **React Router DOM** – For page navigation  
- **CSS** – Styling and responsive layout  
- **localStorage** – To store login and tasks persistently  

---

## 🔗 Live Demo
👉 [Click here to try the app](https://your-live-demo-link.vercel.app)  
_(Replace with your actual Netlify/Vercel/GitHub Pages link)_

---

## 🖼 Screenshots

| Light Mode                          | Dark Mode                           |
|------------------------------------|-------------------------------------|
| ![Light Mode](public/screenshots/loginlight.jpg) | ![Dark Mode](public/screenshots/dark.png) |


---

## 📂 Folder Structure

```
src/
├── components/
│   ├── Login.js
│   ├── TaskForm.js
│   ├── TaskItem.js
│   ├── TaskList.js
│   ├── TaskFilter.js
│   └── DarkToggle.js
├── styles/
│   └── App.css
├── utils/
│   └── localStorage.js
├── App.js
├── index.js
└── assets/
    └── login-preview.jpg
```

---


## 🙌 Acknowledgements

Built ❤️ by Mayank Chauhan