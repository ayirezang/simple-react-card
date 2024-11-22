import React from "react";

const Image = ({ io, className }) => {
  return (
    <div>
      <img src={io} alt=" girl" className={`rounded ${className}`} />
    </div>
  );
};

export default Image;
