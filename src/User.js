// import React from 'react'
// import { useState } from 'react';
// import Comp from './Comp';
// import Func from './Func';
// function User(){
//   const [show, setshow]=useState(false);
//   const [classshow, setclassshow]=useState(false);
//   const click1=()=>{
//   setshow(!show)
//   }
//   const click2=()=>{
//     // alert("hello")
//   setclassshow(!classshow)
//   }
// }

// // export const User1 = () => {
// //   function handleClick(){
// //     alert('hii')
// //   }
//   return (
//     <div>
//       <p style={{textAlign:'center',backgroundColor:'aqua',fontStyle:'italic',fontSize:'25px'}}>Styling Using Functional and Class Component</p> <br></br>
//     <div className='mydiv1'>
//         <button className='btn1' onClick ={click1}>FUNCTION COMPONENT</button>
//         <button className='btn2' onClick ={click2}>CLASS COMPONENT</button>
//         <div id="flexBox">
//             <div id="fun">
//             {show?<Func/>:''}
//             </div>
//             <div id="cla">
//            {classshow? <Comp/>:'   '}
//            </div>
//       </div>
//       </div>
//       </div>
//   )
// }
  
// export default User

import { useState } from 'react';
import Comp from './Comp';
import Func from './Func';

function User(){
    const [show, setshow]=useState(false);
    const [classshow, setclassshow]=useState(false);
    const click1=()=>{
    setshow(!show)
    }
    const click2=()=>{
      // alert("hello")
    setclassshow(!classshow)
    }
    return (
      <div className="user">
        <h1 style={{textAlign:'center',backgroundColor:'aqua',fontStyle:'italic',fontSize:'25px'}}>Styling using Functional and Class Component</h1>
    <center>
        <button className='btn1' id="btn1" onClick={click1}>To see styling in functional component</button>
        <button className='btn2' onClick={click2}>To see styling in class component</button>
    </center>

    <div id="flexBox">
            <div id="fun">
            {show?<Func/>:''}
            </div>
            <div id="cla">
           {classshow? <Comp/>:'   '}
           </div>
      </div>
      </div>
    );
}

export default User