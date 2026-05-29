import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function ExpenseTrendChart({ data }) {

  return (

    <div
      style={{
        width: "100%",
        height: "475px",
        background: "rgba(20,20,40,0.75)",
        borderRadius: "20px",
        padding: "20px",
        marginTop: "5px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >

      <h2 style={{ color: "white", fontSize:30 }}>Expense Trend</h2>

      <ResponsiveContainer
        width="100%"
        height={370}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis stroke="white" dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="expense"
            stroke={
              data[1].expense > data[0].expense
                ? "#EF4444"
                : "#22C55E"
            }
            
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ExpenseTrendChart;