import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer, { bodyFont } from '../components/PageLayout';

const workHistory = [
  {
    company: 'Ascend FS',
    title: 'AI and Automation Engineer',
    type: 'Permanent Full-time',
    date: 'May 2025 - Present',
    location: 'Toronto, Ontario, Canada · Hybrid',
    achievements: [],
    skills: [],
  },
  {
    company: 'IMCD Group',
    title: 'IT Specialist',
    type: 'Internship',
    date: 'May 2024 - Aug 2024',
    location: 'Brampton, Ontario, Canada · On-site',
    achievements: [
      'Created scripts in VBA to make shortcuts, automating tasks and enhancing the functionality of Microsoft applications.',
      'Led and coordinated a data migration initiative, which transferred information from off-site servers to MS SharePoint sites using the SharePoint migration tool. The move streamlined administrative processes and resulted in annual savings.',
      'Developed a documentation tool using Microsoft services to replace a documentation version control system that tracked critical documents. This resulted in the consolidation of team-specific documents and savings.',
      'Delivered onsite and remote technical support, including troubleshooting, device setup, repair and maintenance.'
    ],
    skills: [
      'Skill Development', 'Information Technology', 'Software Development', 'Computer Programming', 'Software Solutions'
    ],
  },
  {
    company: 'Ericsson',
    title: 'Automation Developer',
    type: 'Co-op',
    date: 'Sep 2022 - Sep 2023',
    location: 'Ottawa, Ontario, Canada · Remote',
    achievements: [
      'Developed a Python script to automate the transfer of data from email to corresponding Jira tickets, enhancing the efficiency and accuracy of data flow. This script removed repetitive documentation actions, saving several minutes per interaction.',
      'Developed MS Power Automate flows for data collection, transformation, and distribution while resolving integration errors in outdated solutions to improve functionality and streamline workflows for both internal and external stakeholders.',
      'Facilitated weekly Scrum meetings to track progress, align with Agile principles, and foster collaboration. Maintained daily communication with all team members, ensuring that roadblocks were addressed promptly and delivery goals could be met.'
    ],
    skills: [
      'Software Design', 'Skill Development', 'Collaborative Problem Solving', 'Jira', 'Software Development', 'Workflow Management', 'Programming Languages', 'Computer Programming', 'Software Solutions', 'Python (Programming Language)'
    ],
  },
  {
    company: 'JSI',
    title: 'Software Developer',
    type: 'Co-op',
    date: 'Jan 2022 - Apr 2022',
    location: 'Ottawa, Ontario, Canada · Remote',
    achievements: [
      'Revitalized a load testing system by debugging existing code, providing a reliable solution that restored our means to perform testing. Through this restoration, we could more accurately predict the scalability of our systems, eliminating guesswork.',
      'Leveraged SourceTree, Git, Slack, and Jenkins to manage coding workloads, version control, and development workflows.'
    ],
    skills: [
      'Software Design', 'Skill Development', 'Jenkins', 'Collaborative Problem Solving', 'Jira', 'Agile Methodologies', 'Software Development', 'Programming Languages', 'Computer Programming', 'Software Solutions'
    ],
  },
  {
    company: 'Metrolinx',
    title: 'Summer Student',
    type: 'Contract Full-time',
    date: 'May 2021 - Aug 2021',
    location: 'Toronto, Ontario, Canada · Hybrid',
    achievements: [
      'Presented unresolved door system issues to team members to determine an action plan to reduce future recurring problems.',
      'Incorporated formulas and graphs within working copies of excel spreadsheets to improve efficiency for documentation and readability of information.',
      'Trained new members in the team in preparation to take over my position to ensure a seamless transition of tasks.'
    ],
    skills: [
      'Training', 'Skill Development', 'Problem Solving', 'Engineering'
    ],
  },
];

const themeColor = '#43a3ff';

const Career = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="My Career" glowColor="#0066ff" className="blue-scroll" onEsc={() => navigate('/') }>
        <h2 className="career-title" style={{ color: themeColor, letterSpacing: 1 }}>Work History</h2>
        <div className="career-list">
          {workHistory.map((job) => (
            <article key={job.company + job.title} className="career-card" style={{ ['--accent']: themeColor }}>
              <header className="career-header">
                <div className="career-role">{job.title}</div>
                <div className="career-company">@ {job.company}</div>
              </header>
              <div className="career-meta">
                {job.type && <span>{job.type}</span>}
                {job.location && <span>{job.location}</span>}
                {job.date && <span>{job.date}</span>}
              </div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="career-achievements">
                  {job.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              )}
              {job.skills && job.skills.length > 0 && (
                <div className="career-skills"><span className="label">Skills:</span> {job.skills.join(', ')}</div>
              )}
            </article>
          ))}
        </div>
      </PageGlowContainer>
    </>
  );
};

export default Career; 