export default function AddItem({onAdd}){
    let itemName="";
    const submitHandler=(e)=>{
   e.preventDefault();
//    console.log(itemName);
      onAdd(itemName);
   
    }
    const handleInput =(e)=>{
        // console.log(e.target.value);
        itemName = e.target.value
        
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="additem">itemName</label>
                    <input id="additem" onChange={handleInput} type="text" name=""/>
                </div>
               <div>
                <button type="submit">submit</button>
               </div>
            </form>
        </div>
    )
}