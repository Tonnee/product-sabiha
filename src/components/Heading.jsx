import React from "react";

const Heading = ({ text, className, children }) => {
    return <h2 className={className}>{text} {children}</h2>;
};

export default Heading;
