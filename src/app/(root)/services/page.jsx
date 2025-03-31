import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";

export default function Layout({ activePage, setActivePage }) {
  return (
    <div className="bg-yellow-50 text-white min-h-screen flex flex-col">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">{<Services />}</main>
      <Footer />
    </div>
  );
}
