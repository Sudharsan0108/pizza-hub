import React,{usestate} from "react"
import pizza from "./pizza.jpg"
const Pizza =()=>
{
  const submit=()=>{
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const peperoni = document.getElementById('checkbox').value;
    const quantity =document.getElementById('quantity').value;
    var instructions = document.getElementById('instructions').value;
    console.log("order for",{quantity,size},"pizza(s) that are have",{peperoni}, "for",{name} );//instructions ? "have":"no instructions"
    const answer= `"order for" ${quantity,size}, "pizza(s) that are have",${peperoni}, "for" ,${name}` 
    document.getElementById('output').innerHTML=answer
  }
  
  return (
    <>
    <div>
      <h2>Hello Everyone </h2>
    </div>
    <div>
      <input type="image" src={pizza} height ="200" width="300"></input>
    </div>
    <div>
      <h1>BUILD YOUR PIZZA</h1>
    </div>
    <div>
      <label>NAME :</label><input type="text" name="name" id="name" />
    </div>
    <div>
    <label>SIZE :</label>
    <select  id="size">
    <option value="small">small</option>
    <option value="medium">medium</option>
    <option value="large">large</option>
    </select>
    </div>
    <div>
    <label>PEPPORONI:</label><input type="checkbox" id="checkbox" />
    </div>
    <div>
    <label>CHEESE:</label><input type="checkbox" id="checkbox" />
    </div>
    <div><label>QUANTITY :</label><input type="number" id="quantity" defaultValue={0}/>
    </div>
    <div><label>Additional instructions :</label></div>
    <div>
    <textarea id="instructions" cols="35" rows="05"></textarea> </div> 
    <div>
      <button type="submit" onClick={submit}>submit</button>
    </div>
    <div>
      <p id="output" onChange={submit}></p>
        
    </div>
    </>
  );
}


export default Pizza;