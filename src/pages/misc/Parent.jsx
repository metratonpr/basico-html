import { useState } from "react";
import { Child } from "./Child";

export function Parent() {
    const [messagem, setMessagem] = useState("");
    return (
        <>
            <div>
                <h2>
                    Componente Pai
                </h2>
                <p>Mensagem: <strong>{messagem}</strong></p>
            </div>

            <Child></Child>
        </>
    )
}

