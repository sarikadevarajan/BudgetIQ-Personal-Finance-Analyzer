import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function KPICard({ title, value }) {

  const gradients = {

    Income:
      "linear-gradient(135deg,#22c55e,#16a34a)",

    Expense:
      "linear-gradient(135deg,#ef4444,#dc2626)",

    Savings:
      "linear-gradient(135deg,#8b5cf6,#7c3aed)",

    "Health Score":
      "linear-gradient(135deg,#06b6d4,#0891b2)"
  };

  return (

    <Card

      sx={{

        minWidth: 240,

        borderRadius: "24px",

        background:
          gradients[title] ||
          "linear-gradient(135deg,#6366f1,#4f46e5)",

        color: "white",

        boxShadow:
          "0 12px 30px rgba(0,0,0,0.18)",

        transition:
          "all 0.3s ease",

        "&:hover": {

          transform:
            "translateY(-6px)",

          boxShadow:
            "0 18px 40px rgba(0,0,0,0.25)"
        }
      }}
    >

      <CardContent>

        <Typography

          sx={{
            opacity: 0.9,
            fontSize: "1rem",
            fontWeight: 500
          }}
        >
          {title}
        </Typography>

        <Typography

          variant="h4"

          sx={{
            mt: 1,
            fontWeight: 700
          }}
        >
          {value}
        </Typography>

      </CardContent>

    </Card>

  );
}

export default KPICard;