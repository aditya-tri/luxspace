import React from "react";
import Header from "parts/Header";
import ErrorMessage from "parts/ErrorMessage";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";
import Document from "parts/Document";

export default function Notfound() {
  return (
    <Document>
      <Header />
      <ErrorMessage />

      <SiteMap />
      <Footer />
    </Document>
  );
}
