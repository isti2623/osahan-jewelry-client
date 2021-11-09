import React from 'react';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import Review from '../../Shared/Review/Review';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Blog></Blog>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;