import Register from './component/register/Register';
import Login from './component/login/Login';
import Navbar from './component/navbar/Navbar';
import Privateroute from './component/PrivateRoute/PrivateRoute';


import {Routes,Route} from 'react-router-dom'
function App(){
return(
   <div>
<Routes>
<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/navbar" element={<navbar/>}/>
<Route path="/app/PrivateRoute" element={<Privateroute/>}/>

</Routes>
   </div> 
);
}

export default App ;