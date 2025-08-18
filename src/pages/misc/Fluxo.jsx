
export function Fluxo({valorA, valorB}) {
  return(
    <>
    <h1>Controle de Fluxo</h1>
    <p>Maior: {valorA > valorB ? "Sim" : "Não"}</p>
    <p>Menor: {valorA < valorB ? "Sim" : "Não"}</p>
    <p>Valor Igual: {valorA == valorB ? "Sim" : "Não"}</p>
    <p>Valor e Tipo Igual: {valorA === valorB ? "Sim" : "Não"}</p>
    <p>Maior ou igual: {valorA >= valorB ? "Sim" : "Não"}</p>
    <p>Menor ou igual: {valorA <= valorB ? "Sim" : "Não"}</p>
    <p>Diferente: {valorA != valorB ? "Sim" : "Não"}</p>
    </>
  );
}