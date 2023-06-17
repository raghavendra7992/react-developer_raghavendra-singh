import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageCRM from './component/Page_crm';
import PageCRM3 from './component/Page_crm3';
import PageCRM2 from './component/Page_crm2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={PageCRM} />
        <Route path="/pagecrm1" component={PageCRM2} />
        <Route path="/pagecrm2" component={PageCRM3} />
      </Routes>
    </Router>
  );
}

export default App;
