import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "components/Breadcrumb";

import Clients from "parts/Clients";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Footer from "parts/Footer";
import Header from "parts/Header";
import SiteMap from "parts/SiteMap";

import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";

function Details() {
  // hook untuk mengambil parameter yang ada di link
  const { idp } = useParams();
  console.log(idp);

  const { data, run, isLoading } = useAsync();

  // fetch api menggunakan fetch custom yang telah di buat
  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run, idp]);

  console.log(data);
  return (
    <div className="mx-7">
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1224234", name: "Office Room" },
          { url: "/categories/1224234/products/4234", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <SiteMap />
      <Footer />
    </div>
  );
}

export default Details;
