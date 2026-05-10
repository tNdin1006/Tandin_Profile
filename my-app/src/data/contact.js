export const contactInfo = {
  personal: {
    email: 'sonam.zangmo@gcit.edu.bt',
    phone: '+975 17XX-XXXX',
    location: 'Gyalpozhing, Mongar, Bhutan',
    education: 'Gyalpozhing College of Information Technology',
    course: 'BSc Computer Science (Expected 2025)'
  },
  social: [
    {
      platform: 'GitHub',
      username: 'sonamzangmo',
      url: 'https://github.com/sonamzangmo',
      icon: 'github',
      color: '#333333'
    },
    {
      platform: 'LinkedIn',
      username: 'sonam-zangmo',
      url: 'https://linkedin.com/in/sonam-zangmo',
      icon: 'linkedin',
      color: '#0077B5'
    },
    {
      platform: 'Behance',
      username: 'sonamzangmo',
      url: 'https://behance.net/sonamzangmo',
      icon: 'behance',
      color: '#1769FF'
    },
    {
      platform: 'Dribbble',
      username: 'sonamzangmo',
      url: 'https://dribbble.com/sonamzangmo',
      icon: 'dribbble',
      color: '#EA4C89'
    }
  ],
  availability: {
    status: 'Available for opportunities',
    types: [
      'UX Design Internships',
      'Frontend Development Projects',
      'Freelance Design Work',
      'Collaborative Projects'
    ],
    responseTime: 'Within 24-48 hours',
    timezone: 'Bhutan Time (BTT) UTC+6'
  },
  interests: [
    'UX/UI Design',
    'Frontend Development',
    'AI & Machine Learning',
    'Photography',
    'Sustainable Design',
    'Education Technology',
    'Social Impact Projects'
  ]
};

export const formFields = {
  name: {
    label: 'Full Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your full name'
  },
  email: {
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'Enter your email address'
  },
  subject: {
    label: 'Subject',
    type: 'text',
    required: false,
    placeholder: 'What is this regarding?'
  },
  message: {
    label: 'Message',
    type: 'textarea',
    required: true,
    placeholder: 'Tell me about your project or inquiry...',
    rows: 6
  }
};

export const emailTemplates = {
  internship: {
    subject: 'Internship Opportunity Inquiry',
    body: `Hello Sonam,

I came across your portfolio and was impressed by your work. We have an internship opportunity at [Company Name] that I think would be a great fit for your skills in [Specific Skill].

Would you be available to discuss this further?

Best regards,
[Your Name]
[Your Position]
[Company Name]`
  },
  collaboration: {
    subject: 'Collaboration Proposal',
    body: `Hi Sonam,

I'm reaching out because I'm working on a project that aligns with your expertise in [Specific Area]. I believe your skills in [Specific Skill] would be valuable for our project.

Would you be interested in collaborating?

Looking forward to hearing from you.

Best,
[Your Name]
[Project/Company Name]`
  },
  freelance: {
    subject: 'Freelance Project Inquiry',
    body: `Dear Sonam,

We have a project requiring expertise in [Specific Skill] and think you might be the perfect fit based on your portfolio work.

The project involves [Brief Description] and we're looking for someone with your background in [Specific Area].

Let me know if you're available for freelance work.

Sincerely,
[Your Name]
[Company/Organization Name]`
  }
};