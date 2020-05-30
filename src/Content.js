import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer"

function App() {

  const menu = ['About us', 'Contact us', 'Products', 'Pricing'];
  const content = ['Lip gloss', 'Perfume', 'Shadows']

const cart = (fish) => {
      console.log ('Pull ' + fish)
  }

  return (

      <div>
        <Header
            topMenu={menu} content={content} />

        <Footer

            content={content} attempt={cart}/>
      </div>

  );
}

export default App;
