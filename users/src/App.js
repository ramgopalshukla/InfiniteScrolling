
import Navbar from "./Component/Navbar";
import Privateroute from "./Component/PrivateRouter";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Route, Routes  } from "react-router-dom";

function App() {
  return (
  <>
<Navbar/>

<Routes>

<Route path="/login" element={<Login/>}></Route>
  <Route path='/' element={<Privateroute><Home/></Privateroute>}>

  </Route>
</Routes>



  </>
  );
}

export default App;
