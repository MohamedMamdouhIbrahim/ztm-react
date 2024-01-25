import Home from "./routes/home/home.component";
import { Routes,Route} from "react-router-dom";
import NavigationBar from "./routes/navigation-bar.component";
import Authenticaiton from "./routes/authentication/authenticaiton";
import Shop from "./routes/shop/shop.component";



const App =  ()=>{

return(
  <Routes>
    <Route path="/" element={<NavigationBar/>}>
      <Route index element={<Home/>}/>
      <Route path="auth" element={<Authenticaiton/>}/>
      <Route path="shop" element={<Shop/>} />
    </Route>
  </Routes>
);
}

export default App;
