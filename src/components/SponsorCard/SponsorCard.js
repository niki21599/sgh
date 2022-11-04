import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SponsorCard({ path, sponsorName }) {
  return (
    <div>
      <Card sx={{ maxWidth: 250, borderRadius: 0 }}>
        <CardMedia
          component="img"
          image={path}
          alt="green iguana"
          sx={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        />

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "0 !important",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {sponsorName}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
