import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Verein from "./components/Verein/Verein";
import Mannschaften from "./components/Mannschaften/Mannschaften";
import Liveticker from "./components/Liveticker/Liveticker";
import News from "./components/News/News";
import Sponsoren from "./components/Sponsoren/Sponsoren";
import Footer from "./components/Footer/Footer";
import SocialMediaCard from "./components/SocialMediaCard/SocialMediaCard";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import MannschaftenWidget from "./components/MannschaftenWidget/MannschaftenWidget";
import React from "react";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  let [openHeaderDropdown, setOpenHeaderDropdown] = React.useState(false);

  function useOutsideWrapper(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenHeaderDropdown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className="App">
      <Header
        useOutsideWrapper={useOutsideWrapper}
        openDropdown={openHeaderDropdown}
        setOpenDropdown={setOpenHeaderDropdown}
      ></Header>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/mannschaften" element={<Mannschaften />} />
        <Route path="/sponsoren" element={<Sponsoren />} />
        <Route path="/verein" element={<Verein />} />
        <Route path="/live" element={<Liveticker />} />
        <Route path="/artikel/:id" element={<NewsArticle />} />
        <Route
          path="/test"
          element={
            <MannschaftenWidget
              teamId={1044597}
              widgetId={"widget_635fc8335c940"}
            />
          }
        ></Route>
      </Routes>
      <SocialMediaCard></SocialMediaCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
