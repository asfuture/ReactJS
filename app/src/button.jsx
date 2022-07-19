import React from "react"


const exibirFuncao = true;
const buttonOn = <button>On1</button>
const buttonOff = <button>Off1</button>
const exibir = false;


function Button(props){
    const {name, onClick} = props
    
    const exibirOn1 = ()=>{
        <div>
            {buttonOn}
        </div>
    }
    
    const naoExibir = ()=>{
        <div>
            {buttonOff}
        </div>
    }

    return (
        <div>
        {exibir ? (
            <div>
            <buttton >ON</buttton>

            <br />
            </div>
        ):(
            <div>
                <buttton >OFF</buttton>
            </div>
        )}
        {exibirFuncao  ? exibirOn1() : naoExibir()}
        <button onClick={onClick}>{name}</button>
        
        <br />
        </div>
    )  
}

export default Button
