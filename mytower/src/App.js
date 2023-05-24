import React, { useState } from "react";

function App() {
  const [option, setOption] = useState("");

  const handleOptionClick = (event) => {
    setOption(event.target.value);
  };

  const handleTriangleSubmit = (event) => {
    event.preventDefault();
    const height = parseInt(event.target.height.value);
    const width = parseInt(event.target.width.value);
    const action = parseInt(event.target.action.value);
    const perimeter = height + width + Math.sqrt(height * 2 + width * 2);
    const rows = [];
    let glo=3;
    let num=(width-3)/2;
    let t=(height/num)-1;
    let sher=(height-(num*t))-2;
    
    if((width > (2*height))||((width%2)===0)){
      alert("The triangle cannot be printed")
    }
    else{
      rows.push("*");
      if(width>5){
        for(let x=0;x<sher;x++){
          rows.push("*".repeat(glo));
        }
      for (let i = 0; i < num; i++) {
        for(let j = 0;j <t; j++){
  
            rows.push("*".repeat(glo));
        } 
        glo= glo+2;
      }

      }
      else{
        let h=height-2;
        let g="*";
        if(width===3){g="***"}
       if(width<5) {for(let i=0;i<h; i++){
        rows.push(g);
       }}
       else{
        for(let i=0;i<(h%2); i++){
          rows.push("***")
        }
        for(let i=0;i<(h/2); i++){
          rows.push("***")
        }
        for(let i=0;i<(h/2); i++){
          rows.push("*****")
        }
       }
      }
     
    rows.push("*".repeat(width));
    
    if(action===1){
      console.log("Perimeter: ", perimeter);
    }
    if(action===2){
      console.log(rows.join("\n"));
    }
    
    setTimeout(() => setOption(""), 2000);
  }
  };

  const handleRectangleSubmit = (event) => {
    event.preventDefault();
    const height = parseInt(event.target.height.value);
    const width = parseInt(event.target.width.value);
    const area = height * width;
    if((Math.abs(width-height)>5)||(width===height)){
      console.log("Area: ", area);
      setTimeout(() => setOption(""), 2000);
    }
    else{
      console.log("Perimeter: ", (2*(width+height)));
      setTimeout(() => setOption(""), 2000);
    }
    
  };

  return (
    <div>
      {option === "" && (
        <div>
          <h1>Please select an option:</h1>
          <button value="triangle" onClick={handleOptionClick}>
            Triangle
          </button>
          <button value="rectangle" onClick={handleOptionClick}>
            Rectangle
          </button>
          <button value="exit" onClick={handleOptionClick}>
            Exit
          </button>
        </div>
      )}
      {option === "triangle" && (
        <form onSubmit={handleTriangleSubmit}>
          <label>
            Height:
            <input type="number" name="height" />
          </label>
          <label>
            Width:
            <input type="number" name="width" />
          </label>
          <label>
            action:
          <input type="number" name="action" min={1} max={2}/>
          </label>
          <button type="submit">Calculate</button>
        </form>
      )}
      {option === "rectangle" && (
        <form onSubmit={handleRectangleSubmit}>
          <label>
            Height:
            <input type="number" name="height" />
          </label>
          <label>
            Width:
            <input type="number" name="width" />
          </label>
          
      
          <button type="submit">Calculate</button>
        </form>
      )}
    </div>
  );
}

export default App;