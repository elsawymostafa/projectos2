import React, { useContext } from 'react';
import { CountContext } from '../App';



export default function Menu({ menuItem }) {

const counterFun = useContext(CountContext)
    return (
        <>
            {
                menuItem.map((item) => {
                    return (
                        <div key={item.id}>
                            <Prodctfigure src={item.src} details={item.details} price={item.price} counterFun={counterFun} />
                        </div>
                    )
                })
            }
        </>
    )
}

// export const CountContext = React.createContext();


export function Prodctfigure(props) {
    const { src, details, price,counterFun } = props;



    return (
        <>
            <figure className="figure">
                <div className="upimg position-absolute">
                    <div className="layer ">
                        <div className="iconDiv d-flex flex-column w-25">
                            <i className="fas fa-heart mb-2"></i>
                            <i className="fas fa-arrows-alt"></i>
                        </div>
                        
                             <input className="shopBtn position-absolute" type="button" value="Buy" onClick={ counterFun}></input>
                      


                    </div>
                </div>
                <img src={src} className="figure-img img-fluid " alt="madison earbuds"></img>

                <figcaption className="figure-caption my-1"><a href="#!"> {details}</a> <span className="d-block"> {price}</span></figcaption>
            </figure>
        </>
    )
}



