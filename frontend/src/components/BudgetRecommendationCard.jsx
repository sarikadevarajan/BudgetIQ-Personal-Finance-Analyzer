import {
  Card,
  CardContent,
  Typography,
  LinearProgress
} from "@mui/material";

function BudgetRecommendationCard({
  recommendation
}) {

  const icons = {
    Shopping: "🛒",
    "Cash Withdrawal": "💳",
    "UPI Transfer": "📱"
  };

  const savingsPercent =
    (
      recommendation.potential_savings /
      recommendation.current_spending
    ) * 100;

  return (

    <Card
      sx={{
        background:
          "rgba(20,20,40,0.75)",

        backdropFilter: "blur(20px)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "24px",

        color: "white",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.3)",

        transition: "0.3s",

        height: "100%",

        "&:hover": {
          transform: "translateY(-6px)"
        }
      }}
    >

      <CardContent>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2
          }}
        >
          {icons[
            recommendation.category
          ] || "💰"}{" "}
          {recommendation.category}
        </Typography>

        <Typography
          sx={{
            color: "#22C55E",
            fontSize: "34px",
            fontWeight: 700
          }}
        >
          ₹
          {recommendation.potential_savings.toFixed(
            0
          )}
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 3
          }}
        >
          Potential Savings
        </Typography>

        <Typography
          sx={{
            color: "#CBD5E1"
          }}
        >
          Current Spending
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            mb: 2
          }}
        >
          ₹
          {
            recommendation.current_spending
          }
        </Typography>

        <Typography
          sx={{
            color: "#CBD5E1"
          }}
        >
          Recommended Budget
        </Typography>

        <Typography
          sx={{
            fontWeight: 700
          }}
        >
          ₹
          {
            recommendation.recommended_budget
          }
        </Typography>

        <LinearProgress
          variant="determinate"
          value={100 - savingsPercent}
          sx={{
            mt: 3,
            height: 10,
            borderRadius: 10,

            background:
              "rgba(255,255,255,0.1)",

            "& .MuiLinearProgress-bar":
              {
                backgroundColor:
                  "#8B5CF6"
              }
          }}
        />

        <Typography
          sx={{
            mt: 1,
            color: "#94A3B8",
            fontSize: "13px"
          }}
        >
          Optimized Budget Score
        </Typography>

      </CardContent>

    </Card>

  );

}

export default BudgetRecommendationCard;