import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [horizon, setHorizon] = useState(4);

  useEffect(() => {
    axios.get(`https://forecast-monitoring-app.onrender.com/api/data?horizon=${horizon}`)
      .then(res => {
        const formatted = res.data.map(item => ({
          ...item,
          Time: new Date(item.Time).toLocaleTimeString()
        }));
        setData(formatted);
      })
      .catch(err => console.error(err));
  }, [horizon]);

  return (
    <div style={{
      maxWidth: "1000px",
      margin: "auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      {/* Title */}
      <h1 style={{
        fontSize: "26px",
        fontWeight: "bold",
        marginBottom: "20px"
      }}>
        Forecast Monitoring Dashboard
      </h1>

      {/* Controls */}
      <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        marginBottom: "20px",
        padding: "15px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px"
      }}>
        <label>Forecast Horizon: {horizon}h</label>
        <input
          type="range"
          min="0"
          max="48"
          value={horizon}
          onChange={(e) => setHorizon(e.target.value)}
        />
      </div>

      {/* Metrics */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px"
      }}>
        <div style={{ background: "#fff", padding: "10px", borderRadius: "6px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
          MAE: 120
        </div>
        <div style={{ background: "#fff", padding: "10px", borderRadius: "6px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
          RMSE: 180
        </div>
        <div style={{ background: "#fff", padding: "10px", borderRadius: "6px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
          P99: 300
        </div>
      </div>

      {/* Chart */}
      <div style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Power" stroke="#007bff" strokeWidth={2} />
          <Line type="monotone" dataKey="forecast" stroke="#28a745" strokeWidth={2} />
        </LineChart>
      </div>

    </div>
  );
}

export default App;