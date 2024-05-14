import Sidebar from "../navigation/Sidebar";
import { useRouter } from "next/router";
import { routes } from "@/constants/routesConstants";

export default function DefaultLayout({ children }) {
  const router = useRouter();

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sideMainContainer mainContainer">
        <header>
          <h3>
            {routes.filter((route) => route.route === router.route)[0]?.name}
          </h3>
          <hr />
        </header>
        <main className="mainContent">{children}</main>
        <footer className="footerContent">Made by MODERATOREM</footer>
      </div>
    </div>
  );
}
