import React from 'react'

export default function Discounts(props ) {
const {DctData} = props;
    return (
        <><div className="banners">
            {
            
                 DctData.map((item, index) => {
               return( 
                    <div className="banner_ " key={item.id}>
                        <div>
                            <a className="" href={item.href}><img src={item.src} alt="" srcset=""></img></a>
                        </div>
                        <div className="decripBanner text-light">
                            <h3>{item.title}</h3>
                            <p>{item.prg}</p>
                        </div>
                    </div>


               
            
           
            )})
            }</div>
        </>
    )
}
