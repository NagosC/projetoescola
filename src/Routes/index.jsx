import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './Myroute';
import Login from '../Pages/Login';
import Aluno from '../Pages/Aluno';
import Alunos from '../Pages/Alunos';
import Fotos from '../Pages/Fotos';
import Register from '../Pages/Register';
import Page404 from '../Pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/Login/" component={Login} isClosed={false} />
      <MyRoute exact path="/Register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
