import React from 'react';
import './HomeStats.css';

const stats = [
  { value: '378+', label: 'Affiliated Colleges', icon: '🏫' },
  { value: '5.6L+', label: 'Students Empowered', icon: '👩‍🎓' },
  { value: '10+', label: 'Years of Excellence', icon: '🏆' },
  { value: '18+', label: 'Digital Products', icon: '💻' },
  { value: '22', label: 'Districts Covered', icon: '📍' },
  { value: '99.9%', label: 'Platform Uptime', icon: '⚡' },
];

const HomeStats = () => {
  return (
    <section className="hkcl-hs">
      <div className="hkcl-hs__inner">
        {stats.map((s, i) => (
          <div key={i} className="hkcl-hs__stat">
            <span className="hkcl-hs__stat-icon">{s.icon}</span>
            <strong className="hkcl-hs__stat-val">{s.value}</strong>
            <span className="hkcl-hs__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStats;
