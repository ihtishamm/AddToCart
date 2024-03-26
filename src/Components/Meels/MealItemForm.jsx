import { useRef, useState } from "react";
import Input from "../UI/Input";


// eslint-disable-next-line react/prop-types
export default function MealItemForm({onAddToCart}) {
   
  
    const  [state, setState] = useState(true)
    const amountInputRef =  useRef();
   
     

   const SubmitHandler = (e) => {
           e.preventDefault();

            const enteredAmount = amountInputRef.current.value;
            const enteredAmountNumber = +enteredAmount;

            if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ) {
               setState(false)
               return;
            }
             
            onAddToCart(enteredAmountNumber)
   }
  return (
     <form onSubmit={SubmitHandler}>
         <Input 
            ref={amountInputRef}
         label="Amount" 
         input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            setp: "1",
            defaultValue: "1"
         }}/>
        <button>+  Add</button>

         {!state && <p>Please enter a valid amount (1-5)</p>}
    
     </form>
  )
}
