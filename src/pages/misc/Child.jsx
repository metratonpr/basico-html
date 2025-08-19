export function Child({mensagem, onChangeMensagem}) {
    return (
        <>
            <div>
                <h1>Componente Filho</h1>
                <div className="form-group">
                    <label htmlFor="texto" className="form-label">Mensagem</label>
                    <input type="text" className="form-control" value={mensagem} 
                    onChange={onChangeMensagem}/>
                </div>
            </div>
        </>
    )
}