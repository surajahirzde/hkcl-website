import React, { useState } from 'react';
import './Testimonials.css';

const tabs = ['Directors', 'Clients', 'Vendors', 'Ex. Employees'];

const testimonials = {
  Directors: [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Managing Director, HKCL',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      text: 'HKCL has been instrumental in digitally transforming Haryana\'s education ecosystem. Our journey from a small initiative to serving over 5.6 lakh students is a testament to our team\'s dedication and the trust the Government of Haryana places in us.',
    },
    {
      name: 'Priya Sharma',
      role: 'Director, Operations',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      text: 'We believe digital empowerment is the foundation of a progressive society. Every product we build is designed with the student and citizen at the center — ensuring accessibility, quality, and real impact.',
    },
    {
      name: 'Amit Verma',
      role: 'Director, Technology',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      text: 'Our technology stack is built to scale. From serving hundreds of students to millions, HKCL\'s platforms maintain 99.9% uptime and continuously evolve to meet the changing demands of education and governance.',
    },
  ],
  Clients: [
    {
      name: 'Dr. Suresh Yadav',
      role: 'Vice Chancellor, Kurukshetra University',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
      text: 'Implementing HKCL\'s Digital University Program has transformed how we operate. Our admission process that once took 3 months now completes in 3 weeks. The system is robust, reliable, and our faculty love it.',
    },
    {
      name: 'Neha Gupta',
      role: 'Principal, Government Polytechnic Panchkula',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      text: 'HS-CIT has been a game-changer for our students. The certification is recognized across Haryana and gives our students a competitive edge in the job market. HKCL\'s support team is always responsive.',
    },
    {
      name: 'Rajan Mehta',
      role: 'Registrar, MDU Rohtak',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'The online examination platform HarPariksha has eliminated paper-based exams and significantly reduced our administrative burden. Students can take exams from anywhere, and results are available instantly.',
    },
  ],
  Vendors: [
    {
      name: 'Deepak Bhardwaj',
      role: 'Vendor Partner, Delhi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
      text: 'We have had the privilege of collaborating with HKCL as a vendor for the past 9 years. The relationship we\'ve cultivated is built on mutual trust, transparency, and shared commitment to quality outcomes for learners.',
    },
    {
      name: 'Chander Prakash',
      role: 'Technology Vendor, Chandigarh',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      text: 'Collaborating with HKCL has been the most rewarding professional relationship. The team is highly professional, pays on time, and genuinely values long-term partnerships. Their vision aligns with creating real impact.',
    },
    {
      name: 'Devendra Singh',
      role: 'Content Vendor, Gurugram',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      text: 'HKCL has a great leadership, a very competent team, and a clear vision of growth. The direction of top management is very inspiring — they care about quality and making a real difference in education.',
    },
  ],
  'Ex. Employees': [
    {
      name: 'Ankita Rawat',
      role: 'Former Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      text: 'My 5 years at HKCL were the most formative of my career. I had the opportunity to work on real-scale government projects, lead a team of 12, and see the direct impact of our work on thousands of students across Haryana.',
    },
    {
      name: 'Rohit Kapoor',
      role: 'Former Project Manager',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'HKCL is an organization that truly believes in its mission. The work-life balance is good, the projects are challenging, and the sense of purpose you get from contributing to public education transformation is unmatched.',
    },
    {
      name: 'Meera Joshi',
      role: 'Former UX Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      text: 'Working at HKCL taught me how to design for diverse users across all demographics. The exposure to real government-scale projects and the collaborative culture made me a much better designer.',
    },
  ],
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('Vendors');

  const current = testimonials[activeTab];

  return (
    <section className="hkcl-testi">
      <div className="container">
        <div className="hkcl-testi__header">
          <span className="section-tag">What People Say</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">Hear from the people who matter most — our clients, partners, and team.</p>
        </div>

        <div className="hkcl-testi__tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`hkcl-testi__tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="hkcl-testi__grid">
          {current.map((t, i) => (
            <div key={i} className="hkcl-testi__card">
              <div className="hkcl-testi__quote">"</div>
              <p className="hkcl-testi__text">{t.text}</p>
              <div className="hkcl-testi__author">
                <img src={t.avatar} alt={t.name} className="hkcl-testi__avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
