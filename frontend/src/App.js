import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <div className="container">
          <h1>Welcome to my app</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
