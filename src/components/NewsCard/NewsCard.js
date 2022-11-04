import React, { useEffect } from "react";
import "./NewsCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function NewsCard({ maxWidth, berichtData }) {
  let serverUrl = "https://arcane-springs-30646.herokuapp.com";
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(ref.current.offsetWidth);
  };

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div>
      <Link to={"/artikel/" + berichtData.sys.id}>
        <Card sx={{ maxWidth: maxWidth, borderRadius: 0 }} ref={ref}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={"https:" + berichtData.fields.mainImage.fields.file.url}
              height={(width / 16) * 9}
              alt="alt"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {berichtData.fields.headline}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                align="left"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(berichtData.fields.content),
                }}
              ></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
