import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import RevenueChart from "./components/RevenueCharts";
import ExpenseChart from "./components/ExpenseChart";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <RevenueChart />
          <ExpenseChart />
        </div>
        <Features />
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
