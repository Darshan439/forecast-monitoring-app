📊 Forecast Monitoring Dashboard

A full-stack web application that visualizes power consumption data and generates simple forecasts using time-series shifting. Built with React (frontend) and Flask (backend) and deployed on the cloud using Render.

---

🚀 Live Demo

- 🌐 Frontend: https://forecast-monitoring-app-1.onrender.com
- 🔗 Backend API: https://forecast-monitoring-app.onrender.com/api/data

---

🧠 Features

- 📈 Interactive line chart for Power vs Forecast
- ⏱ Adjustable forecast horizon (user-controlled slider)
- 📊 Real-time data fetching from backend API
- 🔄 Dynamic updates based on user input
- ☁️ Fully deployed (frontend + backend)

---

🛠 Tech Stack

Frontend

- React.js
- Axios
- Recharts

Backend

- Flask
- Pandas
- Flask-CORS

Deployment

- Render (Web Service + Static Site)

---

⚙️ How It Works

1. Backend reads time-series data from CSV
2. Applies simple forecasting using:
   forecast = Power.shift(horizon)
3. API returns processed data
4. Frontend fetches and visualizes using charts

---

📊 Data Source

- Real-world production data was not accessible for this project.
- Therefore, a publicly available dataset from Kaggle was used for development and testing purposes.
- The dataset simulates time-series power consumption data suitable for forecasting tasks.

---

📁 Project Structure

forecast-monitoring-app/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   ├── package.json
│
├── analysis/
│   ├── data.csv
│
└── README.md

---

🔧 Installation (Local Setup)

1️⃣ Clone the repository

git clone https://github.com/your-username/forecast-monitoring-app.git
cd forecast-monitoring-app

---

2️⃣ Backend Setup

cd backend
pip install -r requirements.txt
python app.py

---

3️⃣ Frontend Setup

cd frontend
npm install
npm start

---

🌍 Deployment

- Backend deployed as Render Web Service
- Frontend deployed as Render Static Site
- Connected via public API endpoint

---

📌 Future Improvements

- 🔮 Use ML model instead of simple shift forecast
- 🔐 Add authentication system
- 📊 Add multiple metrics & datasets
- 🎨 Improve UI/UX

- ## 📊 Data Source

- Real-world production data was not accessible for this project.  
- Therefore, a publicly available dataset from **Kaggle** was used for development and testing purposes.  
- The dataset simulates time-series power consumption data suitable for forecasting tasks.

---

🙌 Author

Darshan N Gowda

- GitHub: https://github.com/Darshan439
- LinkedIn: (add your link here)

---

⭐ If you like this project

Give it a ⭐ on GitHub!
