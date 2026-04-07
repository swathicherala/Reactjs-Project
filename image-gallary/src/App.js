import './App.css';
// import Gallery from './pages/Gallery.jsx'
// import Parent from './Parent.js'
// import Products from './Products.js'
// import Hooks from './Hooks.js'
import FamilyContext from './contextApi/FamilyContext.js'
import Parent from './contextApi/Parent.js'

const colorObj = {
  dark: "black",
  light: "white"
}

function App() {
  return (
    <div className="App">
      {/* <Gallery /> */}
      {/* <Parent /> */}
      {/* <Products /> */}
      {/* <Hooks /> */}
      <FamilyContext.Provider value={colorObj}>
        <Parent />
      </FamilyContext.Provider>
    </div>
  );
}

export default App;
