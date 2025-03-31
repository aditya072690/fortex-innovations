// import Header from "./Header";
// import Footer from "./Footer";

// export default function Layout({ children }) {
//   return (
//     <div className="bg-yellow-50 text-white min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow">{children}</main>
//       <Footer/>
//     </div>
//   );
// }


import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, activePage, setActivePage }) {
  return (
    <div className="bg-yellow-50 text-white min-h-screen flex flex-col">
      <Header activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
