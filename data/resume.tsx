import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Sudheer Bhati',
   initials: 'DV',
   url: 'https://portfoliosudheer.netlify.app/',
   location: 'Noida, India',
   locationLink: 'https://www.google.com/maps/place/miami',
   description:
    'Enthusiastic full-stack developer, creative problem solver, indie maker, data enthusiast, and passionate digital innovator.',
   summary:
    'I am a final-year Computer Science and Engineering student at Lovely Professional University, with a proven track record in building scalable and user-centric digital solutions. With hands-on experience in developing projects like Defend_X, a robust security platform, and Apna Coffee Shop, an online coffee platform, I specialize in full-stack development using React.js, Node.js, PHP, and MySQL.In addition to my technical projects, I gained valuable marketing insights during my internship at Sahajanand Laser Technology Ltd, contributing to digital marketing campaigns and competitor analysis. My certifications from Microsoft, Google, and Goldman Sachs further highlight my versatility across data analytics, project management, and software development.As a passionate developer and problem solver, I thrive on transforming innovative ideas into reality. Exploring new opportunities in web development and the data field, I aim to deliver impactful solutions that drive meaningful change. \n\n'
    + 'Creator of  [Conventional Emoji Commits](https://defend-x.netlify.app/) and [others]https://portfoliosudheer.netlify.app/).\n\n'
    + 'Dreaming up ideas and nurturing them to reality, especially in the realm of education, is where my passion lies.\n\n',
   avatarUrl: '/me.png',
   skills: [
      'React',
      'Js',
      'Git',
      'Github',
      'Node.js',
      'Php',
      'MySql',
      'MongoDb',
      'SQL',
      'CSS',
      'Express Js',
      'C++',
      'Power BI',
      'Tableau',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '/blog', icon: NotebookIcon, label: 'Blog' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 's4sudheerbhati2453.com',
      tel: '+123456789',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/sudheerbhati2453',
            icon: Icons.github,

            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sudheer-bhati-04ba6719b/',
            icon: Icons.linkedin,
            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://defend-x.netlify.app/',
            icon: Icons.x,
            navbar: true,
         },
         Youtube: {
            name: 'Youtube',
            url: 'https://defend-x.netlify.app/',
            icon: Icons.youtube,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,
            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'Skill Vertex',
         href: '',
         badges: [],
         location: 'Bengaluru, Karnataka',
         title: 'Full Stack Web Developer Intern',
         logoUrl: '/me.png',
         start: 'April 2022',
         end: 'June 2022',
         description:
             '• Developed responsive, cross-browser-compatible web pages using React.js, Node.js, HTML, CSS, and JavaScript.\n• Implemented dynamic features like form validation and interactive UI components to improve user experience.\n• Collaborated with the design team to translate wireframes into functional, branded web elements.\n• Utilized Git for version control to ensure seamless collaboration.',
     },
     {
         company: 'Sahajanand Laser Technology Ltd',
         href: '',
         badges: [],
         location: 'Ahmedabad, Gujarat',
         title: 'Marketing Intern',
         logoUrl: '/me.png',
         start: 'June 2023',
         end: 'July 2023',
         description:
             '• Conducted competitor analysis and market research to identify emerging trends, influencing strategic marketing decisions.\n• Collaborated on digital marketing campaigns, optimizing brand presence across social media platforms.\n• Contributed to marketing plan development and report compilation on market positioning.\n• Assisted in content creation and tracking engagement metrics to improve outreach.',
     },
     {
      company: 'Coding Gita',
      href: 'https://codinggita.com/',
      badges: [],
      location: '',
      title: 'Web Developer',
      logoUrl: '/me.png',
      start: 'Jan 2024',
      end: 'July 2024',
      description:
          '• Played a key role in developing the Coding Gita platform, focusing on responsive design and smooth navigation.\n• Leveraged technologies such as React.js and Node.js to create a dynamic and feature-rich user experience.\n• Optimized performance by implementing best practices in coding and debugging, ensuring reliability and speed.\n• Collaborated closely with the team to continuously enhance the platform, resulting in increased user engagement.',
  },
   ],
   education: [
      {
         school: 'Lovely Professional University, Punjab',
         degree: 'B.Tech',
         start: '2021',
         end: '2025',
      },
   ],
   projects: [
      {
         title: 'Defend_X',
         href: 'https://defend-x.netlify.app/',
         dates: 'Jan 2022 - Mar 2022',
         active: false,
         description:
             '• A security companion platform built using the MERN stack, designed to provide robust digital protection with advanced features and seamless user experience.',
         technologies: [
             'React.js',
             'Node.js',
             'MongoDB',
             'Bootstrap',
             'Responsive Design',
             'JavaScript',
         ],
         links: [
             {
                 type: 'Website',
                 href: 'https://defend-x.netlify.app/',
                 icon: <Icons.globe className="size-3" />,
             },
             {
                 type: 'Source',
                 href: 'https://github.com/sudheerbhati2453/defend_x',
                 icon: <Icons.github className="size-3" />,
             },
         ],
         image: '',
         video: '',
     },
     {
      title: 'Apna Zaika',
      href: 'https://apna-zaika.netlify.app/',
      dates: 'May 2023 - Present',
      active: true,
      description: '• Apna Zaika is a food delivery and restaurant listing website built with HTML, CSS, JavaScript, and Bootstrap. It allows users to explore local restaurants, browse menus, and place orders online. The site is fully responsive and optimized for seamless mobile and desktop experiences.',
      technologies: [
         'HTML',
         'CSS',
         'JavaScript',
         'Bootstrap',
      ],
      links: [
         {
            type: 'Website',
            href: 'https://apna-zaika.netlify.app/',
            icon: <Icons.globe className="size-3" />,
         },
         {
            type: 'Source',
            href: 'https://github.com/sudheerbhati2453/Apna-Zaika',
            icon: <Icons.github className="size-3" />,
         },
      ],
      image: '',
      video: 'https://github.com/yourgithub/apna-zaika',
   },
   {
      title: 'TeluInstitute - E-Learning Platform',
      href: 'https://telusinstitute.netlify.app/',
      dates: 'August 2023 - Present',
      active: true,
      description: '• TeluInstitute is an e-learning platform designed to offer online courses and tutorials for a wide range of subjects. Built with HTML, CSS, JavaScript, and Bootstrap, the platform provides a seamless user experience with course listings, interactive content, and responsive design for both desktop and mobile devices.',
      technologies: [
         'HTML',
         'CSS',
         'JavaScript',
         'Bootstrap',
         'Vite',
         'React js',
         'MongoDb',
         'Node js',
      ],
      links: [
         {
            type: 'Website',
            href: 'https://telusinstitute.netlify.app/',
            icon: <Icons.globe className="size-3" />,
         },
         {
            type: 'Source',
            href: '',
            icon: <Icons.github className="size-3" />,
         },
      ],
      image: '',
      video: 'https://telusinstitute.netlify.app/',
   },
      {
         title: 'More Projects',
         href: 'https://portfoliosudheer.netlify.app/',
         dates: '',
         active: true,
         description: 'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://portfoliosudheer.netlify.app/',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: 'https://portfoliosudheer.netlify.app/',
      },
   ],
   hackingEvents: [
      // {
      //    title: 'HackerOne Live Hacking Event',
      //    dates: 'June 14th - 16th, 2022',
      //    location: 'Las Vegas, Nevada',
      //    description:
      //   'Participated in a live hacking event, uncovering security vulnerabilities in various web applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
      //       },
      //    ],
      // },
      // {
      //    title: 'Bugcrowd LevelUp',
      //    dates: 'April 10th, 2021',
      //    location: 'Online',
      //    description:
      //   'Participated in a virtual event focused on enhancing the skills of bug bounty hunters.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////959/60MDxUgDxWgD5w6/yZx/yaCLxXgD3sJXxYAjyYQ/3poj+8+70gE7zeEDxWQD96+T1kGfyYxX1lnH0hFX72Mz3qIv70cPzczfyaiX5v6r+9/T/+vf4tJv2nXr0iV32nn1FGKDsAAAA5UlEQVR4AbWRR4KFIAxAY0uwR5mx1/tfcoRvGHT/3448IA2+TODxdmEUO6LkJRHJgerp0ozw3+eF78qYsKrqXCw3nmw1xQDwo2+pf8HRMZHqAHr3NB5AGE22qISCmRUaiZO4WdnLl0yWtavt39kGllXhLVcw1HI07DnJqeVqhc5+pFsrDy1yjkkVALGVlTR5y13b2IReq2kmBeX2t+wxJMSPbCIVddDERJitIsP4I6GZAzCfk/IWU+lLrmAjqXk4+ptmE6j1tO9kMnIHHmd+WSTUGqVHQaYkcAkPZlYO3uBF6AHf5Q/1ow5yOIAYvAAAAABJRU5ErkJggg==',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.bugcrowd.com/blog/how-to-succeed-in-bug-bounties-as-a-pentester/',
      //       },
      //    ],
      // },
      // {
      //    title: 'HackerOne h@cktivitycon',
      //    dates: 'September 14th - 16th, 2021',
      //    location: 'Online',
      //    description:
      //   'Participated in a virtual conference for the hacker community, uncovering various security vulnerabilities in web applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.hackerone.com/hackerone-community-blog/get-invited-how-live-hacking-event-invites-have-changed',
      //       },
      //    ],
      // },
      // {
      //    title: 'Bugcrowd Bug Bash',
      //    dates: 'March 23rd - 24th, 2021',
      //    location: 'San Francisco, California',
      //    description:
      //   'Participated in a Bug Bash event, uncovering security vulnerabilities in various applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////959/60MDxUgDxWgD5w6/yZx/yaCLxXgD3sJXxYAjyYQ/3poj+8+70gE7zeEDxWQD96+T1kGfyYxX1lnH0hFX72Mz3qIv70cPzczfyaiX5v6r+9/T/+vf4tJv2nXr0iV32nn1FGKDsAAAA5UlEQVR4AbWRR4KFIAxAY0uwR5mx1/tfcoRvGHT/3448IA2+TODxdmEUO6LkJRHJgerp0ozw3+eF78qYsKrqXCw3nmw1xQDwo2+pf8HRMZHqAHr3NB5AGE22qISCmRUaiZO4WdnLl0yWtavt39kGllXhLVcw1HI07DnJqeVqhc5+pFsrDy1yjkkVALGVlTR5y13b2IReq2kmBeX2t+wxJMSPbCIVddDERJitIsP4I6GZAzCfk/IWU+lLrmAjqXk4+ptmE6j1tO9kMnIHHmd+WSTUGqVHQaYkcAkPZlYO3uBF6AHf5Q/1ow5yOIAYvAAAAABJRU5ErkJggg==',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.bugcrowd.com/blog/how-to-succeed-in-bug-bounties-as-a-pentester/',
      //       },
      //    ],
      // },
      // {
      //    title: 'HackerOne h1-702',
      //    dates: 'August 3rd - 5th, 2020',
      //    location: 'Las Vegas, Nevada',
      //    description:
      //   'Participated in one of the largest live hacking events, uncovering security vulnerabilities in various web applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
      //       },
      //    ],
      // },
   ],
} as const
