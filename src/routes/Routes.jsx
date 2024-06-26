import React from "react";
import { Route, Switch  } from "react-router-dom";
import Auth from "../pages/Auth";
import Dashboard from './../pages/Dashboard/Dashboard';
import Layanan from './../pages/Layanan/Layanan';
import Profil from './../pages/Profil/Profil';
import Ptsl from './../pages/PTSL/Ptsl';
import FormulirBlokir from './../pages/Layanan/FormulirBlokir';
import Review from './../pages/Berkas/Review';
import History from './../pages/Berkas/History';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/Auth" component={Auth} />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/layanan" component={Layanan} />
      <Route exact path="/profil" component={Profil} />
      <Route exact path="/ptsl" component={Ptsl} />
      <Route exact path="/blokir" component={FormulirBlokir} />
      <Route exact path="/review" component={Review} />
      <Route exact path="/history" component={History} />
    </Switch>
  );
};

export default Routes;
