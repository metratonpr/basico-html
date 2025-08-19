import { useState } from "react";
import { Child } from "./Child";

export function Parent() {
    const [mensagem, setMensagem] = useState("");
    
    const mudarMensagem = (e) => {
        setMensagem(e.target.value);
        console.log(mensagem);
    }

    return (
        <>
            <div>
                <h2>
                    Componente Pai
                </h2>
                <p>Mensagem: <strong>{mensagem}</strong></p>
            </div>

            <Child mensagem={mensagem} onChangeMensagem={mudarMensagem}></Child>
        </>
    )
}

