"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Services from "../../components/Services";
import dynamic from "next/dynamic";
const Services = dynamic(() => import("../../components/Services"), {
  ssr: false,
});
export default function Page() {
  return (
    <div className="bg-yellow-50 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{<Services />}</main>
      <Footer />
    </div>
  );
}
