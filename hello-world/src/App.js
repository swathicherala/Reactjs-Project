
import './App.css';
// import PetComponent from './PetComponent'
// import MovieComponent from './MovieComponent'
// import Colorizer from './Colorizer';
// import Counter from './Counter';
// import ToDoList from './ToDoList';
// import SearchFilter from './SearchFilter';
// import ShowHidePassword from './ShowHidePassword'
// import FetchApi from './FetchApi';
// import UserCard from './UserCard';
// import StrapiFetchApi from './StrapiFetchApi';
// import Users from './Users'
import { BrowserRouter } from "react-router-dom"
import Navbar from "./Navbar"
import AppRoutes from "./routes/AppRoutes"

function App() {
  // const users = [
  //   {name:"Swathi", age:29, city:"Mumbai"}
  // ]
  // const products = [
  //   {item:"Laptop",price:50000}
  // ]
  return (
    <div className="App">
      {/* <PetComponent />
      <MovieComponent /> */}
      {/* <Colorizer /> */}
      {/* <Counter />
      <ToDoList /> */}
      {/* <SearchFilter /> */}
      {/* <ShowHidePassword /> */}
      {/* <FetchApi /> */}
      {/* <UserCard users={users} products={products}/> */}
      {/* <UserCard title="User Info">
        <p>Name: John</p>
        <p>Age: 25</p>
      </UserCard>

      <UserCard title="Product Info">
        <p>Product: Laptop</p>
        <p>Price: 50000</p>
      0</UserCard>
      <StrapiFetchApi /> */}
      {/* <Users /> */}
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
