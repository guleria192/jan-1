import { Routes ,Route} from "react-router-dom";
import React from 'react';
import Login from './Login';
import Profile from './Profile';

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/guleria192/jan-1.git
// git push -u origin main


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
