import Navbar from "../navigation/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="mainContainer">
      <Navbar />
      <main className="mainContent">{children}</main>
      <footer className="footerContent">Made by MODERATOREM</footer>
    </div>
  );
}
