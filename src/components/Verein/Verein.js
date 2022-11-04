import React from "react";
import "./Verein.css";
import VorstandsCard from "../VorstandsCard/VorstandsCard";
import ContactSection from "../ContactSection/ContactSection";

export default function Verein() {
  return (
    <div>
      <div className="darkgray vorstand">
        <h2>Unser Vorstand</h2>
        <div className="outerContainerVorstand">
          <div className="vorstandsContainer">
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
            <VorstandsCard></VorstandsCard>
          </div>
        </div>
      </div>
      <div className=" contact">
        <h2>Kontakt</h2>
        <div className="contactContainer">
          <ContactSection></ContactSection>
        </div>
      </div>
    </div>
  );
}
