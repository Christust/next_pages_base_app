import "bootstrap/dist/css/bootstrap.css";
import "@/assets/styles/index.scss";
import ReduxProvider from "@/store/provider";
import LoaderLayout from "@/components/shared/LoaderLayout";
import Script from "next/script";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import SidebarLayout from "@/components/layouts/SidebarLayout";
export default function App({ Component, pageProps }) {
  const sidebar = true;
  const getLayout =
    Component.getLayout ||
    ((page) =>
      sidebar ? (
        <SidebarLayout>{page}</SidebarLayout>
      ) : (
        <DefaultLayout>{page}</DefaultLayout>
      ));
  return (
    <ReduxProvider>
      <LoaderLayout>
        {getLayout(<Component {...pageProps} />)}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Script
          src="/icons/all.min.js"
          crossOrigin="anonymous"
        />
      </LoaderLayout>
    </ReduxProvider>
  );
}
