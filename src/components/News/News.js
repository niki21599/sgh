import React, { useEffect } from "react";

import NewsCard from "../NewsCard/NewsCard";
import { getArticles } from "../../api/apiCalls";

import LivetickerWidget from "../LivetickerWidget/LivetickerWidget";
import TabellenWidget from "../TabellenWidget/TabellenWidget";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

import "./News.css";

export default function News() {
  let [articles, setArticles] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(7);
  const [loading, setLoading] = React.useState(false);

  let teamId1 = 1044597;
  let widgetId1 = "widget_6362652b0dc74";

  let teamId2 = 1044672;
  let widgetId2 = "widget_6362654d824ea";
  let teamId3 = 1044731;
  let widgetId3 = "widget_6362655b1f11f";

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setLoading(true);
    getArticles().then((newArticles) => {
      setArticles(newArticles.items);
      setLoading(false);
    });
  }, []);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);
  };

  return (
    <div className="outerStartContainer">
      <div className="leftStartContainer">
        <div className="tabellenWidget">
          <TabellenWidget
            teamId={teamId1}
            widgetId={widgetId1}
          ></TabellenWidget>
        </div>
        <div className="tabellenWidget">
          <TabellenWidget
            teamId={teamId2}
            widgetId={widgetId2}
          ></TabellenWidget>
        </div>
        <div className="tabellenWidget">
          <TabellenWidget
            teamId={teamId3}
            widgetId={widgetId3}
          ></TabellenWidget>
        </div>
      </div>
      {loading ? (
        <CircularProgress sx={{ color: "black" }} />
      ) : (
        <div className="newsContainer">
          {articles.length > 0 && currentPage === 1 ? (
            <div className="bignewsContainer">
              <NewsCard maxWidth={1200} berichtData={articles[0]}></NewsCard>
            </div>
          ) : (
            ""
          )}

          <div className="outerNewsContainer">
            <div className="otherNewsContainer">
              {currentPosts.map((article, index) => {
                if (index > 0 || (index === 0 && currentPage > 1)) {
                  return (
                    <NewsCard
                      maxWidth={770}
                      berichtData={article}
                      key={index}
                    ></NewsCard>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          </div>
          <Pagination
            count={Math.ceil(articles.length / postsPerPage)}
            page={currentPage}
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </div>
      )}
    </div>
  );
}
