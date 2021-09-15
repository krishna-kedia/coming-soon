import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.page";
import AboutUspage from "./pages/AboutUspage/AboutUspage.page";
import Portfolio from "./pages/Portfolio/portfolio.page";
import Project from "./pages/Project/project.page";
import TGCProject from "./pages/TGCProject/project.page";
import TanyaProject from "./pages/TanyaProject/project.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/aboutus" exact component={AboutUspage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/project" exact component={Project} />
        <Route path="/portfolio/thegirlcode" exact component={TGCProject} />
        <Route path="/portfolio/tanyamarora" exact component={TanyaProject} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
