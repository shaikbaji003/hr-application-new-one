import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import SignIn from "./components/SignIn";
function App() {
  return (
    <Routes>
      <div className="container">
        <Route path="/" element={  <SignIn />}/>
        <Route path="/Home" element={    <Topbar />}/>
        <Route path="/Home" element={    <Sidebar />}/>
        <Route path="/Home" element={   <Home />}/>
        <Route path="/users" element={  <UserList />}/>
        
        {/* </Route> */}
        {/* <Route exact path="/Home">
          <Topbar />
        </Route>
        <Route exact path="/Home">
          <Sidebar />
        </Route>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route> */}
        {/* </Switch> */}
      </div>
    </Routes>
  );
}

export default App;
