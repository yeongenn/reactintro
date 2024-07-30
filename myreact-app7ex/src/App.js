import React, {useState} from "react";
import UnitConv from "./mydir/UnitConv";

function App() {

  const [unitChange, setUnitChange] = useState({meter:'', centimeter:''});

  // Event Handler
  const changeCentimeter = (e) => {
      e.preventDefault();
      setUnitChange(prev => ({ 
    
        ...prev,
        centimeter: Number(e.target.value) * 100
    
      }));
  }

  return (
    <div className="App">
        <h3>단위 환산</h3>
        <br/>
        <input 
            type="text" 
            placeholder="미터값" 
            defaultValue={unitChange.meter} 
            onKeyUp={changeCentimeter} 
        />m는
        <UnitConv centimeter={unitChange.centimeter}></UnitConv>
        <br/>        
    </div>
  );
}

export default App;
