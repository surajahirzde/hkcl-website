import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="hkcl-pd-notfound">
        <h2>Product not found</h2>
        <Link to="/products" className="btn-primary">← Back to Products</Link>
      </div>
    );
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="hkcl-pd">
      {/* Hero */}
      <div className="hkcl-pd__hero" style={{ '--pd-color': product.color }}>
        <div className="hkcl-pd__hero-bg" style={{ backgroundImage: `url(${product.image})` }} />
        <div className="hkcl-pd__hero-overlay" />
        <div className="container hkcl-pd__hero-content">
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
          </div>
          <span className="hkcl-pd__cat-tag">{product.category}</span>
          <h1 className="hkcl-pd__hero-title">{product.name}</h1>
          <p className="hkcl-pd__hero-full">{product.fullName}</p>
          <p className="hkcl-pd__hero-tagline">"{product.tagline}"</p>
          <div className="hkcl-pd__hero-actions">
            <a href="#enroll" className="hkcl-pd__btn-main">Enroll Now →</a>
            <a href="#overview" className="hkcl-pd__btn-ghost">Learn More</a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="hkcl-pd__stats-bar" style={{ '--pd-color': product.color }}>
        {product.stats.map((stat, i) => (
          <div key={i} className="hkcl-pd__stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Overview */}
      <section id="overview" className="hkcl-pd__overview">
        <div className="container hkcl-pd__overview-inner">
          <div className="hkcl-pd__overview-text">
            <span className="section-tag">Overview</span>
            <h2 className="section-title">About <span>{product.name}</span></h2>
            <p className="hkcl-pd__overview-desc">{product.desc}</p>
            <p className="hkcl-pd__overview-extra">
              This program is part of HKCL's commitment to making Haryana digitally empowered. 
              As a Government of Haryana initiative, we ensure quality, accessibility, and measurable outcomes 
              for every learner and organization we serve.
            </p>
          </div>
          <div className="hkcl-pd__overview-img-wrap">
            <img src={product.image} alt={product.name} className="hkcl-pd__overview-img" />
            <div className="hkcl-pd__overview-badge" style={{ background: product.color }}>
              <span>ISO 9001:2015</span>
              <small>Certified</small>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="hkcl-pd__features" style={{ '--pd-color': product.color }}>
        <div className="container">
          <div className="hkcl-pd__features-header">
            <span className="section-tag">Key Highlights</span>
            <h2 className="section-title">What You <span>Get</span></h2>
          </div>
          <div className="hkcl-pd__features-grid">
            {product.features.map((feat, i) => (
              <div key={i} className="hkcl-pd__feature-card">
                <div className="hkcl-pd__feature-num" style={{ background: product.color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="hkcl-pd__feature-text">{feat}</span>
              </div>
            ))}
            {/* Extra filler features */}
            <div className="hkcl-pd__feature-card">
              <div className="hkcl-pd__feature-num" style={{ background: product.color }}>
                {String(product.features.length + 1).padStart(2, '0')}
              </div>
              <span className="hkcl-pd__feature-text">Government Recognized Certification</span>
            </div>
            <div className="hkcl-pd__feature-card">
              <div className="hkcl-pd__feature-num" style={{ background: product.color }}>
                {String(product.features.length + 2).padStart(2, '0')}
              </div>
              <span className="hkcl-pd__feature-text">Expert Support & Guidance</span>
            </div>
            <div className="hkcl-pd__feature-card">
              <div className="hkcl-pd__feature-num" style={{ background: product.color }}>
                {String(product.features.length + 3).padStart(2, '0')}
              </div>
              <span className="hkcl-pd__feature-text">Flexible Learning Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="hkcl-pd__why">
        <div className="container">
          <div className="hkcl-pd__why-inner">
            <div className="hkcl-pd__why-text">
              <span className="section-tag">Why HKCL</span>
              <h2 className="section-title">Why Choose <span>{product.name}?</span></h2>
              <div className="hkcl-pd__why-points">
                {[
                  { icon: '✅', text: 'Backed by the Government of Haryana for credibility and trust' },
                  { icon: '🏆', text: 'ISO 9001:2015 Certified processes ensuring quality delivery' },
                  { icon: '📊', text: 'Data-driven outcomes with measurable impact for learners' },
                  { icon: '🤝', text: '378+ affiliated institutions across Haryana ensuring reach' },
                  { icon: '💡', text: 'Developed by domain experts with 8+ years of experience' },
                  { icon: '🚀', text: 'Continuous updates to keep pace with industry standards' },
                ].map((pt, i) => (
                  <div key={i} className="hkcl-pd__why-point">
                    <span className="hkcl-pd__why-icon">{pt.icon}</span>
                    <span>{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hkcl-pd__why-visual" style={{ background: `${product.color}10` }}>
              <div className="hkcl-pd__why-circle" style={{ borderColor: product.color }}>
                <strong style={{ color: product.color }}>{product.stats[0].value}</strong>
                <span>{product.stats[0].label}</span>
              </div>
              <div className="hkcl-pd__why-circle hkcl-pd__why-circle--sm" style={{ borderColor: product.color }}>
                <strong style={{ color: product.color }}>{product.stats[1].value}</strong>
                <span>{product.stats[1].label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Enroll */}
      <section id="enroll" className="hkcl-pd__cta" style={{ '--pd-color': product.color }}>
        <div className="container hkcl-pd__cta-inner">
          <div className="hkcl-pd__cta-text">
            <h2>Ready to Get Started with <span>{product.name}?</span></h2>
            <p>Join thousands of students and organizations who have transformed their journey with HKCL.</p>
          </div>
          <div className="hkcl-pd__cta-btns">
            <a href="https://hkcl.in" target="_blank" rel="noreferrer" className="hkcl-pd__btn-main">
              Enroll Now
            </a>
            <a href="#contact" className="hkcl-pd__btn-white">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="hkcl-pd__related">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 36 }}>
              Related <span>Products</span>
            </h2>
            <div className="hkcl-pd__related-grid">
              {relatedProducts.map(rp => (
                <Link to={`/products/${rp.id}`} key={rp.id} className="hkcl-pd__related-card" style={{ '--rd-color': rp.color }}>
                  <img src={rp.image} alt={rp.name} />
                  <div className="hkcl-pd__related-info">
                    <strong>{rp.name}</strong>
                    <span>{rp.tagline}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
