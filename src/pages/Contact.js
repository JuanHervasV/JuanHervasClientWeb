import React from "react";
import { Helmet } from "react-helmet";
import ContactComponent from "../components/Web/Contact";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Juan Hervas</title>
        <meta
          name="Contact"
          content="Contact | Web porfolio de Juan Hervas"
          data-react-helmet="true"
        />
      </Helmet>
      <ContactComponent />
    </>
  );
}
