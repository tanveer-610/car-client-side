import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider/AuthProvider';
import Navigation from './Pages/SharedComponents/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Register from './Pages/Login/Register/Register';
import Products from './Pages/ProductsManagement/Products/Products/Products';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import PayBill from './Pages/Dashboard/PayBill/PayBill';
import Ratings from './Pages/Dashboard/Ratings/Ratings';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/AdminPanel/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/AdminPanel/AddProduct/AddProduct';
import ManageAllProduct from './Pages/AdminPanel/ManageAllProduct/ManageAllProduct';
import ManageAllOrder from './Pages/AdminPanel/ManageAllOrder/ManageAllOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/ProductsManagement/Purchase/Purchase';
import NotFoundPage from './Pages/SharedComponents/NotFoundPage/NotFoundPage';
import Footer from './Pages/SharedComponents/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/dashboard">
              <DashboardHome></DashboardHome>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>

            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>

            <Route path="/paybill">
              <PayBill></PayBill>
            </Route>

            <Route path="/ratings">
              <Ratings></Ratings>
            </Route>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/addProduct">
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path="/manageAllProduct">
              <ManageAllProduct></ManageAllProduct>
            </AdminRoute>
            <AdminRoute path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </AdminRoute>

            <PrivateRoute path="/purchase/:_id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

