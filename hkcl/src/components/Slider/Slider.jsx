import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';

const slides = [
  {
    id: 1,
    tag: 'Digital Empowerment',
    title: 'Empowering Students',
    highlight: 'Digitally',
    desc: '378 Affiliated Colleges & Institutions and 5,60,525 Students in Haryana since last 6 years.',
    cta: 'Explore Programs',
    ctaLink: '/products',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    accent: '#E8610A',
  },
  {
    id: 2,
    tag: 'Higher Education',
    title: 'Digital University',
    highlight: 'Program',
    desc: 'Universities in Haryana are going digital with HKCL\'s Digital University Program — enabled to operate fully online.',
    cta: 'Learn More',
    ctaLink: '/services/higher-education',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=80',
    accent: '#1B3A4B',
  },
  {
    id: 3,
    tag: 'e-Governance',
    title: 'Serving People',
    highlight: 'Digitally',
    desc: 'A high-tech initiative of the Government of Haryana, working to serve citizens and government entities with modern technology.',
    cta: 'Our Services',
    ctaLink: '/services/e-governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    accent: '#2E7D32',
  },
  {
    id: 4,
    tag: 'Course & Assessment',
    title: 'Knowledge Lit',
    highlight: 'Development',
    desc: 'Developed by academicians and educationists with 8+ years domain experience. No match when it comes to automating academics.',
    cta: 'View Courses',
    ctaLink: '/services/course-assessment',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80',
    accent: '#6A1B9A',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="hkcl-slider">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hkcl-slider__slide${i === current ? ' active' : ''}`}
          style={{ '--slide-accent': slide.accent }}
        >
          {/* Background image */}
          <div
            className="hkcl-slider__bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hkcl-slider__overlay" />

          {/* Content */}
          <div className="container hkcl-slider__content">
            <div className="hkcl-slider__text">
              <span className="hkcl-slider__tag">{slide.tag}</span>
              <h1 className="hkcl-slider__title">
                {slide.title} <br />
                <span className="hkcl-slider__title-hl">{slide.highlight}</span>
              </h1>
              <p className="hkcl-slider__desc">{slide.desc}</p>
              <div className="hkcl-slider__actions">
                <a href={slide.ctaLink} className="hkcl-slider__btn-primary">{slide.cta} →</a>
                <a href="/about-us" className="hkcl-slider__btn-ghost">About HKCL</a>
              </div>
            </div>

            {/* Stats */}
            <div className="hkcl-slider__stats">
              <div className="hkcl-slider__stat">
                <strong>378+</strong>
                <span>Colleges</span>
              </div>
              <div className="hkcl-slider__stat-div" />
              <div className="hkcl-slider__stat">
                <strong>5.6L+</strong>
                <span>Students</span>
              </div>
              <div className="hkcl-slider__stat-div" />
              <div className="hkcl-slider__stat">
                <strong>6+</strong>
                <span>Years</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button className="hkcl-slider__arrow hkcl-slider__arrow--prev" onClick={prev}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="hkcl-slider__arrow hkcl-slider__arrow--next" onClick={next}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 6 15 12 9 18"/></svg>
      </button>

      {/* Dots */}
      <div className="hkcl-slider__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hkcl-slider__dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hkcl-slider__progress" key={current}>
        <div className="hkcl-slider__progress-bar" />
      </div>
    </div>
  );
};

export default Slider;
