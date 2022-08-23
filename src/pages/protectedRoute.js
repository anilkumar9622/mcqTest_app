import React, { useEffect, useState } from "react";


export default function ProtectedRoute(props) {


    const page = props.page;
    const token = localStorage.getItem("token");
    const [timeOut, setTimeOut] = useState(token)
    //     useEffect(() => {
    //         if(!token){
    //         setTimeOut(null)}
    //     })
    //    if(token){ 
    //     setTimeout(function(){

    //         localStorage.removeItem("token")

    //         setTimeOut(null)


    //       },60000)

    //    }

    return token ? page : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0rem', background: "#f7f6f2", height: '100vh' }}><div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', width: '35rem', height: '20rem', background: 'white', flexDirection: 'column', borderRadius: '1rem'
    }}>
        <h1 style={{ color: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>Times Up !!</h1>
        <h1 style={{ color: 'green', }}>Thank you 😊</h1> </div></div>;


}