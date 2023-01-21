import { Routes ,Route} from "react-router-dom";
import React from 'react';
import Login from './Login';
import Profile from './Profile';




function App() {

  return(
<>

   <Routes >
          {/* <Route  exact path="/" >  <Login /> </Route> */}
          <Route   path="/" element={<Login /> } /> 
          <Route   path="/profile" element={<Profile /> } />  
         
          {/* <Route  path="/profile" >  <Profile /> </Route> */}
  
   </Routes>

</>
  );
 
}

export default App;
