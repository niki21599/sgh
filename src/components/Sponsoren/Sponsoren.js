import React from "react";
import "./Sponsoren.css";
import SponsorCard from "../SponsorCard/SponsorCard";

export default function Sponsoren() {
  return (
    <div>
      <div className="darkgray">
        <h2>Hauptsponsor</h2>
        <div className="mainSponsor">
          <SponsorCard
            path="/volksbank.png"
            sponsorName="Volksbank Trier"
            width={345}
          ></SponsorCard>
        </div>
      </div>
      <div className="lightgray">
        <h2>Premium Partner </h2>
        <div className="outerContainer">
          <div className="sponsorContainer">
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
          </div>
        </div>
      </div>
      <div className="darkgray">
        <h2>Partner</h2>
        <div className="outerContainer">
          <div className="sponsorContainer">
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
            <SponsorCard
              path="/volksbank.png"
              sponsorName="Volksbank Trier"
              width={345}
            ></SponsorCard>
          </div>
        </div>
      </div>
    </div>
  );
}
