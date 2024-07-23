import React, { useState } from 'react';
import { navLinks } from '../data';

import { Link } from 'react-router-dom';

const CategoryDisplay = () => {
    const categoryLinks = navLinks.slice(2, 7);
    const [activeCategory, setActiveCategory] = useState(categoryLinks[2]);


    const handleDisplay = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className='display__container view'>
            <div className='image-display'>
                <img src={activeCategory.photo} alt={activeCategory.name} />
                <Link to={activeCategory.path}>Discover</Link>
            </div>
            <div className='text-display-wrapper'>
                <div className='text-display'>
                    {categoryLinks.map((category, index) => (
                        <div key={index} className={`category-item ${activeCategory === category ? 'active' : ''}`} onClick={() => handleDisplay(category)}>
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryDisplay;