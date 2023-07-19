import Register from './component/register/Register';
import Login from './component/login/Login';
import {Routes,Route} from 'react-router-dom'
function App(){
return(
   <div>
<Routes>
<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>

</Routes>
   </div> 
);
}

export default App ;
