import React from "react";
import SliderItems from "./SliderItems";

function Slider(props) {


    const { items } = props;
    return (
        <>
            <section className="carouselSec">

                <div id="carouselExampleCaptions" className="carousel slide h-50" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {items.map((item, index) => {
                            return (
                                < >
                                    <li  data-target="#carouselExampleCaptions" data-slide-to={item.ip} className={`${item.active} indicator `}></li>
                                </>
                            )
                        })}
                    </ol>
                    <div className="carousel-inner">


                        {
                            items.map((item, index) => {
                                return (
                                    < >
                                        <SliderItems key={item.ip} active={item.active} src={item.src} title={item.title} prg={item.prg} />
                                    </>
                                )
                            })
                        }


                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </section>

        </>
    )
}



export default Slider;