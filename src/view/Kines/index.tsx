import React from "react";
import copy from 'copy-to-clipboard'

function IDO() {
  const copyFunction = () => {
    copy("123455555555555555555555");
  };
  return (
    <div>
      IDO
      <button
        onClick={() => {
          copyFunction();
        }}
      >
        copy
      </button>
    </div>
  );
}

export default IDO;
