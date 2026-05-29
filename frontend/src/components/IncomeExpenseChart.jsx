import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid
} from "recharts";

function IncomeExpenseChart({ income, expense }) {

  const data = [
    {
      name: "Income",
      amount: income
    },
    {
      name: "Expense",
      amount: expense
    }
  ];

  const colors = [
    "#22C55E",
    "#EF4444"
  ];

  return (
    <div
      style={{
        background:"rgba(20,20,40,0.75)",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <h2 style={{ color: "white" }}>
        Income vs Expense
      </h2>

      <ResponsiveContainer
        width="100%"
        height={450}
      >
        <BarChart data={data}>
          <CartesianGrid style={{ stroke: "white" }}
            strokeDasharray="3 3"
          />

          <XAxis stroke="white" 
           dataKey="name" />
          <YAxis stroke="white" />

          <Tooltip />

          <Bar
            dataKey="amount"
            animationDuration={1500}
          >
            {data.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    colors[index]
                  }
                />
              )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeExpenseChart;