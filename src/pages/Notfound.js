import React from "react";
import Header from "parts/Header";
import ErrorMessage from "parts/ErrorMessage";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function Notfound() {
  useScrollToTop();
  return (
    <>
      <Header />
      <ErrorMessage />

      <SiteMap />
      <Footer />
    </>
  );
}
