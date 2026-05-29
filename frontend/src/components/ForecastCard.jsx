import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

import { premiumCard }
from "../styles/cardStyle";

function ForecastCard({ forecast }) {

  if (!forecast) return null;

  const trendColor =
    forecast.trend === "Decrease"
      ? "#22C55E"
      : forecast.trend === "Increase"
      ? "#EF4444"
      : "#F59E0B";

  const formatCurrency = (value) =>
    Number(value).toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    });

  return (

    <Card
      sx={{
        ...premiumCard,

        background:
          "rgba(20,20,40,0.75)",

        color: "white",

        height: "90.5%"
      }}
    >

      <CardContent>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1
          }}
        >
          🤖 ML Expense Forecast
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 4
          }}
        >
          AI-powered prediction based
          on transaction history
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8"
          }}
        >
          Predicted Next Month Expense
        </Typography>

        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: "700",
            color:
              forecast.trend === "Decrease"
                ? "#22C55E"
                : "EF4444",
            mb: 3
          }}
        >
          ₹
          {formatCurrency(forecast.predicted_next_month)}
        </Typography>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "12px"
          }}
        >

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "12px",
              borderRadius: "16px"
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8"
              }}
            >
              Trend
            </Typography>

            <Typography
              sx={{
                color: trendColor,
                fontWeight: 700
              }}
            >
              {forecast.trend}
            </Typography>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "12px",
              borderRadius: "16px"
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8"
              }}
            >
              Change
            </Typography>

            <Typography
              sx={{
                fontWeight: 700
              }}
            >
              {forecast.change_percent}%
            </Typography>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "12px",
              borderRadius: "16px"
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8"
              }}
            >
              Current Expense
            </Typography>

            <Typography
              sx={{
                fontWeight: 700
              }}
            >
              ₹
              {formatCurrency(forecast.current_month_expense)}
            </Typography>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "12px",
              borderRadius: "16px"
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8"
              }}
            >
              ML Model
            </Typography>

            <Typography
              sx={{
                fontWeight: 700
              }}
            >
              {forecast.model}
            </Typography>
          </div>

        </div>

      </CardContent>

    </Card>

  );

}

export default ForecastCard;