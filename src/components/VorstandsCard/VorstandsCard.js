import React from "react";
import "./VorstandsCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function VorstandsCard() {
  return (
    <div>
      <Card sx={{ display: "flex", borderRadius: 0 }}>
        <CardMedia
          component="img"
          image="/avatar.png"
          sx={{ maxWidth: "132px", maxHeight: "160px", minWidth: "110px" }}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", minWidth: "230px" }}>
          <CardContent>
            <div className="marginBottom-16">
              <Typography align="left" component="div" variant="h5">
                Niklas Burg
              </Typography>

              <Typography
                align="left"
                component="div"
                sx={{ color: "rgba(0,0,0,0.5)" }}
              >
                {" "}
                Kassierer
              </Typography>
            </div>
            <Typography align="left" component="div">
              Mail: info@sg-hochwald.de
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
