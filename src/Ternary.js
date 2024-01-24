import React , {useState} from 'react'
const Greeting=({isUserLoggedIn}) =>(
      <div>
        {isUserLoggedIn ? (<h1>WELCOME</h1>):(<h1>LOGIN AGAIN</h1>)}
      </div>
)
const Ternary =() =>{
    const[userLoggedIn,setUserLoggedIn]=useState(false);
  return(
    <div>
        <Greeting isUserLoggedIn={userLoggedIn}/>
        <button onClick={() => setUserLoggedIn(!userLoggedIn)}>LOGIN</button>
    </div>
  );
};
export default Ternary;