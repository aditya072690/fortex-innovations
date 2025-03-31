import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Portfolio from "../../components/Portfolio";

// export default function Layout({ children, activePage, setActivePage }) {
//   return (
//     <div className="bg-yellow-50 text-white min-h-screen flex flex-col">
//       <Header activePage={activePage} setActivePage={setActivePage} />
//       <main className="flex-grow">{<Portfolio />}</main>
//       <Footer />
//     </div>
//   );
// }

import Layout from "../../components/Layout";

export default function HomePage() {
  return (
    <Layout activePage="home">
      <Portfolio />
    </Layout>
  );
}
