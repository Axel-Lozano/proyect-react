import './CartWidget.css';
import React from 'react';

const CartWidget = () => {
    return (
        <>
            <div>
                <div className="card mb-3">
                    <h3 className="card-header">Card header</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{ fontSize: '1.125rem', textAnchor: 'middle' }}>
                        <rect width="100%" height="100%" fill="#868e96" />
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartWidget;
