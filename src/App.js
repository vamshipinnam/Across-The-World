import React from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Deestinations from "./components/Deestinations";
import PackageCard from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Deestinations />
      <PackageCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
