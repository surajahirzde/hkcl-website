import React from 'react';
import './HomeCTA.css';

const HomeCTA = () => {
  return (
    <section className="hkcl-hcta">
      <div className="hkcl-hcta__bg" />
      <div className="container hkcl-hcta__inner">
        <div className="hkcl-hcta__content">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>Join HKCL</span>
          <h2 className="hkcl-hcta__title">
            Ready to Transform <br /> Your Digital Journey?
          </h2>
          <p className="hkcl-hcta__sub">
            Whether you're a student, institution, or government body — HKCL has the right digital solution for you.
          </p>
          <div className="hkcl-hcta__actions">
            <a href="/products" className="hkcl-hcta__btn-main">Explore Programs →</a>
            <a href="mailto:webenquiry@hkcl.in" className="hkcl-hcta__btn-ghost">Contact Us</a>
          </div>
        </div>
        <div className="hkcl-hcta__cards">
          {[
            { icon: '🎓', title: 'For Students', desc: 'Enroll in industry-relevant digital courses and get certified.' },
            { icon: '🏫', title: 'For Institutions', desc: 'Transform your campus with our digital university solutions.' },
            { icon: '🏛️', title: 'For Government', desc: 'Implement e-governance solutions that serve citizens better.' },
          ].map((card, i) => (
            <div key={i} className="hkcl-hcta__card">
              <span className="hkcl-hcta__card-icon">{card.icon}</span>
              <strong>{card.title}</strong>
              <span>{card.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
