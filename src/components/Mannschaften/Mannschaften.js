import React, { useEffect } from "react";
import "./Mannschaften.css";

import MannschaftenWidget from "../MannschaftenWidget/MannschaftenWidget";

export default function Mannschaften() {
  let mannschaft2 = [1044672, "widget_635fca139dd33"];

  let mannschaft3 = [1044731, "widget_635fca2ee8756"];

  let mannschaft1 = [1044597, "widget_635fc8335c940"];

  let [mannschaft, setMannschaft] = React.useState(mannschaft1);

  return (
    <div className="mannschaftenContainer">
      <div className="buttonBox">
        <button
          className={
            "mannschaftButton " +
            (mannschaft[0] == mannschaft1[0] ? "active" : "")
          }
          onClick={() => setMannschaft(mannschaft1)}
        >
          1. Mannschaft
        </button>
        <button
          className={
            "mannschaftButton " +
            (mannschaft[0] == mannschaft2[0] ? "active" : "")
          }
          onClick={() => setMannschaft(mannschaft2)}
        >
          2. Mannschaft
        </button>
        <button
          className={
            "mannschaftButton " +
            (mannschaft[0] == mannschaft3[0] ? "active" : "")
          }
          onClick={() => setMannschaft(mannschaft3)}
        >
          3. Mannschaft
        </button>
      </div>
      <MannschaftenWidget
        teamId={mannschaft[0]}
        widgetId={mannschaft[1]}
      ></MannschaftenWidget>
    </div>
  );
}
