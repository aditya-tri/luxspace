import React from "react";
import Header from "parts/Header";
import ErrorMessage from "parts/ErrorMessage";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";

export default function Notfound() {
  return (
    <>
      <Header />
      <ErrorMessage />

      <SiteMap />
      <Footer />
    </>
  );
}
