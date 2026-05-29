import { useState } from "react";
import axios from "axios";

function RetirementPlanner() {

  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");

  const [result, setResult] = useState(null);

  const calculate = async () => {

    const response = await axios.post(
      "https://budgetiq-personal-finance-analyzer-production.up.railway.app/",
      {
        current_age: Number(currentAge),
        retirement_age: Number(retirementAge),
        monthly_savings: Number(monthlySavings)
      }
    );

    setResult(response.data);
  };

  return (

    <div
      style={{
        background: "rgba(20,20,40,0.75)",
        borderRadius: "24px",
        padding: "35px",
        boxShadow:
          "0 15px 40px rgba(0,0,0,0.08)"
      }}
    >

      <h2
        style={{
          marginBottom: "10px",
          fontSize: "32px",
          color: "white"
        }}
      >
        🏖 Retirement Planner
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "30px"
        }}
      >
        Estimate your retirement corpus based on
        your monthly investments.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "white"
            }}
          >
            Current Age
          </label>

          <input
            value={currentAge}
            onChange={(e) =>
              setCurrentAge(e.target.value)
            }
            placeholder="e.g. 25"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "4px solid #1f0e61a1",
              fontSize: "16px",
              
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "white"
            }}
          >
            Retirement Age
          </label>

          <input
            value={retirementAge}
            onChange={(e) =>
              setRetirementAge(e.target.value)
            }
            placeholder="e.g. 60"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "4px solid #1f0e61a1",
              fontSize: "16px"
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Monthly Savings
          </label>

          <input
            value={monthlySavings}
            onChange={(e) =>
              setMonthlySavings(e.target.value)
            }
            placeholder="e.g. ₹10,000"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "4px solid #1f0e61a1",
              fontSize: "16px"
            }}
          />
        </div>

      </div>

      <button
        onClick={calculate}
        style={{
          marginTop: "30px",
          padding: "14px 28px",
          border: "none",
          borderRadius: "14px",
          background:
            "linear-gradient(135deg,#8B5CF6,#6366F1)",
          color: "white",
          fontWeight: "700",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Calculate Retirement Goal
      </button>

      {result && (

        <div
          style={{
            marginTop: "35px",
            background:
              "linear-gradient(135deg,#8B5CF6,#06B6D4)",
            borderRadius: "20px",
            padding: "30px",
            color: "white"
          }}
        >

          <h3
            style={{
              marginBottom: "10px",
              fontSize: "20px"
            }}
          >
            Estimated Retirement Corpus
          </h3>

          <h1
            style={{
              margin: 0,
              fontSize: "42px"
            }}
          >
            ₹
            {result.future_corpus.toLocaleString()}
          </h1>

          <p
            style={{
              marginTop: "15px"
            }}
          >
            ⏳ Years Remaining:
            {" "}
            {result.years_remaining}
          </p>

        </div>

      )}

    </div>

  );

}

export default RetirementPlanner;
