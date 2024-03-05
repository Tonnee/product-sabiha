import React from "react";

const Link = ({ linkRef, text, className, children }) => {
    return (
        <>
            <a href={linkRef} className={className}>
                {text}
                {children}
            </a>
        </>
    );
};

export default Link;
