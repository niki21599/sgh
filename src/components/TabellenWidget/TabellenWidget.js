import React from "react";
import "./TabellenWidget.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function TabellenWidget({ widgetId, teamId }) {
  React.useEffect(() => {
    //Header
    const script = document.createElement("script");
    script.src = "https://www.fupa.net/fupa/widget.min.js";
    script.async = true;
    document.body.appendChild(script);

    const secondScript = document.createElement("script");
    secondScript.async = true;
    secondScript.innerHTML = `!function(i){window.setTimeout(function(){"undefined"===typeof fupa_widget_domain?--i.t>0&&window.setTimeout(arguments.callee,i.i):i.f()},i.i)}({i:20,t:100,f:function(){team_widget(${teamId},{act:"tabelle",hea:0,nav:0,div:"${widgetId}",mod:"0"})}});`;

    document.body.appendChild(secondScript);
  }, []);

  return (
    <div>
      <div id={widgetId}>
        <CircularProgress sx={{ color: "black" }} />
      </div>
      <a
        href="https://www.fupa.net/club/fc-zerf"
        target="_blank"
        class="fupa_link"
      ></a>
    </div>
  );
}
