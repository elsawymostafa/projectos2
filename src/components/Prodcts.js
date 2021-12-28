import React, { useState } from 'react';
import Buttons from './Buttons';

import Menu from './Menu.js';

export default function Prodcts(props) {
    const { productItems } = props;

    const allCtgry = ['All', ...new Set(productItems.map(item => item.category))]

    const [menuItem, setMenuItem] = useState(productItems);
    const [button] = useState(allCtgry);

    const filter = (btn) => {
        if (btn === 'All') {
            setMenuItem(productItems);
            return;
        }
        const dataFiltered = productItems.filter(item => item.category === btn);
        setMenuItem(dataFiltered);


    }



    return (
        <>
            <section className="products  " id="shoping">
                <div className="headSec d-block">
                    <h2 >Hot products</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magni placeat soluta architecto aut dolores.</p>
                </div>
                <div className="bg-light  text-center  m-2">
                    <Buttons button={button} filter={filter} />
                    {/* <button type="button" className="btn btn-dark m-1">All product</button>
                    <button type="button" className="btn btn-secondary m-1" >Watches</button>
                    <button type="button" className="btn btn-primary m-1">Perfume</button>
                    <button type="button" className="btn btn-info m-1">Accessories</button> */}
                </div>
                <div className="theWatches d-flex  flex-wrap">

                    <Menu menuItem={menuItem} />


                </div>
            </section>
        </>
    )
}



