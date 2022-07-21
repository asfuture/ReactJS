import {useState} from 'react';

function Smartcounter(){
    //Retorna um vetor
    //Variavél statefull
    //Função amarrada a essa variavel que atualizar esse valor
    const [quantity, upQuantity] = useState(1);
    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity +1)}>Aumentar</button>
        </>
    )
}

export default Smartcounter;
