import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";



const Input = () =>{

    const [text, setText] = useState([]);
    const [contador, setContador] = useState(0);
    

    const addText= (e) =>{
        if (e.keyCode === 13 && e.target.value.trim()!== ""){
            setContador(text.length+1)
            setText([...text, e.target.value]);
           e.target.value = ""
        }
    
    }


    const Eliminar = (indexItem) => {
        setText((prevState) =>
          prevState.filter((todo, index) => index !== indexItem)
          
        );
        setContador(text.length-1);
      };

    return (

<>
<div className="container">
<h1> todos </h1>


<input className="input" type= "text" placeholder= "What needs to be done?" name="input"  onKeyDown={addText}/>



<ul>
{
    text.map((valor, index)=>{
return (
<div className="row ">
        <li className="lista" key={index}>{valor} <strong className="Eliminar" onClick={()=>Eliminar (index)}>X</strong>  </li>

</div>

    
    );
   
     })


}

<div className="row">
<span className="span2">{contador} Item left</span>
<span className="span3"></span>
<span className="span3"></span>
</div>


</ul>



</div>
</>
    )
}


export default Input;