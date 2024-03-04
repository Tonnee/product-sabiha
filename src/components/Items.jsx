import React from "react";
import Heading from "./Heading";
import Image from "./Image";
import PC1 from "../assets/pc1.webp";
import Paragraph from "./Paragraph";

const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div key={item} className="w-[228px] p-5">
                        <Image
                            imgSrc={PC1}
                            className="block h-[228px] w-full"
                        />
                        <Heading text="product heading" />
                        <Paragraph text="Processor: Intel Core i3-1115G4 (6MB Cache, 3.00 GHz up to 4.10 GHz)" />
                    </div>
                ))}
        </>
    );
};

export default Items;
