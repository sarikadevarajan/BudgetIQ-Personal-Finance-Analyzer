import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function ForecastTrendChart({
  forecast
}) {

  const chartData = [
    {
      month: "Current",
      amount:
        forecast.current_month_expense
    },
    {
      month: "Forecast",
      amount:
        forecast.predicted_next_month
    }
  ];

  return (

    <div
      style={{
        background: "rgba(20,20,40,0.75)",
        borderRadius: "20px",
        padding: "25px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.1)"
      }}
    >

      <h2 style={{ color: "white", fontSize:30 }}>
        ML Forecast Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart
          data={chartData}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis stroke="white"
            dataKey="month"
          />

          <YAxis stroke="white" />

          <Tooltip
            formatter={(value) =>
              `₹${value}`
            }
          />

          <Line
            type="monotone"
            dataKey="amount"
            stroke={
              forecast.trend === "Increase"
                ? "#22C55E"
                : "#EF4444"
            }
            strokeWidth={4}
            dot={{
              r: 8
            }}
            activeDot={{
              r: 12
            }}
            animationDuration={
              2000
            }
          />

        </LineChart>

      </ResponsiveContainer>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center"
        }}
      >

        <h3
          style={{
            color: forecast.trend === "Increase"
              ? "#22C55E" : "#EF4444" }}>
          {forecast.trend ===
          "Increase"
            ? "📈 Increase Expected"
            : "📉 Decrease Expected"}
        </h3>

        <p style={{ color: "white" }}>
          Predicted Change:
          {" "}
          {forecast.change_percent}%
        </p>

        <p style={{ color: "white" }}>
          Model:
          {" "}
          {forecast.model}
        </p>

      </div>

    </div>
  );
}

export default ForecastTrendChart;