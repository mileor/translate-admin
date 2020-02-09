import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Authorization from "./screens/Authorization/Authorization"
import MainTable from "./screens/MainTable/MainTable"
import AddTranslation from "./screens/AddTranslation/AddTranslation"
import EditTranslation from "./screens/EditTranslation/EditTranslation"

function App() {
  return (
    <Switch>
      <Route path="/main-table" component={MainTable} />
      <Route path="/add-translation" component={AddTranslation} />
      <Route path="/edit-translation/:translateKey" component={EditTranslation} />
      <Route path="/" component={Authorization} />
    </Switch>
  );
}

export default App;
