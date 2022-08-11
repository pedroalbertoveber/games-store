import { useNavigate } from 'react-router-dom';
import { StyledVoltar } from './styles.js';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

function Voltar() {

    const navigate = useNavigate();

    return (
        <StyledVoltar>
            <button type='button' onClick={() => navigate('/catalogo')}>
                <BsFillArrowLeftCircleFill />
            </button>
        </StyledVoltar>
    );
}

export default Voltar;