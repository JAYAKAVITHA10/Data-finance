import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PaymentPage from "./components/Paymentpage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
