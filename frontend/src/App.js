
import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [horizon, setHorizon] = useState(4);

  useEffect(() => {
  axios.get(`http://127.0.0.1:5000/api/data?horizon=${horizon}`)
    .then(res => {
      const formatted = res.data.map(item => ({
        ...item,
        Time: new Date(item.Time).toLocaleTimeString()
      }));

      console.log(formatted); // 👈 keep for debug
      setData(formatted);
    })
    .catch(err => console.error(err));
}, [horizon]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Forecast Monitoring Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
      <label>Forecast Horizon: {horizon}h</label>
      <br />
      <input
        type="range"
        min="0"
        max="48"
        value={horizon}
        onChange={(e) => setHorizon(e.target.value)}
      />
    </div>

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
  );
}

export default App;