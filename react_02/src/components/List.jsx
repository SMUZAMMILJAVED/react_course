import Item from "./Item";

export default function List({arr}){
    // let arr=["item1","item2","item3","item4"];
    let item=arr.map((v,index)=>{
        return <Item key={index} title={v}/>
    })
  return (
    <div>
     {item}   
    </div>
  )
};