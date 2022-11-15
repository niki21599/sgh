import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./SponsorCard.css";

export default function SponsorCard({ path, sponsorName }) {
  return (
    <div>
      <Card
        sx={{
          width: 250,
          borderRadius: 0,
          padding: "10px",
          height: "170px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {path ? (
          <CardMedia
            component="img"
            image={path}
            className="sponsor-img"
            alt={sponsorName}
          />
        ) : (
          <Typography variant="h4">{sponsorName}</Typography>
        )}
      </Card>
    </div>
  );
}
