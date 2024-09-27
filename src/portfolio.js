const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://whydarren-6uom.github.io/mypage',
  title: 'HOME',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Darren Wang',
  role: 'Senior Student @ UC Berkeley',
  description:
    'Coder, Traveler, Activist. Work bridges technology and culture. With 14 countries explored, Antarctica is next. A relentless pursuit of discovery drives him forward.',
  resume: '../media/Darren_Wang_resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/whydarren6uom',
    github: 'https://github.com/whydarren-6uom',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Otterz.co',
    description:
      'A startup company dedicated to revolutionizing the way businesses manage data and information through AI-driven solutions',
    stack: ['RDF', 'FastAPI', 'MongoDB', 'Postman', 'OAuth2', 'AI'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.otterz.co/',
  },
  {
    name: 'CalCourse',
    description:
      'A WeChat API-based chatroom creator and finder connecting 3,000+ UC Berkeley students with the same classes.',
    stack: ['Front End', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/CalCourse-Dev/CalCourse_FrontEnd',
    livePreview: 'https://www.calcourse.com',
  },
  {
    name: 'Lifewith# Studio',
    description:
      'By teenagers, for teenagers. Expressed our thoughts on social issues, drew attention to our life and well-being. Bridging understanding between people.',
    stack: ['Directing', 'Video Editing', 'Social Issues'],
    sourceCode: '../media/Magazine_Publish.pdf',
    livePreview: 'https://youtu.be/3EeRkTZTci4?si=DXLuHAggHoK5AUqb',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  // Computer / Software-related skills

  // Coding languages
  'Python',
  'C/C++',
  'Java',
  'React.js',
  'SQL',
  'HTML/CSS',
  'TypeScript',
  'JavaScript',
  'R',
  'Rust',

  // Other computer/software skills
  'AWS',
  'Data Science',
  'Data Structures & Algorithms',
  'Git',
  'MySQL',
  'NumPy',
  'MATLAB',
  'Web Development',
  'Computer Vision',
  'Docker',
  'FastAPI',
  'Jupyter',
  'Linux/Unix',
  'Microsoft Azure',
  'MongoDB',
  'Node.js',
  'Pandas',
  'PowerShell',
  'TCP/IP',

  // Video / Media-related skills
  'Adobe Creative Suite',
  'Adobe Lightroom',
  'Adobe Photoshop',
  'Blender',
  'Adobe Premiere Pro',

  // Others
  'Word/Pages/Docs',
  'Excel/Numbers/Sheets',
  'PowerPoint/Keynote/Slides',
  'Quickbooks',
  'SolidWorks',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hdwang@berkeley.edu',
}

export { header, about, projects, skills, contact }
