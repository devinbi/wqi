import AddAllocating from "./components/equipmentManagement/Addallocating";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addAllocating" element={<AddAllocating />}/>
  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
