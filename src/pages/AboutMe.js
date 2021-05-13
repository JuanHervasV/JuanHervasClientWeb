import React from "react";
import { Helmet } from "react-helmet";
import AboutMe from "../components/Web/AboutMe";
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>About Me | Juan Hervas</title>
        <meta
          name="About me"
          content="About me | Web porfolio de Juan Hervas"
          data-react-helmet="true"
        />
      </Helmet>
      <AboutMe />
    </>
  );
}
