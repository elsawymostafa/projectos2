import React from 'react'

function Buttons({button ,filter}) {
    return (
        <>
            {button.map((item , index)=>{
                return(
                    <button type="button" className="btn btn-secondary m-2 text-uppercase" onClick={()=>filter(item)}>{item}</button>
                )
            })}
            {/* <button type="button" className="btn btn-secondary m-1" onClick={()=>filter("watch")}>Watches</button> */}
        </>
    )
}

export default Buttons
