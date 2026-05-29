import React, { useState } from "react";
import axios from "axios";

import KPICard from "../components/KPICard";
import InsightsCard from "../components/InsightsCard";

import Box from "@mui/material/Box";
import TransactionsTable from "../components/TransactionsTable";
import RetirementPlanner from "../components/RetirementPlanner";
import BudgetRecommendationCard from "../components/BudgetRecommendationCard";
import HealthScoreGauge from "../components/HealthScoreGauge";
import ExpenseTrendChart from "../components/ExpenseTrendChart";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import CategoryRankingChart from "../components/CategoryRankingChart";
import TopExpensesChart from "../components/TopExpensesChart";
import ForecastTrendChart from "../components/ForecastTrendChart";
import BudgetVsActualChart from "../components/BudgetVsActualChart";
import ForecastCard from "../components/ForecastCard";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Dashboard() {
  const [data, setData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const formatCurrency = (value) =>
    value.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    });

  const { darkMode } = useContext(ThemeContext);
  const chartData = data
    ? Object.entries(data.analytics.category_spending).map(([key, value]) => ({
        name: key,
        value: value,
      }))
    : [];
  const COLORS = [
    "#8B5CF6",
    "#06B6D4",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
  ];
  const uploadFile = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);

      alert("Upload Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: darkMode
          ? "linear-gradient(135deg,#0f172a,#1e293b)"
          : "linear-gradient(135deg,#eef2ff,#f8fafc)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "900",
              margin: 5,
              letterSpacing: "-2px",
              background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            BudgetIQ
          </h1>

          <p
            style={{
              marginTop: "12px",
              fontSize: "20px",
              fontWeight: "500",
              color: darkMode ? "#CBD5E1" : "#64748B",
            }}
          >
            Smart Personal Finance Intelligence
          </p>
        </div>

        <ThemeToggle />
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          marginTop: "20px",
          marginBottom: "30px",
          padding: "35px",
          borderRadius: "28px",
          background: darkMode
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(20px)",
          border: darkMode
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(255,255,255,0.6)",
          boxShadow: darkMode
            ? "0 0 40px rgba(139,92,246,0.2)"
            : "0 10px 40px rgba(0,0,0,0.08)",

          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "15px",
            color: darkMode ? "white" : "#1E293B",
          }}
        >
          📄 Upload Bank Statement
        </h2>

        <p
          style={{
            marginBottom: "25px",
            color: darkMode ? "#CBD5E1" : "#64748B",
            fontSize: "17px",
            lineHeight: "1.8",
          }}
        >
          Upload your PDF statement and let BudgetIQ generate
          insights,forecasts, health scores, and spending analytics.
        </p>
        <input
          type="file"
          id="file-upload"
          accept=".pdf"
          onChange={uploadFile}
          style={{
            display: "none",
          }}
        />
        <label htmlFor="file-upload">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",

              background: "linear-gradient(135deg,#8B5CF6,#6366F1)",

              color: "white",

              padding: "14px 28px",

              borderRadius: "16px",

              fontWeight: "600",

              fontSize: "16px",

              cursor: "pointer",

              boxShadow: "0 10px 25px rgba(139,92,246,0.35)",

              transition: "all 0.3s ease",
            }}
          >
            📄 Upload Bank Statement
          </div>
        </label>
        {selectedFile && (
          <div
            style={{
              marginTop: "20px",

              display: "inline-flex",

              alignItems: "center",

              gap: "10px",

              background: "rgba(255,255,255,0.08)",

              border: "1px solid rgba(255,255,255,0.1)",

              padding: "12px 18px",

              borderRadius: "12px",

              color: "white",
            }}
          >
            ✅ {selectedFile.name}
          </div>
        )}
      </div>

      {data && (
        <>
          {/* KPI Cards */}
          <Box mt={5}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "24px",
                marginTop: "30px",
                marginBottom: "40px",
              }}
            >
              <KPICard
                title="Montly Average Income"
                value={`₹${formatCurrency(data.analytics.avg_monthly_income)}`}
              />
              <KPICard
                title="Monthly Average Expense"
                value={`₹${formatCurrency(data.analytics.avg_monthly_expense)}`}
              />
              <KPICard
                title="MonthlyAverage Savings"
                value={`₹${formatCurrency(data.analytics.avg_monthly_savings)}`}
              />
              <KPICard
                title="Health Score"
                value={`${data.health_score.score}/100`}
              />
            </div>
          </Box>
          <Box mt={4}>
            <InsightsCard insights={data.insights} />
          </Box>
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              📊 Analytics Overview
            </h2>

            <p
              style={{
                color: "#94A3B8",
                fontSize: "15px",
              }}
            >
              Track your income, expenses and spending patterns
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "50px",
              marginTop: "20px",
            }}
          >
            <IncomeExpenseChart
              income={data.analytics.total_income}
              expense={data.analytics.total_expense}
            />

            <div
              style={{
                background: darkMode ? "rgba(20,20,40,0.75)" : "white",
                borderRadius: "50px",
                padding: "50px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                width: "100%",
                alignSelf: "centert",
                minHeight: "500px",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <h2
                style={{
                  color: "white",
                  fontSize: "36px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  width: "80%",
                }}
              >
                Category Spending
              </h2>

              <p
                style={{
                  color: "#94A3B8",
                  marginBottom: "20px",
                  width: "60%",
                }}
              >
                Expense distribution by category
              </p>

              <PieChart
                width={450}
                height={350}
                color="rgba(20,20,40,0.75)"
                size="80%"
                align="center"
              >
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={115}
                  innerRadius={70}
                  paddingAngle={5}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="square"
                />
              </PieChart>
            </div>
          </div>

          {/* Spending Analysis */}

          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              💳 Spending Analysis
            </h2>

            <p
              style={{
                color: "#94A3B8",
              }}
            >
              Understand where your money goes
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "25px",
            }}
          >
            <CategoryRankingChart
              categories={data.analytics.category_spending}
            />

            <TopExpensesChart transactions={data.transactions} />
          </div>

          {/* Forecasting */}

          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              📈 Financial Forecast
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "380px 1fr",
                gap: "24px",
              }}
            >
              <ForecastCard
                forecast={data.forecast}
                current_month_expense={data.analytics.total_expense}
              />

              <ForecastTrendChart forecast={data.forecast} />
            </div>
            <p
              style={{
                color: "#94A3B8",
              }}
            >
              AI-powered prediction of future expenses
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "25px",
            }}
          >
            <HealthScoreGauge
              score={data.health_score.score}
              status={data.health_score.status}
            />

            <ForecastTrendChart forecast={data.forecast} />

            <BudgetVsActualChart
              recommendations={data.budget_recommendations}
            />

            {data.monthly_trend && (
              <ExpenseTrendChart data={data.monthly_trend} />
            )}

            <h3
              style={{ color: "white", fontSize: "24px", fontWeight: "700" }}>📊 Model Comparison</h3>

            <p style={{ color: "white", fontSize: "20px" }}>
              Linear Regression R²:
              {data?.forecast?.linear_regression_metrics?.r2_score}
            </p>

            <p style={{ color: "white", fontSize: "20px" }}>
              Random Forest R²:
              {data?.forecast?.random_forest_metrics?.r2_score}
            </p>

            <p style={{ color: "white", fontSize: "20px" }}>
              🏆 Best Model:
              {data?.forecast?.model}
            </p>
          </div>

          {/* Budget Recommendations */}

          <div
            style={{
              marginBottom: "24px",
              color: "rgba(20,20,40,0.75)",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              🎯 Budget Optimizer
            </h2>

            <p
              style={{
                color: "#94A3B8",
              }}
            >
              AI-generated budget recommendations to maximize savings
            </p>
          </div>

          <div
            style={{
              display: "grid",

              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",

              gap: "24px",
            }}
          >
            {data.budget_recommendations.map((item, index) => (
              <BudgetRecommendationCard key={index} recommendation={item} />
            ))}
          </div>

          {/* Retirement */}

          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              🏖 Retirement Planning
            </h2>

            <p
              style={{
                color: "#94A3B8",
              }}
            >
              Estimate your future wealth and retirement corpus
            </p>
          </div>

          <RetirementPlanner />

          {/* Transactions */}

          <h2 style={{ marginTop: "50px", color: "white", fontSize: "40px" }}>
            📋 Transaction History
          </h2>

          <TransactionsTable
            transactions={data.transactions}
            style={{ color: "rgba(20,20,40,0.75)" }}
          />
        </>
      )}
    </div>
  );
}

export default Dashboard;
