import React from "react";

const Flex = ({ children, className }) => {
    const flexClass = `flex ${className}`;
    return <div className={flexClass}>{children}</div>;
};

export default Flex;
