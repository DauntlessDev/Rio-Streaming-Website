import React from 'react';
import Footer from './components/main/Footer';
import Header from './components/main/Header';
import Navigation from './components/main/Navigation';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <body>
        <Navigation />
        <Header />
        <Home />
        <Footer />
      </body>
    </div>
  );

}

export default App;
