import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function HealthScoreGauge({
  score,
  status
}) {

  let color = "#22C55E";

  if (score < 80) {
    color = "#F59E0B";
  }

  if (score < 60) {
    color = "#EF4444";
  }

  return (

    <div
      style={{
        background: "rgba(20,20,40,0.75)",
        borderRadius: "10px",
        padding: "10px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center",
        height: "97%"
      }}
    >

      <h2
        style={{
          marginBottom: "5px",
          color: "white",
          fontSize:30
        }}
      >
        Financial Health
      </h2>

      <div
        style={{
          width: 200,
          height: 205,
          margin: "95px auto"
        
        }}
      >

        <CircularProgressbar
          value={score}
          text={`${score}`}
          styles={buildStyles({
            textSize: "40px",
            pathColor: color,
            textColor: color,
            trailColor: "#e5e7eb"
          })}
        />

      </div>

      <h2
        style={{
          marginTop: "50px",
          color: color
        }}
      >
        {score}/100
      </h2>

      <h3 style={{ color: "#d9dadd" }}>
        {status}
      </h3>

      <p
        style={{
          color: "#d9dadd"
        }}
      >
        Financial Wellness Score
      </p>

    </div>

  );
}

export default HealthScoreGauge;