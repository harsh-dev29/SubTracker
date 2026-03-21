🚀 SubTracker: Full-Stack Subscription Manager
SubTracker is a comprehensive MERN-stack application designed to help users track, manage, and visualize their recurring digital expenses in one secure, intuitive dashboard.

🛠 Tech Stack
Frontend: React.js, Tailwind CSS, Recharts, Axios

Backend: Node.js, Express.js

Database: MongoDB & Mongoose

Authentication: JWT (JSON Web Tokens) with httpOnly Cookies

Deployment: Vercel (Frontend) & Render (Backend)

✨ Key Features
Personalized Dashboard: A secure user-specific view of all active and upcoming subscriptions.

Data Visualization: Interactive Pie and Bar charts powered by Recharts to analyze spending by category (Streaming, Health, Gaming, etc.).

Dynamic CRUD: Seamlessly add, edit, and delete subscriptions with real-time UI updates.

Automated Tracking: Calculations for "Next Renewal" dates to keep users ahead of their billing cycles.

Responsive Design: A mobile-first UI with a synchronized navigation system that adapts to any screen size.

🧠 Technical Challenges & Solutions
1. Cross-Domain Authentication (The "Mobile Bug")
Challenge: Users could log in on Desktop but faced a 401 Unauthorized error on mobile devices due to strict third-party cookie policies between Vercel and Render.
Solution: Implemented SameSite: 'none' and secure: true flags in the backend cookie configuration and enabled withCredentials: true in the Axios frontend instance to ensure secure session persistence across different platforms.

2. Real-Time Data Transformation
Challenge: MongoDB returns raw subscription arrays, but Recharts requires specifically structured objects for visualization.
Solution: Developed custom utility functions (processCategoryData) using JavaScript .reduce() and .map() to aggregate spending data into category-based totals on the fly.

🚀 Getting Started
Clone the repository

Bash
git clone https://github.com/your-username/subtracker.git
Install Dependencies

Bash
# For Backend
cd backend && npm install
# For Frontend
cd frontend && npm install
Environment Variables
Create a .env file in the root and add:

Code snippet
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODE_ENV=development
Run the App

Bash
npm run dev
