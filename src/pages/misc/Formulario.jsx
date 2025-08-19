
export const Formulario = () => {

    const initialState ={
        nome: "",
        email: "",
        observacao: ""
    }

    const [formData, setFormData] = useState(initialState);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    return (
        <>
            <h3>Formulario de Contato</h3>
            <form action="">
                <div className="form-group">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" className="form-control" name="nome" id="nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="e-mail" className="form-label">E-mail:</label>
                    <input type="email" className="form-control" name="e-mail" id="e-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="observacao" className="form-label">Observação:</label>
                    <textarea name="observacao" id="observacao" className="form-control">                    
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </>
    );
}
