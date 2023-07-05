import React from "react";
import { Helmet } from "react-helmet";
import PoliticaPrivacidad from "../components/Web/PoliticaPrivacidad";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Politica de Privacidad Adivina El Número | Juan Hervas</title>
        <meta
          name="Politica Privacidad"
          content="Politica Privacidad | Adivina El Número"
          data-react-helmet="true"
        />
      </Helmet>
      <PoliticaPrivacidad />
    </>
  );
}