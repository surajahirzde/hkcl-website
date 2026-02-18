import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData, categories } from '../../data/products';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="hkcl-products">
      {/* Banner */}
      <div className="page-banner">
        <div className="container page-banner-content">
          <span className="section-tag">What We Build</span>
          <h1>Our <span style={{color:'var(--primary)'}}>Products</span></h1>
          <p>Choose the type of program as per your need. 18+ products across education, governance, and HR.</p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> / <span>Products</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Filter tabs */}
        <div className="hkcl-products__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`hkcl-products__filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="hkcl-products__grid">
          {filtered.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="hkcl-products__card"
              style={{ '--prod-color': product.color }}
            >
              <div className="hkcl-products__card-top">
                <div
                  className="hkcl-products__card-logo-wrap"
                  style={{ background: `${product.color}12` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="hkcl-products__card-img"
                    onError={(e) => { e.target.style.display='none'; }}
                  />
                </div>
                <span className="hkcl-products__card-cat">{product.category}</span>
              </div>

              <div className="hkcl-products__card-body">
                <h3 className="hkcl-products__card-name">{product.name}</h3>
                <p className="hkcl-products__card-tagline">{product.tagline}</p>
                <p className="hkcl-products__card-desc">{product.desc.slice(0, 100)}...</p>
              </div>

              <div className="hkcl-products__card-footer">
                <span className="hkcl-products__card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
