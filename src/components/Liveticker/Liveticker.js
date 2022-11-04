import { height } from "@mui/system";
import React from "react";
import "./Liveticker.css";
import LivetickerWidget from "../LivetickerWidget/LivetickerWidget";

export default function Liveticker() {
  let teamId1 = 1044597;
  let widgetId1 = "widget_635fb25fd181f";

  let teamId2 = 1044672;
  let widgetId2 = "widget_635fbbe814f28";
  let teamId3 = 1044731;
  let widgetId3 = "widget_635fbdf877f86";

  return (
    <div>
      <div className="lightgray livetickerSection">
        <h2>1. Mannschaft</h2>
        <div className="livetickerFrame">
          <LivetickerWidget
            widgetId={widgetId1}
            teamId={teamId1}
          ></LivetickerWidget>
        </div>
      </div>
      <div className="darkgray livetickerSection">
        <h2>2. Mannschaft</h2>
        <div className="livetickerFrame">
          <LivetickerWidget
            widgetId={widgetId2}
            teamId={teamId2}
          ></LivetickerWidget>
        </div>
      </div>
      <div className="lightgray livetickerSection">
        <h2>3. Mannschaft</h2>
        <div className="livetickerFrame">
          <LivetickerWidget
            widgetId={widgetId3}
            teamId={teamId3}
          ></LivetickerWidget>
        </div>
      </div>
    </div>
  );
}
