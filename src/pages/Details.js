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
import {
  LoadingBreadcrumb,
  LoadingDetailsProduct,
  LoadingSuggestion,
} from "parts/Loading";
import Document from "parts/Document";
import ErrorMessage from "parts/ErrorMessage";

function Details() {
  // hook untuk mengambil parameter yang ada di link
  const { idp } = useParams();

  const { data, run, isLoading, isError } = useAsync();

  // fetch api menggunakan fetch custom yang telah di buat
  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run, idp]);

  return (
    <Document>
      <Header theme="black" />

      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          {isLoading ? (
            <LoadingBreadcrumb />
          ) : (
            <Breadcrumb
              list={[
                { url: "/", name: "Home" },
                {
                  url: `/categories/${data.category.id}`,
                  name: data.category.title,
                },
                {
                  url: `/categories/${data.category.id}/products/${data.id}`,
                  name: data.title,
                },
              ]}
            />
          )}
          {isLoading ? (
            <LoadingDetailsProduct />
          ) : (
            <ProductDetails data={data} />
          )}
          {isLoading ? (
            <LoadingSuggestion />
          ) : (
            <Suggestion data={data?.relatedProducts || {}} />
          )}
        </>
      )}

      <Clients />
      <SiteMap />
      <Footer />
    </Document>
  );
}

export default Details;
