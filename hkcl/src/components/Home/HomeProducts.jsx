import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/products';
import './HomeProducts.css';

const featured = productsData.slice(0, 8);

const HomeProducts = () => {
  return (
    <section className="hkcl-hp">
      <div className="container">
        <div className="hkcl-hp__header">
          <div>
            <span className="section-tag">Our Portfolio</span>
            <h2 className="section-title">Featured <span>Products</span></h2>
            <p className="section-subtitle" style={{ textAlign:'left' }}>
              A glimpse of our most impactful digital programs and platforms.
            </p>
          </div>
          <Link to="/products" className="btn-outline">View All Products →</Link>
        </div>

        <div className="hkcl-hp__grid">
          {featured.map(product => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="hkcl-hp__card"
              style={{ '--hp-color': product.color }}
            >
              <div className="hkcl-hp__card-img-wrap">
                <img src={product.image} alt={product.name} />
                <div className="hkcl-hp__card-overlay" />
                <span className="hkcl-hp__card-cat">{product.category}</span>
              </div>
              <div className="hkcl-hp__card-info">
                <strong>{product.name}</strong>
                <span>{product.tagline}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
