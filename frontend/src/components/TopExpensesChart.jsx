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

function TopExpensesChart({
  transactions
}) {

  const topExpenses =
    transactions
      ?.filter(
        (t) =>
          t.Transaction_Type ===
          "Expense"
      )
      ?.sort(
        (a, b) =>
          b.Amount - a.Amount
      )
      ?.slice(0, 5)
      ?.map((t) => ({
        description:
          t.Description.length > 25
            ? t.Description.substring(
                0,
                25
              ) + "..."
            : t.Description,
        amount: t.Amount
      }));

  const colors = [
    "#EF4444",
    "#F97316",
    "#F59E0B",
    "#EC4899",
    "#8B5CF6"
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
        Top 5 Expenses
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart
          layout="vertical"
          data={topExpenses}
        >
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis type="number" stroke="white" />

          <YAxis
            dataKey="description"
            type="category"
            width={150}
            stroke="white"
          />

          <Tooltip />

          <Bar
            dataKey="amount"
            animationDuration={1500}
          >
            {topExpenses?.map(
              (
                entry,
                index
              ) => (
                <Cell
                  key={index}
                  fill={
                    colors[
                      index %
                      colors.length
                    ]
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

export default TopExpensesChart;