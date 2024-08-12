import React from 'react';

function ProductCard({image, description, price, index}) {
    const temporaryImageSize = { width: '300px', height: '300px'};
    
    return(
        <div style={{backgroundColor: 'withe'}}>
                    <div key={`product-id${index}`}>
                        <div >
                            <img
                                src={image}
                                alt={description}
                                style={temporaryImageSize}
                            />
                        </div>
                        <div>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div>
                            <p>
                                {price.toFixed(2)}
                            </p>
                        </div>
                    </div>
        </div>
    )
}

export default ProductCard;