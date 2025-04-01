import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Layout() {
  return (
    <div className="bg-yellow-50 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{<Hero />}</main>
      <Footer />
    </div>
  );
}
