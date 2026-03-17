from flask import Flask, jsonify, request
import pandas as pd
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/api/data")
def get_data():
    horizon = int(request.args.get("horizon", 1))

    df = pd.read_csv("../analysis/data.csv")
    df['Time'] = pd.to_datetime(df['Time'])
    df = df.sort_values('Time')

    # Forecast logic
    df['forecast'] = df['Power'].shift(horizon)
    df = df.dropna()

    result = df[['Time', 'Power', 'forecast']].tail(100)

    return jsonify(result.to_dict(orient="records"))

if __name__ == "__main__":

port = int(os.environ.get("PORT", 5000))
app.run(host="0.0.0.0", port=port)