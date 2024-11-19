import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PaymentPage from "./components/Paymentpage";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <section id="home">
                <Hero />
              </section>
              <section id="company">
                <Analytics />
              </section>
              <section id="resources">
                <Newsletter />
              </section>
              <section id="about">
                <Cards />
              </section>
              <section id="contact">
                <Footer />
              </section>
            </MainLayout>
          }
        />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
