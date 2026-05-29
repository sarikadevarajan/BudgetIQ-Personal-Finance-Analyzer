import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { premiumCard } from "../styles/cardStyle";

function InsightsCard({ insights }) {
  return (
    <Card
      sx={{
        ...premiumCard,

        minWidth: 350,

        background: "rgba(36, 36, 110, 0.75)",

        color: "white",

        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 900,
            marginBottom: 3,
          }}
        >
          <h2>
            🤖 AI Financial Coach
          </h2>

          <p>
            Personalized recommendations generated
             from your spending behavior
          </p>
        </Typography>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "25px",
            fontWeight: 900
          }}
        >
          {insights.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",

                border: "1px solid rgba(255,255,255,0.08)",

                borderRadius: "18px",

                borderLeft: "4px solid #8B5CF6",

                padding: "18px",

                transition: "all 0.3s ease",
              }}
            >
              <Typography
                sx={{
                  color: "#E2E8F0",
                  lineHeight: 1.8,
                }}
              >
                💡 {item}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default InsightsCard;
