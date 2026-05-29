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

function IncomeExpenseChart({
  income,
  expense
}) {

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
        background: "white",
        borderRadius: "20px",
        padding: "25px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.1)"
      }}
    >

      <h2>
        Income vs Expense
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="name" />

          <YAxis />

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