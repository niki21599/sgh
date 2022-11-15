import React from "react";
import "./Sponsoren.css";
import SponsorCard from "../SponsorCard/SponsorCard";

export default function Sponsoren() {
  let hauptsponsor = [
    {
      title: "Volksbank Trier",
      url: "/img/Logo_Volksbank_Trier_eG_RGB_zweizeilig_links_pos.png",
    },
  ];

  let premiumPartner = [
    {
      title: "Lotto",
      url: "/img/Lotto.png",
    },
    {
      title: "Immobilien Franzen",
      url: "/img/Immobilien-Franzen_Logo_neu.png",
    },
    {
      title: "Komage",
      url: "/img/KOMAGE.png",
    },
    {
      title: "Hees und Peters",
      url: "/img/H+P_Logo_Final_2022.jpg",
    },
    {
      title: "Meiers",
      url: "/img/meiers.png",
    },
    {
      title: "Grundhöfer",
      url: "/img/Grundhoefer.png",
    },
    {
      title: "Löwenbräu",
      url: "",
    },
    {
      title: "Paulus und Partner",
      url: "/img/P&P.png",
    },
    {
      title: "Klos",
      url: "/img/Klos.png",
    },
    {
      title: "Margaretenhof",
      url: "/img/Logo_Margarethenhof_Wortbildmarke.jpg",
    },
    {
      title: "Ingenierubüro Krämer",
      url: "",
    },
    {
      title: "Kohl Bau",
      url: "/img/Kohl Bau.jpg",
    },
    {
      title: "smileX",
      url: "/img/smileX - Logo hoch ohne Sub.png",
    },
    {
      title: "11teamsports",
      url: "/img/11teamsports.png",
    },
    {
      title: "Landgasthaus Kopp",
      url: "/img/Kopp.jpg",
    },
    {
      title: "Schwebach",
      url: "/img/Schwebach.png",
    },
  ];

  let topPartner = [
    {
      title: "ST. Erasmus",
      url: "/img/St. Erasmus.jpg",
    },
    {
      title: "Schott",
      url: "/img/Schott.png",
    },
    {
      title: "Spang",
      url: "/img/Spang.jpg",
    },
  ];

  let partner = [
    {
      title: "A1 Leitplanke",
      url: "/img/Leitplanke.png",
    },
    {
      title: "Heizöl Schmitt",
      url: "/img/HeizölSchmitt.jpg",
    },
    {
      title: "Bäckerei Jakobs",
      url: "/img/Jakobs.png",
    },
  ];
  return (
    <div>
      <div className="darkgray">
        <h2>Hauptsponsor</h2>
        <div className="mainSponsor">
          {hauptsponsor.map((sponsor) => (
            <SponsorCard
              path={sponsor.url}
              sponsorName={sponsor.title}
              width={345}
            ></SponsorCard>
          ))}
        </div>
      </div>
      <div className="lightgray">
        <h2>Premium Partner </h2>
        <div className="outerContainer">
          <div className="sponsorContainer">
            {premiumPartner.map((sponsor) => (
              <SponsorCard
                path={sponsor.url}
                sponsorName={sponsor.title}
                width={345}
              ></SponsorCard>
            ))}
          </div>
        </div>
      </div>
      <div className="darkgray">
        <h2> Top Partner</h2>
        <div className="outerContainer">
          <div className="sponsorContainer">
            {topPartner.map((sponsor) => (
              <SponsorCard
                path={sponsor.url}
                sponsorName={sponsor.title}
                width={345}
              ></SponsorCard>
            ))}
          </div>
        </div>
      </div>
      <div className="lightgray">
        <h2> Partner</h2>
        <div className="outerContainer">
          <div className="sponsorContainer">
            {partner.map((sponsor) => (
              <SponsorCard
                path={sponsor.url}
                sponsorName={sponsor.title}
                width={345}
              ></SponsorCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
