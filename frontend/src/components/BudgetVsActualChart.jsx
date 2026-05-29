import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

function BudgetVsActualChart({
  recommendations
}) {

  const chartData =
    recommendations.map(
      (item) => ({
        category:
          item.category,
        actual:
          item.current_spending,
        budget:
          item.recommended_budget
      })
    );

  return (

    <div
      style={{
        background: "rgba(20,20,40,0.75)",
        borderRadius: "20px",
        padding: "25px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.1)",
        height: "470px"
      }}
    >

      <h2 style={{ color: "white", fontSize:30 }}>
        Budget vs Actual Spending
      </h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <BarChart
          data={chartData}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis stroke="white"
            dataKey="category"
          />

          <YAxis stroke="white" />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="actual"
            fill="#EF4444"
            name="Actual"
            radius={[
              6,
              6,
              0,
              0
            ]}
          />

          <Bar
            dataKey="budget"
            fill="#22C55E"
            name="Budget"
            radius={[
              6,
              6,
              0,
              0
            ]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default BudgetVsActualChart;