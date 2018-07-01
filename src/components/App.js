import React from "react";
import { Colors, NewColor, Menu } from "./containers";
import "../../stylesheets/App.scss"

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App;