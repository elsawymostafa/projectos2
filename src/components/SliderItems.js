import React from "react"

function SliderItems(props)  {
    // state ={
    //     src : "media/navlogo.jpg",
    //     title : "The best Watches",
    //     prg : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta neque obcaecati sunt laboriosam, tempora nesciunt!"

    // }

    
   
       
        const { active ,src , title , prg, ip} = props;
        return (
            <>
            
                           
                <div key={ip} className={`carousel-item ${active}`} >
                    <img src={src} className="d-block w-100 " alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>{title}</h3>
                        <p>{prg}</p>
                    </div>
                </div>
                
            </>
        )
    }


export default SliderItems;