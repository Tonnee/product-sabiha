import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Pagination from "../components/Pagination";

const Product = () => {
    return (
        <Container>
            <Flex className="px-5">
                <div className="w-1/4"></div>
                <div className="w-3/4">
                    <Flex className="flex-wrap gap-2.5">
                        <Pagination itemsPerPage={12} />
                    </Flex>
                </div>
            </Flex>
        </Container>
    );
};

export default Product;
