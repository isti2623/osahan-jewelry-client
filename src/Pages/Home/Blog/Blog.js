import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='fs-1 fw-bold my-3 text-danger'>Blogs</h2>
            <div className="row">
                <div className="col">
                    <div class="card border-secondary mb-3">
                        <div class="card-header">Easy Replacement</div>
                        <div class="card-body text-secondary">
                            <h5 class="card-title">satisfied with your purchase</h5>
                            <p class="card-text">We provide great customer experience each time you shop with your PriyoShop.com. If you are not satisfied with your purchase</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card border-secondary mb-3">
                        <div class="card-header">Safe Payment Option</div>
                        <div class="card-body text-secondary">
                            <h5 class="card-title">unauthorized access</h5>
                            <p class="card-text">We are committed to ensure the security of your information. We maintain suitable physical, electronic and managerial.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card border-secondary mb-3">
                        <div class="card-header">Ensuring Your Privacy</div>
                        <div class="card-body text-secondary">
                            <h5 class="card-title">privacy policy sets out</h5>
                            <p class="card-text">This privacy policy sets out how PriyoShop.com uses and protects any information that you give here when you use this website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;