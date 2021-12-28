
import './App.css';
import React, { useState } from 'react';
import './components/style.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Prodcts from './components/Prodcts';
import Footer from './components/Footer';
import data, { DiscountData, FooterData, SliderData } from './components/data';
import Discounts from './components/Discounts';


export const CountContext = React.createContext();
export const NumCountContext = React.createContext();



function App() {
  


  const [count, setCount] = useState(0);
  let counter = () => {
    setCount(count + 1);
    
  }



  return (
    <div className="App">
      <CountContext.Provider value={counter}>
        <NumCountContext.Provider value={count}>
          <Header />
          <Slider items={SliderData} />
          <Prodcts productItems={data} />
          <Discounts DctData={DiscountData}/>
        </NumCountContext.Provider>
      </CountContext.Provider>
      <Footer ftrData={FooterData} />
    </div>
  );
}


export default App;
