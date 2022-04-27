import { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import Number from "./Components/Number";
import tq from "./images/illustration-thank-you.svg";

function App() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const numArray = [1, 2, 3, 4, 5];
  const submitHandler = () => {
    setSubmitted(true)
  }
  const onSelect = (num) => {
    setSelected(num);
  };
  return (
    <div className="App">
      {!submitted ? ( <div className="card card1">
        <span className="img-span">
        
          <img src={star} />
        </span>
        <h1>How did we do?</h1>
        <p>
       
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rating-box">
          {numArray.map((num) => <Number num={num} key={num} selected={selected} onSelect={onSelect}/>)}
        </div>
        <button className="btn" onClick={submitHandler} disabled={selected>0 ? false : true}>SUBMIT</button>
      </div>) : ( <div className="card card2">
        <img src={tq} />
        <span>You selected {selected} out of 5</span>
        <h1>Thank you!</h1>
        <p>
         
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>)}
     
     
    </div>
  );
}

export default App;
