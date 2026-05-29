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

function CategoryRankingChart({
  categories
}) {

  const chartData =
    Object.entries(
      categories
    ).map(
      ([category, amount]) => ({
        category,
        amount
      })
    );

  const colors = [
    "#8B5CF6",
    "#06B6D4",
    "#22C55E",
    "#F59E0B",
    "#EF4444"
  ];

  return (
    <div
      style={{
        background: "rgba(20,20,40,0.75)",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(20,20,40,0.75)"
      }}
    >
      <h2 style={{ color: "white", fontSize:30 }}>
        Category Ranking
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart
          layout="vertical"
          data={chartData}
        >
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis type="number" stroke="white" />

          <YAxis
            dataKey="category"
            type="category"
            stroke="white"
          />

          <Tooltip />

          <Bar
            dataKey="amount"
            animationDuration={1500}
          >
            {chartData.map(
              (entry, index) => (
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

export default CategoryRankingChart;