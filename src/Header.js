import React from 'react';

const Header = ({ showCartSummary }) => {
  return (
    <div className="header d-flex justify-content-between align-items-center py-3 bg-light">
      <h1 className="m-0">Shopshop</h1>
      <button className="btn btn-primary" onClick={showCartSummary}>View Cart Summary</button>
    </div>
  );
};

export default Header;
