import React from 'react';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import ProductsExplore from '../ProductsExplore/ProductsExplore';

const Explore = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProductsExplore></ProductsExplore>
            <Footer></Footer>
        </div>
    );
};

export default Explore;