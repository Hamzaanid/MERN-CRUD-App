import { BrowserRouter,Route,Routes } from "react-router-dom";

import Navbar from './Compenents/AppBar/Navbar.js';
import Items from './Compenents/BodyPage/Items/Items.js';
import FormAddItem from './Compenents/BodyPage/FormItems/FormAddItem.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
          <Route path="/" exact Component={Items}/>
          <Route path="/addItem" exact Component={FormAddItem}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
