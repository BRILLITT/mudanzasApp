import React from 'react';
import "../Styles/isLoading.css";

const LoadingScreen = () => {
  return (
    <div className="overlay">
      {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
      <div className="loadingio-spinner-double-ring-dfrq17pid7l">
        <div className="ldio-6vlulxd595k">
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
