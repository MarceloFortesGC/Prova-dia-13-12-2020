import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/landingpage/LandingPage'
import Cadastro from './pages/cadastro/Cadastro'
import NotFound from './pages/notfound/NotFound'

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="*" exact component={NotFound} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
