import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer from '../components/PageLayout';
import SubsectionBoxes from '../components/SubsectionBoxes';
const bodyFont = 'Inter, Arial, sans-serif';

const green = '#43e543';

const hobbyItems = [
  {
    title: 'Reading',
    link: 'https://fable.co/quinton-140484463229',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={green}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#fff" strokeWidth="2"/><rect x="4" y="4" width="16" height="13" rx="2" stroke="#fff" strokeWidth="2" fill={green}/><path d="M8 8h8M8 12h8" stroke="#fff" strokeWidth="2"/></svg>
    ),
    descriptions: [
      "Since 2023, I've been somewhat getting back into reading, mostly random non-fiction topics that had interesting titles/topics, as well as a few fiction stories/books.",
      "Click on the icon to see what I'm reading."
    ]
  },
  {
    title: 'LeetCode',
    link: 'https://leetcode.com/u/BossNass/',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={green}><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill={green}/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="monospace">LC</text></svg>
    ),
    descriptions: [
      "In the Summer of 2024, to keep my problem-solving skills fresh, I decided I would attempt to do more LeetCode questions.",
      "Click on the icon to see my progress."
    ]
  },
  {
    title: 'Lego Creations',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={green}><rect x="3" y="8" width="18" height="10" rx="2" stroke="#fff" strokeWidth="2" fill={green}/><rect x="7" y="4" width="3" height="4" rx="1" stroke="#fff" strokeWidth="2" fill={green}/><rect x="14" y="4" width="3" height="4" rx="1" stroke="#fff" strokeWidth="2" fill={green}/></svg>
    ),
    descriptions: [
      "Since a young age, I've been building Lego, and that hobby has not stopped.",
      "Coming soon"
    ]
  },
  {
    title: 'Movies',
    link: 'https://letterboxd.com/BossNassTheKing/',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={green}><rect x="3" y="6" width="18" height="12" rx="2" stroke="#fff" strokeWidth="2" fill={green}/><circle cx="8" cy="12" r="1.5" fill="#fff"/><circle cx="16" cy="12" r="1.5" fill="#fff"/></svg>
    ),
    descriptions: [
      "In March of 2024, I decided to attempt to make note of every movie I've watched as well as give it my personal rating.",
      "Click the icon to see my Letterboxd profile."
    ]
  },
  {
    title: 'Sports',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={green}><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill={green}/><path d="M12 6v12M6 12h12" stroke="#fff" strokeWidth="2"/></svg>
    ),
    descriptions: [
      "I like to get out and get active when the weather is nice. Volleyball and basketball are my go-to.",
      ""
    ]
  },
  {
    title: 'My Near Future',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={green}><rect x="6" y="3" width="12" height="18" rx="2" stroke="#fff" strokeWidth="2" fill={green}/><path d="M12 7v6M9 13l3 3 3-3" stroke="#fff" strokeWidth="2"/></svg>
    ),
    descriptions: [
      "My sights are currently set on graduating from Carleton University with my degree of Bachelor's of Engineering in Computer Software Engineering.",
      ""
    ]
  }
];

const Hobbies = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="My Hobbies" glowColor={green} className="green-scroll" onEsc={() => navigate('/') }>
        <h2 className="text-2xl font-bold mb-5" style={{ color: green, letterSpacing: 1 }}>Hobbies</h2>
        <p className="mb-8 text-lg text-white text-center font-sans">
          During my downtime, I enjoy investing in personal growth, whether by challenging my mind or nurturing my body. Other times, I let go, immersing myself in captivating topics or exploring imaginative worlds.
        </p>
        <SubsectionBoxes items={hobbyItems} color={green} />
      </PageGlowContainer>
    </>
  );
};

export default Hobbies; 