import { useState } from "react";

function Calculadora() {

    //Variveis de estado
    const [valorA, setValorA] = useState(0);
    const [valorB, setValorB] = useState(0);

    //Funções
    const mudarValorB = (e) => {
        setValorB(parseFloat(e.target.value));
        console.log(valorB);
    }

    return (
        <>
            <h1>Calculadora</h1>
            <div className="form-group">
                <label htmlFor="valorA" className="form-label">Valor A</label>
                <input type="number" name="valorA" id="valorA:" value={valorA} className="form-control"
                    onChange={(e) => setValorA(parseFloat(e.target.value))}  />
                <p>O valor A = {valorA}</p>
            </div>
            <div className="form-group">
                <label htmlFor="valorB" className="form-label">Valor B</label>
                <input type="number" id="valorB:" value={valorB} className="form-control"
                    onChange={mudarValorB} />
                <p>O valor A = {valorB}</p>
            </div>

            <div>
                <h3>Resultados</h3>
                <h2>Logica de Programação</h2>
                <p>Soma: {parseFloat(valorA) + parseFloat(valorB)}</p>
                <p>Subtração: {parseFloat(valorA) - parseFloat(valorB)}</p>
                <p>Multiplicação: {parseFloat(valorA) * parseFloat(valorB)}</p>
                <p>Divisão: {parseFloat(valorA) / parseFloat(valorB)}</p>   
                <p>Resto de Divisao: {parseFloat(valorA) % parseFloat(valorB)}</p>   
                <p>Raiz Quadrada: {Math.sqrt(parseFloat(valorA)).toFixed(2)}</p>   
                <p>Valor Absoluto: {Math.abs(parseFloat(valorA))}</p>   
                <p>Valor Arredondado: {Math.round(parseFloat(valorA) * parseFloat(valorB))}</p>   
                <p>Valor Para Baixo: {Math.floor(parseFloat(valorA) * parseFloat(valorB))}</p>   
                <p>Valor Para Cima: {Math.ceil(parseFloat(valorA) * parseFloat(valorB))}</p>   
            </div>

        </>
    )
}

export default Calculadora  