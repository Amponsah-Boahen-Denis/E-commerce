import Home from './container/home.js'
import React from 'react';
import './app.scss'
import {Route} from 'react-router-dom'
import Bicycles from './container/bicycles.js'
import Tricycles from './container/tricycles.js'
import Cars from './container/cars.js'
import Motors from './container/motors.js'
function App() {
  const [open,setOpen]=React.useState(false);
  return (
    <div className="App">
   <div className='top'>
    <div className='up'>
      <h1>TRANSPORT<span>ZONE</span></h1>
      <div className='sign'></div>
      <div><img  src={require('./container/sales/cart.png').default} alt=""  />
      <img className='img' src={require('./container/sales/share.png').default} alt=""  /></div>
      </div> 
      <div classname='div'>
      <button classname='button' onClick={()=>setOpen(!open)}>About</button> 
    </div>   
   </div>
   <div className={'side ' + (open && 'active')}>
            <button onClick={()=>setOpen(!open)}>X</button>
            <b><u>About page</u></b>
            <p>This website is created purposely to 
                make it easy to afford your dream transport machine.
                Though this website has not been deploy commercially
                but I did create it to show my skills on 
                how to build an e-commerce website.
                In details this website is divded into
                four pages and each page contains it own type of 
                transport machine as shown in the homepage.
                I would like you to visit any of the image links 
                to see what I am talking about.

            </p>
        </div>
            
   <div className='body'>
   
   <div className='sales'>
   <Route exact path='/'><Home></Home></Route>
     <Route exact path='/bicycles.js'><Bicycles></Bicycles></Route>
     <Route exact path='/motors.js'><Motors></Motors></Route>
     <Route exact path='/cars.js'><Cars></Cars></Route>
     <Route exact path='/tricycles.js'><Tricycles></Tricycles></Route>
   </div>
   </div>
  
    
    </div>
  );
}

export default App;
