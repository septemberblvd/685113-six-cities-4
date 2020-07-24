import * as React from 'react';

const Error = () => {

  return (
    <div
      style={{
        position: `fixed`,
        top: 0,
        right: 0,
        width: `100%`,
        color: `white`,
        backgroundColor: `red`,
        boxShadow: `0 14px 28px red`,
        fontSize: `20px`,
        fontWeight: `bold`,
        textAlign: `center`,
      }}>No comment sent, check your internet connection</div>
  );
};

export default Error;
