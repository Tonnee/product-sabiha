import React from "react";
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Link from "./Link";
import Button from "./Button";


const Item = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((items) => (
                    <div
                        key={items.id}
                        className="w-[228px] p-5 bg-white rounded-md shadow-sm"
                    >
                        <Image
                            imgSrc={items.imgSrc}
                            className="block h-[228px] w-full"
                        />
                        <Heading className='mb-7'>
                            <Link
                                linkRef={items.pageLink}
                                className="text-base font-medium text-headingColor hover:text-hoverColor hover:underline transition-all duration-300 "
                            >
                                {items.name}
                            </Link>
                        </Heading>
                        <Paragraph text={items.details} className='text-detailsColor text-sm mb-6' />
                        <hr className="mb-6"/>
                        <Paragraph text={items.price} className='text-center text-xl font-semibold text-hoverColor' />
                        <Button/>
                    </div>
                ))}
        </>
    );
};

export default Item;
