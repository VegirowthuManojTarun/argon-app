import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServicesSection from './components/ServicesSection';
import FeaturedVendors from './components/FeaturedVendors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ServicesSection />
      <FeaturedVendors />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
