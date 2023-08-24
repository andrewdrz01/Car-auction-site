import React from "react";
import "../Css/About.css"
import AboutDefault from "./DefaultPeople";
import FooterPage from "./Footer";

export default function AboutPage() {
  return (
    <div className="main-about-component">
      <div className="main-container-about">
        <div className="main-info-about">
          <h1 className="main-title-about">Poznaj nasz zespół !</h1>
        </div>
        <div className="main-details-salesmans">
          <AboutDefault
            imgProfile="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            name="Marek Nowak"
            detailsInfo="Cześć ! Nazywam się Marek Nowak i zajmuje sie sprzedażą oraz wyszukiwaniem samochodów. W firmie jestem od 2 lat.
                Moja specjalizacją są samochody klasy premium i luxury."
          />
        </div>
        <div className="main-details-salesmans">
          <AboutDefault
            imgProfile="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            name="Adam Góral"
            detailsInfo="Cześć ! Nazywam się Adam Góral i zajmuje sie obsługą klienta na miejscu, jak i zagranicznego oraz szeroko pojętą sprzedarzą.
                    Jestem założycielem firmy CarFind Factory. 
                Moja specjalizacją są samochody sportowe oraz supercary i hipercary."
          />
        </div>
        <div className="main-details-salesmans">
          <AboutDefault
            imgProfile="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            name="Paweł Kowalski"
            detailsInfo="Cześć ! Nazywam się Paweł Kowalski i zajmuje sie ksiegowością,finansowaniem i ubezpieczeniami. W firmie jestem od 1.5 roku.
                Moja specjalizacją są samochody klasyczne i ich sprowadzanie."
          />
        </div>

      </div>
      <FooterPage />
    </div>
  )
}