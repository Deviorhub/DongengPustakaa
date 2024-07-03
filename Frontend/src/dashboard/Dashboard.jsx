import React from "react";
import Header from "./component/Header";
import Card from "./component/Card";

import Footer from "./component/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between items-center container mx-auto px-20 py-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
