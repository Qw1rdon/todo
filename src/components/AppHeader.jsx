import React from "react";


const AppHeader = ({done, active}) => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
            <h1>My todo list</h1>
        </div>
        <div className="col-6 text-secondary">
            <h3>{done} активно, {active} сделано</h3>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;