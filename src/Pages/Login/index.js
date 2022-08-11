import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../common/Contexts/Usuario";
import { StyledHeader, StyledMain, StyledForm, StyledButton } from "./styles";

function Login() {

    const {nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
    const navigate = useNavigate();
    
    function logIn(e) {
        e.preventDefault();
        navigate('/catalogo');
    }

    return(
        <StyledMain>
            <StyledHeader>
                <div>
                    <h2>Loja de Jogos</h2>
                </div>
            </StyledHeader>
            <StyledForm>
                <fieldset>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <label>Saldo:</label>
                        <input type="number" value={saldo} onChange={(e) => setSaldo(e.target.value)} className={"saldo"} placeholder="R$"/>
                    </div>
                </fieldset>
                <StyledButton
                type="submit"
                disabled={nome.length < 4}
                onClick={(e) => logIn(e)}
                >
                    Entrar
                </StyledButton>
            </StyledForm>
        </StyledMain>
    );
}

export default Login;