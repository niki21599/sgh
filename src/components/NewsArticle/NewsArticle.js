import React, { useEffect } from "react";
import "./NewsArticle.css";
import { getArticle } from "../../api/apiCalls";
import { useParams } from "react-router-dom";
import TabellenWidget from "../TabellenWidget/TabellenWidget";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function NewsArticle(props) {
  let serverUrl = "https://arcane-springs-30646.herokuapp.com";

  let teamId1 = 1044597;
  let widgetId1 = "widget_6362652b0dc74";

  let teamId2 = 1044672;
  let widgetId2 = "widget_6362654d824ea";
  let teamId3 = 1044731;
  let widgetId3 = "widget_6362655b1f11f";

  const params = useParams();
  let [article, setArticle] = React.useState({
    fields: {
      headline: "",
      content: {},
      releaseDate: "",
      mainImage: { fields: { file: { url: "" } } },
    },
  });

  let formatDate = (date) => {
    console.log("The date", typeof date);
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    console.log(day, month, year);

    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    getArticle(params.id).then((newArticle) => {
      setArticle(newArticle);
    });
  }, []);

  return (
    <div className="outerContainerNews">
      <div className="leftStartContainer" id="leftNewsArticle">
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
      <div className="newsArticleContainer">
        <h1 className="articleHeading">{article.fields.headline} </h1>
        <h5 className="subHeading">
          {" "}
          Veröffentlicht am {formatDate(article.fields.releaseDate)}
        </h5>
        <img
          src={"https:" + article.fields.mainImage.fields.file.url}
          alt=""
          className="article-img"
        />
        <p
          className="articleContainer"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(article.fields.content),
          }}
        ></p>
      </div>
    </div>
  );
}
