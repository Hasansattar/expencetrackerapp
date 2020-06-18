import React,{useState} from 'react'

const AddTransaction = () => {

   const [text, setText] = useState('');
   const [amount, setAmount] = useState(0);

      const itemText =(event)=>{
          setText(event.target.value);


      }
      const itemAmount =(event)=>{
        setAmount(event.target.value);


    }


    return (
        <>
        <h3>Add new transaction</h3>
        <form> 
            <div className="form-control">
                <label htmlFor="text">Text</label>
                
                    <input type="text"  placeholder="Enter text.." value={text} onChange={itemText} />

            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br/>
                (negative-expense,positive-income)
                </label>
             
               <input type="text"  placeholder="Enter Amount.." value={amount} onChange={itemAmount} />
               <button className="btn">Add Transaction</button>
            </div>
        </form>
            
        </>
    )
}

export default AddTransaction;
