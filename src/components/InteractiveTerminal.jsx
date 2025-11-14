// Interactive terminal component with file system
'use client'

import { useState, useEffect, useRef } from 'react'
import { trackTerminalEvent } from '@/lib/analytics'

const fileSystem = {
  '/': {
    type: 'directory',
    contents: {
      'skills': { type: 'directory', contents: {} },
      'projects': { type: 'directory', contents: {} },
      'experience': { type: 'directory', contents: {} },
      'about.txt': { type: 'file', content: 'Full-Stack Developer | Robotics Engineer | Linux Enthusiast\n\nHi! I\'m Malek, a passionate developer who loves building innovative solutions.\nI specialize in web development, robotics, and AI/ML applications.\n\nFun fact: I use Arch Linux btw 🐧' },
      'explore_portfolio.sh': { 
        type: 'executable',
        content: '#!/bin/bash\necho "🚀 Opening portfolio in new tab..."\necho "Redirecting to /projects page"\nwindow.open("/projects", "_blank")'
      },
      'contact.sh': {
        type: 'executable', 
        content: '#!/bin/bash\necho "📧 Contact Information:"\necho "GitHub: https://github.com/malekhammoud/"\necho "LinkedIn: https://www.linkedin.com/in/malekhammoud/"\necho "Email: malek@malekhammoud.com"'
      }
    }
  },
  '/skills': {
    type: 'directory',
    contents: {
      'programming': { type: 'directory', contents: {} },
      'technologies': { type: 'directory', contents: {} },
      'languages.txt': { 
        type: 'file', 
        content: 'Programming Languages I Know:\n\n🐍 Python - 4+ years (My favorite for AI/ML and automation)\n🌐 JavaScript/TypeScript - 3+ years (Full-stack web development)\n☕ Java - 2+ years (Enterprise applications and robotics)\n⚡ C/C++ - 2+ years (Embedded systems and performance-critical apps)\n🐚 Bash - Daily use (Linux automation and scripting)\n\nAlways learning new languages and technologies!'
      }
    }
  },
  '/skills/programming': {
    type: 'directory',
    contents: {
      'python.txt': { 
        type: 'file', 
        content: '🐍 Python Expertise (4+ years)\n\nWhy I love Python:\n- Started learning in 2020 during the pandemic \n- Perfect for rapid prototyping and AI/ML\n- Beautiful, readable syntax\n- Amazing ecosystem (NumPy, Pandas, TensorFlow, etc.)\n\nProjects I\'ve built:\n- AI-powered posture detection system\n- Autonomous drone navigation algorithms\n- Web scraping and data analysis tools\n- Robotics control systems with ROS\n- Machine learning models for various applications\n\nFavorite libraries: FastAPI, OpenCV, TensorFlow, Pandas\nIDE: PyCharm, VS Code with Python extensions'
      },
      'javascript.txt': { 
        type: 'file', 
        content: '🌐 JavaScript/TypeScript (3+ years)\n\nMy web development journey:\n- Started with vanilla JS in 2021\n- Fell in love with React and Next.js\n- TypeScript made my code more robust\n- Now building full-stack applications\n\nFrameworks & Tools:\n✅ React/Next.js - Component-based architecture\n✅ Node.js/Express - Backend APIs\n✅ TypeScript - Type safety and better DX\n✅ Tailwind CSS - Utility-first styling\n✅ Prisma - Database ORM\n\nCurrent focus: Building scalable web applications' 
      },
      'linux.txt': { 
        type: 'file', 
        content: '🐧 Linux & System Administration\n\nMy Linux journey:\n- Started with Ubuntu in 2023\n- Moved to Arch Linux in 2025\n- Daily driver for development work\n- Love the customization and control\n\nDistros I\'ve used:\n🔸 Ubuntu - Great for beginners\n🔸 Debian - Rock solid for servers\n🔸 Arch Linux - Rolling release, bleeding edge\n🔸 CentOS/RHEL - Enterprise environments\n\nSkills:\n- Shell scripting (Bash, Zsh)\n- System configuration and optimization\n- Docker containerization\n- Server deployment and maintenance\n- Terminal-based workflow (vim, tmux, etc.)'
      }
    }
  },
  '/skills/technologies': {
    type: 'directory',
    contents: {
      'web.txt': { 
        type: 'file', 
        content: '🌐 Web Development Stack\n\nFrontend:\n- React/Next.js - Modern component architecture\n- TypeScript - Type-safe development\n- Tailwind CSS - Utility-first styling\n- Framer Motion - Smooth animations\n\nBackend:\n- Node.js/Express - JavaScript runtime\n- FastAPI - Python web framework\n- PostgreSQL - Relational database\n- MongoDB - NoSQL database\n- Redis - Caching and sessions\n\nTools & DevOps:\n- Git/GitHub - Version control\n- Docker - Containerization\n- AWS/Vercel - Cloud deployment\n- Nginx - Web server\n- CI/CD pipelines' 
      },
      'robotics.txt': { 
        type: 'file', 
        content: '🤖 Robotics & Embedded Systems\n\nHardware Platforms:\n- Raspberry Pi - Single-board computer projects\n- Arduino - Microcontroller programming\n- Pixhawk - Flight controller for drones\n- ESP32 - IoT and wireless projects\n\nSoftware & Frameworks:\n- ROS (Robot Operating System)\n- OpenCV - Computer vision\n- PID control algorithms\n- Sensor fusion and Kalman filters\n- Autonomous navigation systems\n\nProjects:\n🚁 Autonomous drone with GPS navigation\n🤖 Walking bipedal robot\n🎯 Object detection and tracking systems\n📡 IoT sensor networks\n\nSpecialties: Computer vision, autonomous systems, sensor integration' 
      },
      'ai_ml.txt': { 
        type: 'file', 
        content: '🧠 Artificial Intelligence & Machine Learning\n\nFrameworks & Libraries:\n- TensorFlow/Keras - Deep learning models\n- PyTorch - Research and experimentation\n- OpenCV - Computer vision applications\n- Scikit-learn - Traditional ML algorithms\n- Pandas/NumPy - Data manipulation\n\nSpecializations:\n🔍 Computer Vision - Object detection, tracking\n🎯 Classification - Image and text classification\n📊 Data Analysis - Statistical modeling\n🤖 Robotics AI - Autonomous decision making\n\nCurrent Research:\n- Real-time pose estimation\n- Autonomous navigation algorithms\n- Environmental monitoring with AI\n- Human-robot interaction systems' 
      }
    }
  },
  '/projects': {
    type: 'directory',
    contents: {
      'web_development': { type: 'directory', contents: {} },
      'robotics': { type: 'directory', contents: {} },
      'ai_projects': { type: 'directory', contents: {} },
      'games': { type: 'directory', contents: {} },
      'open_source': { type: 'directory', contents: {} },
      'README.txt': { 
        type: 'file', 
        content: 'Welcome to my projects directory! 🚀\n\nHere you\'ll find information about various projects I\'ve worked on:\n\n📁 web_development/ - Full-stack web applications\n📁 robotics/ - Hardware and autonomous systems\n📁 ai_projects/ - Machine learning and AI applications\n📁 open_source/ - Open source contributions\n\nUse \'ls\' to explore each directory\nUse \'cat filename.txt\' to read project details\nUse \'./project_name.sh\' to view live demos (where available)\n\nEnjoy exploring! 🔍' 
      }
    }
  },
  '/projects/web_development': {
    type: 'directory',
    contents: {
      'personal_website.txt': { 
        type: 'file', 
        content: '🌐 Personal Portfolio Website\n\nTech Stack:\n- Next.js 14 with App Router\n- TypeScript for type safety\n- Tailwind CSS for styling\n- MDX for blog articles\n- Framer Motion for animations\n\nFeatures:\n✅ Responsive design\n✅ Dark/light mode toggle\n✅ Interactive terminal (you\'re using it now!)\n✅ Project showcase\n✅ Blog with MDX support\n✅ Newsletter subscription\n\nDeployment: Vercel\nRepo: GitHub (check my profile)\n\nThis very website showcases modern web development practices!' 
      },
      'ecosphere.txt': {
        type: 'file',
        content: '🌱 EcoSphere - Conservation Mission Control\n\nDescription:\nAn all-in-one platform designed to power conservation teams globally\nIdentify species with photo recognition, communicate instantly through team chat, and collaborate seamlessly\n\nTech Stack:\n- React/Next.js frontend\n- Node.js backend API\n- AI-powered species recognition\n- Real-time team collaboration\n- Cloud deployment\n\nKey Features:\n📸 Photo recognition for species identification\n💬 Instant team communication\n🌍 Global conservation team support\n🤝 Seamless collaboration tools\n🎯 Mission control for ecosystem protection\n\nProject Type: 2025 SolutionsHacks Team Project\nStatus: Live at eco-sphere.co\nImpact: Supporting conservation teams worldwide'
      },
      'central_tech_tribe.txt': {
        type: 'file',
        content: '🏫 Central Tech Tribe - School Community Platform\n\nDescription:\nReact-based website with MySQL backend built as a programming club project\nServes the school community and showcases full-stack development skills\n\nTech Stack:\n- React frontend\n- MySQL database\n- Node.js/Express backend\n- Responsive design\n- Club project collaboration\n\nFeatures:\n🏫 School community focus\n👥 Programming club project\n📱 Full-stack development showcase\n🔧 MySQL database integration\n⚡ Modern React architecture\n\nStatus: Currently in development\nDeployment: central-server-theta.vercel.app\nType: Collaborative programming club project'
      },
      'ecoscout.txt': {
        type: 'file',
        content: '🌍 EcoScout - Environmental Sustainability App\n\nDescription:\nHack49 hackathon app that lets users report litter, access interactive dashboard, and navigate using GPS\nPromotes environmental sustainability through community engagement\n\nTech Stack:\n- Mobile-first web application\n- GPS integration\n- Interactive dashboard\n- Real-time reporting system\n- Community engagement features\n\nFeatures:\n📍 GPS-based litter reporting\n📊 Interactive environmental dashboard\n🗺️ Location-based navigation\n👥 Community engagement tools\n♻️ Environmental sustainability focus\n📱 Mobile-optimized interface\n\nEvent: Hack49 Hackathon Project\nRepo: GitHub - mhammoud-os/EcoScout\nImpact: Community-driven environmental monitoring'
      },
      'reminder_app.txt': {
        type: 'file',
        content: '⏰ Focus Reminder App - Productivity Tool\n\nDescription:\nElectron-based desktop application that tracks focus days, logs progress, uploads documents, and provides productivity statistics\nDesigned to help users maintain consistent focus and productivity\n\nTech Stack:\n- Electron framework\n- Desktop application\n- File upload system\n- Progress tracking\n- Statistics dashboard\n\nFeatures:\n📅 Focus day tracking\n📊 Progress logging and analytics\n📁 Document upload capability\n📈 Productivity statistics\n🎯 Consistent focus maintenance\n💻 Cross-platform desktop app\n\nDownload: Available on GitHub\nRepo: mhammoud-os/Project-Reminder\nType: Personal productivity tool'
      },
      'offshape_website.txt': {
        type: 'file',
        content: '🤖 OffShape Robotics Team Website\n\nDescription:\nCreated the official website for my robotics team through collaborative effort\nShowcases team projects, achievements, and robotics innovations\n\nTech Stack:\n- Modern web development\n- Team collaboration\n- Responsive design\n- Project showcase\n- Robotics focus\n\nFeatures:\n🤖 Robotics team representation\n👥 Collaborative development (3-person team)\n🏆 Project and achievement showcase\n📱 Mobile-responsive design\n⚡ Modern web technologies\n🌐 Professional team presence\n\nCollaboration: 3-person development team\nDeployment: offshape.vercel.app\nFocus: Robotics team promotion and showcase'
      },
      'linux_exploration.txt': {
        type: 'file',
        content: '🐧 Linux Exploration Journey\n\nDescription:\nChronicles my journey from using a Chromebook without GUI to dual-booting Ubuntu on my Acer laptop\nThis experience has significantly shaped my programming environment and development workflow\n\nTechnical Journey:\n- Started: Chromebook without GUI\n- Progression: Dual-boot Ubuntu setup\n- Current: Arch Linux daily driver\n- Impact: Shaped entire programming environment\n\nLearning Outcomes:\n🐧 Deep Linux system understanding\n⚙️ System configuration mastery\n💻 Terminal-based workflow\n🔧 Hardware compatibility troubleshooting\n📚 Open-source software appreciation\n🚀 Development environment optimization\n\nImpact: Fundamental influence on programming approach\nCurrent Setup: Arch Linux (btw I use Arch)\nSkills Gained: System administration, shell scripting, package management'
      },
      'demo.sh': {
        type: 'executable',
        content: '#!/bin/bash\necho "🌐 Opening web development portfolio..."\necho "Redirecting to projects page"\nwindow.open("/projects", "_blank")'
      }
    }
  },
  '/projects/robotics': {
    type: 'directory',
    contents: {
      'greenguardian.txt': {
        type: 'file',
        content: '🌱 GreenGuardian - Autonomous Weed Detection Robot\n\nProject Overview:\nAutonomous robot that uses 3D printing, image processing, and obstacle avoidance to precisely spray weeds\nMinimizes herbicide use and reduces environmental impact\n\nHardware Components:\n- 3D printed chassis and components\n- Computer vision camera system\n- Precision spray mechanism\n- Obstacle avoidance sensors\n- Autonomous navigation system\n\nTechnical Features:\n🎯 Precise weed targeting\n🚧 Obstacle avoidance\n💧 Minimized herbicide usage\n🤖 Fully autonomous operation\n📸 Advanced image processing\n♻️ Environmental impact reduction\n\nAchievements:\n🥉 CWSF Bronze Medal (2024)\n🥇 TVSEF Gold Medal (2024)\n🎯 Western Research Imagination Prize (2024)\n\nProject Board: 2024 CWSF Official Project\nImpact: Sustainable agriculture innovation'
      },
      'autonomous_litter_detection.txt': {
        type: 'file',
        content: '🚁 Autonomous Litter Detection & Mapping System\n\nProject Overview:\nBuilding a low-cost, proof-of-concept autonomous system for detecting and mapping litter using drones\nAims to enhance environmental monitoring and community engagement\n\nTechnical Approach:\n- Drone-based autonomous system\n- Computer vision for litter detection\n- Mapping and GPS integration\n- Cost-effective proof-of-concept\n- Environmental monitoring focus\n\nKey Features:\n🎯 Automated litter detection\n🗺️ Real-time mapping capabilities\n💰 Low-cost implementation\n🌍 Environmental monitoring\n👥 Community engagement tools\n📊 Data collection and analysis\n\nProject Type: 2025 TKS Focus Project\nStatus: Active development\nDocumentation: TKS Notion workspace\nGoal: Scalable environmental monitoring solution'
      },
      'maze_solving_robot.txt': {
        type: 'file',
        content: '🧩 Maze-Solving Robot Car - Award-Winning TVSEF Project\n\nProject Overview:\n2023 award-winning TVSEF project that autonomously navigates a maze\nUses pathfinding algorithms and obstacle avoidance to reach its destination\n\nTechnical Implementation:\n- Autonomous maze navigation\n- Pathfinding algorithms\n- Obstacle detection and avoidance\n- Real-time decision making\n- Graph theory application\n\nAlgorithms & Features:\n🧠 Graph theory-based pathfinding\n🚧 Dynamic obstacle avoidance\n🎯 Destination-oriented navigation\n⚡ Real-time path optimization\n📊 Performance data logging\n🏆 Award-winning design\n\nAchievements:\n⚙️ Engineers Choice Award (2023)\n🥈 TVSEF Silver Medal (2023)\n📚 Real-world graph theory application\n\nRepo: Real-World-Graph-Theory-Simulation\nType: Educational robotics project\nImpact: Demonstrates practical algorithm implementation'
      },
      'posturepal.txt': {
        type: 'file',
        content: '💦 PosturePal - Posture Correction Device\n\nProject Overview:\nInnovative device that sprays you if you have bad posture\nDesigned to improve posture through instant physical feedback\nBuilt in collaboration with João Pedro Santos\n\nTechnical Features:\n- Real-time posture monitoring\n- Instant feedback mechanism\n- Spray-based correction system\n- Computer vision integration\n- Behavioral modification approach\n\nKey Innovations:\n📹 Real-time posture detection\n💦 Physical feedback system\n⚡ Instant response mechanism\n🎯 Behavioral conditioning\n🤝 Collaborative development\n📊 Posture improvement tracking\n\nAchievements:\n🥇 TKS Global Explore Hackathon Winner (Dec 2024)\n🏆 Top 4 out of ~200 teams\n👥 Built with João Pedro Santos\n🌟 Innovative approach to health tech\n\nRepo: joaoP-santos/posturepal\nType: Health technology innovation\nImpact: Creative solution to common health problem'
      },
      'demo_videos.sh': {
        type: 'executable',
        content: '#!/bin/bash\necho "🎥 Loading robotics demo videos..."\necho "Opening project gallery..."\nwindow.open("/projects#robotics", "_blank")'
      }
    }
  },
  '/projects/ai_projects': {
    type: 'directory',
    contents: {
      'README.txt': {
        type: 'file',
        content: 'AI & Machine Learning Projects 🧠\n\nThis directory contains my artificial intelligence and machine learning projects,\nfocusing on computer vision, robotics AI, and practical applications.\n\nProjects include:\n- PosturePal AI detection system\n- GreenGuardian weed recognition\n- Autonomous litter detection algorithms\n- Computer vision applications\n\nExplore individual project files for technical details!'
      },
      'computer_vision.txt': {
        type: 'file',
        content: '👁️ Computer Vision Applications\n\nOverview:\nCollection of computer vision projects applying AI to real-world problems\nFocuses on practical applications in robotics and environmental monitoring\n\nKey Projects:\n🌱 GreenGuardian weed detection\n💦 PosturePal posture analysis\n🗑️ Autonomous litter recognition\n🤖 Robotics vision systems\n\nTechnologies Used:\n- OpenCV for image processing\n- TensorFlow/Keras for deep learning\n- MediaPipe for pose estimation\n- Python for algorithm development\n- Real-time processing optimization\n\nApplications:\n🔍 Object detection and classification\n📊 Real-time analysis systems\n🎯 Precision targeting for robotics\n🌍 Environmental monitoring\n📈 Performance optimization\n\nImpact: Bridging AI research with practical robotics applications'
      }
    }
  },
  '/projects/games': {
    type: 'directory',
    contents: {
      'reconnect.txt': {
        type: 'file',
        content: '🎮 Reconnect - Top-Down Shooter Game\n\nGame Overview:\nTop-down shooter where players collect parts to fix a broken computer circuit while avoiding enemies\nCombines action gameplay with problem-solving mechanics\n\nGameplay Features:\n- Top-down perspective action\n- Circuit repair objectives\n- Enemy avoidance mechanics\n- Part collection system\n- Electronic theme integration\n\nTechnical Details:\n🎯 2D game development\n⚡ Real-time enemy AI\n🔧 Circuit assembly mechanics\n🎨 Custom sprite graphics\n🎵 Sound design integration\n⌨️ Responsive controls\n\nDevelopment:\n- Solo game development project\n- Custom game engine/framework\n- Original art and design\n- Iterative gameplay testing\n\nRepo: GitHub - malekhammoud/Reconnect\nType: Independent game development\nGenre: Action/Puzzle hybrid'
      },
      'java_platformer.txt': {
        type: 'file',
        content: '☕ 1v1 Platformer Game - Java Collaborative Project\n\nProject Overview:\nGrade 11 Java collaborative project where players compete by landing on each other\nFeatures collision handling, keyboard input, and integrated intro screen\n\nGame Mechanics:\n- 1v1 competitive gameplay\n- Platform-based movement\n- Landing-based win conditions\n- Real-time player interaction\n- Physics-based collisions\n\nTechnical Features:\n⌨️ Keyboard input handling\n💥 Collision detection system\n🎮 Two-player controls\n🖥️ Integrated intro screen\n🎯 Win condition logic\n📱 Java Swing interface\n\nDevelopment Details:\n👥 Collaborative Grade 11 project\n☕ Pure Java implementation\n🎨 Custom graphics and UI\n🔄 Game loop optimization\n🏫 Educational project focus\n\nRepo: GitHub - mhammoud-os/JavaProject\nType: Academic collaborative project\nLanguage: Java with Swing'
      }
    }
  },
  '/experience': {
    type: 'directory',
    contents: {
      'work_history.txt': {
        type: 'file',
        content: '💼 Professional Experience\n\n🎮 Playtoon - Software Engineer (Mar 2025 – Aug 2025)\n- Building a platform that reimagines how stories are created and experienced\n- Working with a cool startup building innovative solutions\n- Full-stack development for next-generation storytelling platform\n- Project Setup: Initialized the Playtoon codebase with Git version control and deployed placeholder landing page content\n\n🏢 SIMMAD - Software Engineer (Oct 2024 - Feb 2025)\n- Full-stack web development with React/Next.js\n- Backend API development with Node.js\n- Database design and optimization\n- Collaborated with cross-functional teams\n- Delivered high-quality software solutions\n\n🏗️ BRYCK - Software Engineer (Sep 2024 - Dec 2024)\n- Developed scalable web applications\n- Implemented responsive user interfaces\n- Optimized application performance\n- Code reviews and technical mentoring\n\n📚 London Public Library - Tech Tutor (Mar 2023 - Aug 2023)\n- Taught programming fundamentals to beginners\n- Created educational content and tutorials\n- Mentored students in web development\n- Organized coding workshops and events\n- Improved digital literacy in the community'
      },
      'education.txt': {
        type: 'file',
        content: '🎓 Education & Learning\n\n🏫 High School Studies:\n- London Central Secondary School\n- Focus on STEM and Computer Science\n- Award of Excellence for 90%+ average\n- Active in programming clubs and robotics teams\n\n📜 Certifications & Programs:\n- The Knowledge Society (TKS) - Innovation Program\n- Canada-Wide Science Fair participant (CWSF 2024)\n- Thames Valley Science & Engineering Fair winner\n- CCC Junior Student Honour Roll (CEMC)\n\n🛠️ Self-Directed Learning:\n- Open source contributions\n- Personal projects and experiments\n- Technical content creation\n- Community involvement and networking\n- Continuous learning mindset\n\n📚 Current Learning:\n- Advanced robotics and AI applications\n- Cloud architecture and deployment\n- Emerging web technologies\n- Entrepreneurship and startup development\n\n🌟 Learning Philosophy:\nBelieve in learning by doing - every project teaches something new!\nFrom Chromebook without GUI to Arch Linux power user 🐧'
      },
      'achievements.txt': {
        type: 'file',
        content: '🏆 Honors & Awards\n\n🥇 TKS Global Explore Hackathon Winner (Dec 2024)\n- Associated with The Knowledge Society (TKS)\n- Achieved Top 4 out of approximately 200 teams\n- Created PosturePal: A device that sprays you for bad posture\n- Designed to improve posture through instant feedback\n- Built in collaboration with João Pedro Santos\n\n🥉 CWSF Bronze Medalist (May 2024)\n- Issued by Youth Science Canada\n- Achieved bronze at Canada-Wide Science Fair\n- Project: GreenGuardian autonomous weed detection system\n- National-level recognition for scientific innovation\n\n🥇 Thames Valley Science & Engineering Fair: Gold Medal (Mar 2024)\n- Issued by TVSEF\n- Awarded to top Science & Engineering projects at the fair\n- Recognition for excellence in scientific research\n\n🎯 Western Research Imagination Prize (Mar 2024)\n- Issued by TVSEF\n- Recognizes most imaginative work in concept and implementation\n- Demonstrates creativity and innovative thinking\n\n⚙️ Engineers Choice Award (Mar 2023)\n- Issued by TVSEF\n- Project demonstrating excellence in Engineering\n- Selected by professional engineers for technical merit\n\n🥈 Thames Valley Science & Engineering Fair: Silver Medal (Mar 2023)\n- Issued by TVSEF\n- Awarded to top Science & Engineering projects\n- Recognition for outstanding scientific achievement\n\n📚 Award of Excellence (Jan 2023)\n- Issued by London Central Secondary School\n- Awarded to students with average above 90%\n- Academic excellence recognition\n\n🧮 CCC Junior Student Honour Roll (Jan 2023)\n- Issued by CEMC (Centre for Education in Mathematics and Computing)\n- Recognition among 5000 participating students\n- Excellence in mathematical competition\n\n🌟 Career Impact:\n- Multiple science fair victories leading to CWSF representation\n- Hackathon success demonstrating collaborative innovation\n- Academic excellence maintaining 90%+ average\n- Recognition by professional engineers and mathematicians'
      }
    }
  }
}

export function InteractiveTerminal({ isOpen, onClose }) {
  const [currentPath, setCurrentPath] = useState('/')
  const [commandHistory, setCommandHistory] = useState([
    { type: 'output', content: '🚀 Welcome to Malek\'s Interactive Terminal! 🐧' },
    { type: 'output', content: 'Type "help" for available commands or "ls" to explore' },
    { type: 'output', content: 'Tip: Try "cat about.txt" or "./explore_portfolio.sh"' },
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const [inputHistory, setInputHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  // Debug log to see if component is rendering
  useEffect(() => {
    console.log('InteractiveTerminal isOpen:', isOpen)
  }, [isOpen])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
    
    if (terminalRef.current) {
      terminalRef.current.addEventListener('click', handleClick)
      return () => {
        terminalRef.current?.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const getCurrentDirectory = () => {
    const parts = currentPath.split('/').filter(Boolean)
    let current = fileSystem['/']
    
    for (const part of parts) {
      if (current.contents && current.contents[part]) {
        current = current.contents[part]
      } else {
        return null
      }
    }
    return current
  }

  const resolvePath = (path) => {
    if (path.startsWith('/')) {
      return path
    }
    
    const resolved = currentPath === '/' ? `/${path}` : `${currentPath}/${path}`
    return resolved.replace(/\/+/g, '/')
  }

  // Get all files and directories recursively from a given path
  const getAllFilesRecursively = (startPath = '/') => {
    const allItems = []

    const traverse = (path, relativePath = '') => {
      const dir = getCurrentDirectoryFromPath(path)
      if (!dir || dir.type !== 'directory') return

      Object.entries(dir.contents).forEach(([name, item]) => {
        const fullRelativePath = relativePath ? `${relativePath}/${name}` : name
        const fullAbsolutePath = path === '/' ? `/${name}` : `${path}/${name}`

        if (item.type === 'directory') {
          allItems.push({
            name: fullRelativePath + '/',
            type: 'directory',
            path: fullAbsolutePath
          })
          // Recursively traverse subdirectories
          traverse(fullAbsolutePath, fullRelativePath)
        } else {
          allItems.push({
            name: fullRelativePath,
            type: item.type,
            path: fullAbsolutePath
          })
        }
      })
    }

    traverse(startPath)
    return allItems
  }

  // Get available autocomplete options for current directory
  const getAutocompleteOptions = (command, currentArg) => {
    const cmd = command.toLowerCase()
    const currentDir = getCurrentDirectory()

    console.log('Current directory:', currentDir)
    console.log('Current path:', currentPath)

    if (!currentDir || currentDir.type !== 'directory') return []

    const options = []

    // If no command yet, suggest commands
    if (!command || command === currentArg) {
      const commands = ['help', 'ls', 'cat', 'cd', 'pwd', 'clear', 'exit']
      return commands.filter(c => c.toLowerCase().startsWith(currentArg.toLowerCase()))
    }

    // Handle executable script autocomplete (./script.sh)
    if (currentArg.startsWith('./')) {
      const scriptPart = currentArg.slice(2) // Remove './'
      console.log('Looking for scripts starting with:', scriptPart)
      console.log('Available files in current directory:', Object.entries(currentDir.contents))

      Object.entries(currentDir.contents).forEach(([name, item]) => {
        console.log(`Checking file: ${name}, type: ${item.type}, starts with "${scriptPart}":`, name.toLowerCase().startsWith(scriptPart.toLowerCase()))
        if (item.type === 'executable' && name.toLowerCase().startsWith(scriptPart.toLowerCase())) {
          options.push('./' + name)
        }
      })

      console.log('Script autocomplete options found:', options)
      return options.sort()
    }

    // Handle path-based commands
    if (['cat', 'ls', 'cd'].includes(cmd)) {
      // Parse the current argument to see if it contains a path
      const pathParts = currentArg.split('/')
      const isAbsolute = currentArg.startsWith('/')
      const partialName = pathParts[pathParts.length - 1]
      const pathPrefix = pathParts.slice(0, -1).join('/')

      let targetDir = currentDir
      let searchPath = currentPath

      // Navigate to the target directory if path contains directories
      if (pathParts.length > 1) {
        const targetPath = isAbsolute
          ? '/' + pathParts.slice(1, -1).join('/')
          : (currentPath === '/' ? '/' : currentPath) + '/' + pathParts.slice(0, -1).join('/')

        targetDir = getCurrentDirectoryFromPath(targetPath.replace(/\/+/g, '/'))
        searchPath = targetPath.replace(/\/+/g, '/')
        if (!targetDir) return []
      }

      // Only get direct children of target directory, not recursive
      Object.entries(targetDir.contents).forEach(([name, item]) => {
        if (name.toLowerCase().startsWith(partialName.toLowerCase())) {
          const fullPath = pathPrefix ? `${pathPrefix}/${name}` : name

          if (cmd === 'cd' && item.type === 'directory') {
            options.push(fullPath + '/')
          } else if (cmd === 'cat' && (item.type === 'file' || item.type === 'executable')) {
            options.push(fullPath)
          } else if (cmd === 'ls') {
            options.push(item.type === 'directory' ? fullPath + '/' : fullPath)
          }
        }
      })

      // For cd, also suggest .. for parent directory
      if (cmd === 'cd' && '..'.startsWith(partialName.toLowerCase())) {
        const parentPath = pathPrefix ? `${pathPrefix}/..` : '..'
        if (!options.includes(parentPath)) {
          options.push(parentPath)
        }
      }

      // Remove duplicates and sort
      return [...new Set(options)].sort()
    }

    return options
  }

  // Handle autocomplete
  const handleAutocomplete = () => {
    const trimmedCommand = currentCommand.trim()

    // Special case for ./ commands - treat the whole thing as one argument
    if (trimmedCommand.startsWith('./')) {
      console.log('Detected ./ command:', trimmedCommand)
      const options = getAutocompleteOptions('', trimmedCommand)
      console.log('Options found:', options)

      if (options.length === 1) {
        // Single match - complete it
        setCurrentCommand(options[0])
      } else if (options.length > 1) {
        // Multiple matches - show them
        setCommandHistory(prev => [...prev, {
          type: 'command',
          content: `$ ${currentCommand}`
        }, {
          type: 'output',
          content: options.join('  ')
        }])
      }
      return
    }

    // Regular command parsing
    const args = trimmedCommand.split(' ')
    const command = args[0] || ''
    const currentArg = args[args.length - 1] || ''

    console.log('Autocomplete debug:', { command, currentArg, args })

    const options = getAutocompleteOptions(command, currentArg)

    console.log('Autocomplete options:', options)

    if (options.length === 1) {
      // Single match - complete it
      const newArgs = [...args]
      newArgs[newArgs.length - 1] = options[0]
      setCurrentCommand(newArgs.join(' '))
    } else if (options.length > 1) {
      // Multiple matches - show them
      setCommandHistory(prev => [...prev, {
        type: 'command',
        content: `$ ${currentCommand}`
      }, {
        type: 'output',
        content: options.join('  ')
      }])
    }
  }

  const executeCommand = (command) => {
    const args = command.trim().split(' ')
    const cmd = args[0].toLowerCase()
    
    // Track command execution
    if (command.trim()) {
      trackTerminalEvent.commandExecuted(command.trim())
    }

    // Add command to input history
    if (command.trim()) {
      setInputHistory(prev => {
        const newHistory = [command.trim(), ...prev.filter(c => c !== command.trim())]
        return newHistory.slice(0, 50) // Keep last 50 commands
      })
      setHistoryIndex(-1)
    }

    setCommandHistory(prev => [
      ...prev,
      { type: 'command', content: `$ ${command}` }
    ])

    switch (cmd) {
      case 'help':
        setCommandHistory(prev => [...prev, {
          type: 'output',
          content: `Available commands:
📁 ls <directory>     - List directory contents
📖 cat <file>         - Display file contents  
📂 cd <directory>     - Change directory
🏃 ./<script.sh>      - Execute shell script
📍 pwd               - Show current directory
🧹 clear             - Clear terminal
🚪 exit              - Close terminal
❓ help              - Show this help message

Navigation:
⬆️ UP ARROW          - Previous command
⬇️ DOWN ARROW        - Next command  
⭐ TAB               - Autocomplete files/commands
`
        }])
        break

      case 'exit':
      case 'quit':
        onClose()
        break

      case 'ls':
        const lsPath = args[1] ? resolvePath(args[1]) : currentPath
        const lsDir = getCurrentDirectoryFromPath(lsPath)
        
        if (!lsDir || lsDir.type !== 'directory') {
          setCommandHistory(prev => [...prev, {
            type: 'error',
            content: `ls: cannot access '${args[1] || currentPath}': No such directory`
          }])
          return
        }

        const items = Object.entries(lsDir.contents).map(([name, item]) => {
          if (item.type === 'directory') return `📁 ${name}/`
          if (item.type === 'executable') return `🔥 ${name}`
          return `📄 ${name}`
        }).join('\n')
        
        setCommandHistory(prev => [...prev, {
          type: 'output',
          content: items || 'Empty directory'
        }])
        break

      case 'cat':
        if (!args[1]) {
          setCommandHistory(prev => [...prev, {
            type: 'error',
            content: 'cat: missing file operand'
          }])
          return
        }

        const catPath = resolvePath(args[1])
        const catFile = getFileFromPath(catPath)
        
        if (!catFile) {
          setCommandHistory(prev => [...prev, {
            type: 'error',
            content: `cat: ${args[1]}: No such file`
          }])
          return
        }

        if (catFile.type !== 'file') {
          setCommandHistory(prev => [...prev, {
            type: 'error',
            content: `cat: ${args[1]}: Is a directory`
          }])
          return
        }

        setCommandHistory(prev => [...prev, {
          type: 'output',
          content: catFile.content
        }])
        break

      case 'cd':
        let cdPath = args[1] ? resolvePath(args[1]) : '/'

        // Handle .. (parent directory) specifically
        if (args[1] === '..') {
          const pathParts = currentPath.split('/').filter(Boolean)
          if (pathParts.length > 0) {
            pathParts.pop()
            cdPath = '/' + pathParts.join('/')
          } else {
            cdPath = '/'
          }
        }

        const cdDir = getCurrentDirectoryFromPath(cdPath)
        
        if (!cdDir || cdDir.type !== 'directory') {
          setCommandHistory(prev => [...prev, {
            type: 'error',
            content: `cd: ${args[1]}: No such directory`
          }])
          return
        }

        setCurrentPath(cdPath)
        break

      case 'pwd':
        setCommandHistory(prev => [...prev, {
          type: 'output',
          content: currentPath
        }])
        break

      case 'clear':
        setCommandHistory([])
        break

      default:
        if (command.startsWith('./') && command.endsWith('.sh')) {
          const scriptName = command.slice(2)
          const scriptPath = resolvePath(scriptName)
          const script = getFileFromPath(scriptPath)
          
          if (!script || script.type !== 'executable') {
            setCommandHistory(prev => [...prev, {
              type: 'error',
              content: `bash: ${scriptName}: No such file or directory`
            }])
            return
          }

          // Execute the script content
          if (script.content.includes('window.open')) {
            const url = script.content.match(/window\.open\("([^"]+)"/)?.[1]
            if (url) {
              window.open(url, '_blank')
              setCommandHistory(prev => [...prev, {
                type: 'output',
                content: '🚀 Opening in new tab...'
              }])
            }
          } else {
            // Show script output
            const lines = script.content.split('\n').filter(line => 
              line.startsWith('echo') && !line.includes('window.open')
            )
            const output = lines.map(line => 
              line.replace(/^echo\s+"?([^"]*)"?/, '$1')
            ).join('\n')
            
            setCommandHistory(prev => [...prev, {
              type: 'output',
              content: output
            }])
          }
        } else {
          setCommandHistory(prev => [...prev, {
            type: 'error',
            content: `Command not found: ${cmd}. Type 'help' for available commands.`
          }])
        }
    }
  }

  const getCurrentDirectoryFromPath = (path) => {
    const parts = path.split('/').filter(Boolean)
    let current = fileSystem['/']
    
    for (const part of parts) {
      if (current.contents && current.contents[part] && current.contents[part].type === 'directory') {
        const fullPath = '/' + parts.slice(0, parts.indexOf(part) + 1).join('/')
        current = fileSystem[fullPath] || current.contents[part]
      } else {
        return null
      }
    }
    return current
  }

  const getFileFromPath = (path) => {
    const parts = path.split('/').filter(Boolean)
    const fileName = parts.pop()
    const dirPath = '/' + parts.join('/')
    
    let current = fileSystem['/']
    if (dirPath !== '/') {
      current = getCurrentDirectoryFromPath(dirPath)
    }
    
    return current?.contents?.[fileName] || null
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (currentCommand.trim()) {
        executeCommand(currentCommand)
        setCurrentCommand('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      handleAutocomplete()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (inputHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, inputHistory.length - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(inputHistory[newIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(inputHistory[newIndex] || '')
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentCommand('')
      }
    }
  }

  const getPrompt = () => {
    const shortPath = currentPath === '/' ? '~' : `~${currentPath}`
    return `malek@dev:${shortPath}$`
  }

  if (!isOpen) {
    console.log('Terminal not open, returning null')
    return null
  }

  console.log('Terminal is open, rendering modal')

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up"
      style={{ position: 'fixed', zIndex: 9999 }}
    >
      <div className="relative w-full h-[350px] sm:h-[400px] overflow-hidden bg-black shadow-2xl border-t border-zinc-600">
        {/* Terminal header - more authentic Linux style */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-600 bg-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300 font-mono text-sm">malek@dev: ~</span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors px-2 py-1 hover:bg-zinc-700 rounded text-sm font-mono"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm bg-black h-[calc(350px-45px)] sm:h-[calc(400px-45px)] flex flex-col">
          <div
            ref={terminalRef}
            className="flex-1 space-y-1 overflow-y-auto mb-2 cursor-text text-left"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4a5568 #000000',
              minHeight: '0'
            }}
          >
            {commandHistory.map((entry, index) => (
              <div key={index} className={`text-left ${
                entry.type === 'command' ? 'text-green-400' : ''
              } ${
                entry.type === 'error' ? 'text-red-400' : ''
              } ${
                entry.type === 'output' ? 'text-zinc-300' : ''
              }`}>
                <pre className="whitespace-pre-wrap font-mono leading-relaxed text-left">{entry.content}</pre>
              </div>
            ))}
          </div>

          <div className="flex items-center border-t border-zinc-800 pt-2">
            <span className="text-green-400 mr-2 flex-shrink-0">{getPrompt()}</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-transparent text-white outline-none font-mono text-left"
              style={{
                caretColor: 'white',
                caretShape: 'block'
              }}
              placeholder=""
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  )
}
