import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageCRMJoin2 from './PageCRMJoin2';
import PageCRM from './component/Page_crm';
import PageCRM2 from './component/Page_crm3';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageCRM} />
        <Route path="/pagecrm1" component={PageCRM2} />
        <Route path="/pagecrm2" component={PageCRMJoin2} />
      </Switch>
    </Router>
  );
}

export default App;
