export const bioParagraphs = [
  "I'm a full-stack software engineer with about five years of experience shipping production software. I care about clean code and testing, and I try to keep the team moving. That often means reviewing pull requests quickly so nobody sits blocked waiting on me. I'm looking for teams that care about how they build, not only that something ships.",
  'I got into computer science from an intro class in high school and studied it at Rutgers. My first real project experience was at a small startup, Life Skills Software, where I worked across React, Node.js, and MongoDB. That helped me land my first paid job. At iCIMS I grew from associate to software engineer over four years. I like learning new things, so I often volunteer for work I have not done before and figure it out as I go. I care about maintainable code and use manual checks when they matter and automated tests in CI to keep releases reliable. At iCIMS, my team was pretty quiet in meetings, so I stepped into the Scrum Master role to keep the team talking about the work by asking questions that got people to open up.',
  "I'm looking for a full-time role, ideally remote, at an enterprise company. I'm open to hybrid, onsite, or contract work when the fit is right. I'm targeting mid-level to senior engineer roles. I use tools like Cursor and GitHub Copilot day to day for coding, exploring ideas, and review. If you're hiring or recruiting, I'm happy to set up a call and talk through the role.",
] as const;

export const quickFacts = [
  { label: 'Role', value: 'Full Stack Software Engineer' },
  { label: 'Location', value: 'Plainsboro, NJ' },
  { label: 'Experience', value: '5+ years' },
  { label: 'Availability', value: 'Open to full-time and contract work' },
] as const;

export const skillGroups = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'SQL', 'JUnit'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'React Testing Library', 'Jest', 'WebDriver'],
  },
  {
    title: 'Cloud & delivery',
    items: ['AWS', 'Docker', 'CI/CD', 'Monitoring', 'Railway'],
  },
] as const;

export const education = [
  {
    period: '2020',
    degree: 'B.S. in Computer Science',
    school: 'Rutgers University',
  },
] as const;

export const experience = [
  {
    period: 'Apr 2021 – Dec 2025',
    role: 'Software Engineer',
    company: 'iCIMS',
    summary:
      'Full-stack engineer on enterprise recruiting software—mostly backend work in Java and Spring Boot, with regular React on the frontend. Shipped work on recruiting integrations and interviewer feedback improvements after customer escalations. Promoted from associate software engineer in 2022. Owned a microservice database migration—CloudFormation updates and coordination with infrastructure to move to a dedicated cluster. Served as Scrum Master for most of the time after promotion: led sprint ceremonies and grooming, mentored teammates, and collaborated with engineering teams in India while keeping my own delivery steady.',
  },
  {
    period: 'May 2020 – Jun 2021',
    role: 'Full Stack Developer',
    company: 'Life Skills Software',
    summary:
      'Full-stack developer at a startup. Designed and built a classroom management system giving administrators visibility into classroom activity, and an interactive onboarding flow for first-time users—both across React, Node.js, and MongoDB. Hands-on ownership from UI through API and data layer before my first full-time engineering role.',
  },
] as const;
