import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageCRM from './component/Page_crm';
import PageCRM3 from './component/Page_crm3';
import PageCRM2 from './component/Page_crm2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageCRM/>} />
        <Route path="/pagecrm1" element={<PageCRM2/>} />
        <Route path="/pagecrm2" element={<PageCRM3/>} />
      </Routes>
    </Router>
  );
}

export default App;
