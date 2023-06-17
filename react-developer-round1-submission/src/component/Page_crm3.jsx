import React, { useState } from 'react';

function PageCRM2() {
  const [showJoin, setShowJoin] = useState(false);

  const handleTableClick = () => {
    setShowJoin(true);
  };

  return (
    <div>
      <h1>Page CRM Join 2</h1>
      <div>
        <div>
          <button onClick={handleTableClick}>sales_pipeline</button>
          <button onClick={handleTableClick}>sales_teams</button>
        </div>
        {showJoin && (
          <div>
            <div>JOIN icon</div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageCRM2;
