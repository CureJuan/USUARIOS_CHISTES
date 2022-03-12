import {
  Route,
  Switch,
  HashRouter,
  Link,
} from "react-router-dom";
import Usuarios from "../pages/Usuarios";
import Chiste from "../pages/Chiste";
import Chistes from "../pages/Chistes";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const Rutas = () => {
  return (
    <div>
      <h2>RUTAS CON API</h2>
      <HashRouter>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/usuarios">Usuarios</Link>
          <Link to="/chiste">Chiste</Link>
          <Link to="/chistes">Todos los Chistes</Link>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/chiste" component={Chiste} />
          <Route exact path="/chistes" component={Chistes} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <hr />
    </div>
  );
};
export default Rutas;
