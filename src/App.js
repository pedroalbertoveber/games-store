import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Catalogo from './Pages/Catalogo';
import Carrinho from './Pages/Carrinho';
import Game from './Pages/Game';
import "./index.css";
import { UsuarioProvider } from './common/Contexts/Usuario';
import { CarrinhoProvider } from './common/Contexts/Carrinho';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

/* 
vermelho: #A60321
azul-forte: #03588C
azul-medio: #04C4D9
verde-agua: #05F2F2
laraja: #F27405
*/

function App() {
  return (
    <UsuarioProvider>
      <CarrinhoProvider>
        <Router>
          <ToastContainer autoClose={2000} />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:numeroJogo' element={<Game />} />
            <Route path='/carrinho' element={<Carrinho />} />
          </Routes>
        </Router>
      </CarrinhoProvider>
    </UsuarioProvider>
  );
}

export default App;
