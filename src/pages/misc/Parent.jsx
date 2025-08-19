import { useState } from "react";
import { Child } from "./Child";

export function Parent() {
    const [messagem, setMessagem] = useState("");    
    return (
        <>
            <div>
                Componente Pai
                <p>Mensagem: <strong>{messagem}</strong></p>
            </div>

            <Child></Child>
        </>
    )
}

