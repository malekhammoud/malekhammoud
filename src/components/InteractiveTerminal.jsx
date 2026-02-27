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
      'about.txt': { type: 'file', content: 'Full-Stack Developer | Robotics Engineer | Linux Enthusiast\n\nHi! I\'m Malek, a developer focused on building functional and efficient solutions.\nSpecializing in web development, robotics, and AI/ML applications.\n\nNote: I use Arch Linux btw.' },
      'explore_portfolio.sh': { 
        type: 'executable',
        content: '#!/bin/bash\necho "Opening portfolio in new tab..."\necho "Redirecting to /projects page"\nwindow.open("/projects", "_blank")'
      },
      'contact.sh': {
        type: 'executable', 
        content: '#!/bin/bash\necho "Contact Information:"\necho "GitHub: https://github.com/malekhammoud/"\necho "LinkedIn: https://www.linkedin.com/in/malekhammoud/"\necho "Email: malek@malekhammoud.com"'
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
        content: 'Programming Languages:\n\n- Python: 4+ years (AI/ML and automation)\n- JavaScript/TypeScript: 3+ years (Full-stack web development)\n- Java: 2+ years (Enterprise applications and robotics)\n- C/C++: 2+ years (Embedded systems and performance-critical apps)\n- Bash: Daily use (Linux automation and scripting)'
      }
    }
  },
  '/skills/programming': {
    type: 'directory',
    contents: {
      'python.txt': { 
        type: 'file', 
        content: 'Python Expertise (4+ years)\n\nExperience:\n- Rapid prototyping and AI/ML development\n- Ecosystem mastery: NumPy, Pandas, TensorFlow, OpenCV\n- Projects: AI posture detection, autonomous drone navigation, web scraping\n\nPreferred Stack: FastAPI, OpenCV, TensorFlow, Pandas\nEnvironment: PyCharm, VS Code'
      },
      'javascript.txt': { 
        type: 'file', 
        content: 'JavaScript/TypeScript (3+ years)\n\nStack:\n- React/Next.js: Component-based architecture\n- Node.js/Express: Backend APIs\n- TypeScript: Type safety and robust code\n- Tailwind CSS: Utility-first styling\n- Prisma: Database ORM\n\nCurrent Focus: Building scalable full-stack applications' 
      },
      'linux.txt': { 
        type: 'file', 
        content: 'Linux & System Administration\n\nWorkflow:\n- Distribution: Arch Linux (Main driver)\n- Shell: Zsh / Bash\n- Tools: Vim, Tmux, Docker\n\nSkills:\n- Shell scripting and automation\n- System optimization and configuration\n- Containerization (Docker)\n- Server deployment (Nginx, systemd)'
      }
    }
  },
  '/skills/technologies': {
    type: 'directory',
    contents: {
      'web.txt': { 
        type: 'file', 
        content: 'Web Development Stack\n\nFrontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion\nBackend: Node.js, Express, FastAPI, PostgreSQL, MongoDB, Redis\nDevOps: Git, Docker, AWS, Vercel, Nginx, CI/CD' 
      },
      'robotics.txt': { 
        type: 'file', 
        content: 'Robotics & Embedded Systems\n\nPlatforms: Raspberry Pi, Arduino, Pixhawk, ESP32\nFrameworks: ROS (Robot Operating System), OpenCV\nConcepts: PID control, Sensor fusion, Kalman filters, Autonomous navigation\n\nProjects: Autonomous drone (GPS), Bipedal robot, Object tracking' 
      },
      'ai_ml.txt': { 
        type: 'file', 
        content: 'AI & Machine Learning\n\nLibraries: TensorFlow, Keras, PyTorch, OpenCV, Scikit-learn, Pandas, NumPy\nSpecializations: Computer Vision, Object Detection, Classification, Robotics AI\nResearch: Real-time pose estimation, Autonomous navigation algorithms' 
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
      'mobile': { type: 'directory', contents: {} },
      'README.txt': { 
        type: 'file', 
        content: 'Project Directory Structure\n\n/web_development - Full-stack web applications\n/robotics        - Hardware and autonomous systems\n/ai_projects      - Machine learning and AI applications\n/games           - Game development and mods\n/mobile          - Mobile applications (React Native/Expo)\n\nCommands:\n- ls: Explore directory\n- cat <file>: Read project details\n- ./<script>: Run live demo' 
      }
    }
  },
  '/projects/web_development': {
    type: 'directory',
    contents: {
      'flow_arch.txt': {
        type: 'file',
        content: 'Flow Arch OS\n\nDescription: Productivity-first Arch-based operating system. Hyprland-driven, designed for absolute focus with enforced Pomodoro and intention checks.\nStatus: > 250 Total Downloads\nLink: flowarch-os.github.io'
      },
      'ecosphere.txt': {
        type: 'file',
        content: 'EcoSphere - Conservation Mission Control\n\nDescription: Platform for conservation teams with species recognition and team collaboration.\nTech: Next.js, Node.js, AI recognition, Real-time sync.\nStatus: Live at eco-sphere.co'
      },
      'posture_pal.txt': {
        type: 'file',
        content: 'Posture Pall\n\nDescription: Posture correction via real-time monitoring and feedback. Sprays user for bad posture.\nAwards: TKS Global Hackathon Winner (2024).'
      },
      'ecoscout.txt': {
        type: 'file',
        content: 'EcoScout\n\nDescription: Litter reporting and mapping app (Hack49 project).\nTech: GPS integration, Interactive dashboard.'
      },
      'reminder_app.txt': {
        type: 'file',
        content: 'Focus Reminder App\n\nDescription: Electron-based tool for tracking focus days, logging progress, and productivity stats.\nTech: Electron.'
      },
      'central_tech_tribe.txt': {
        type: 'file',
        content: 'Central Tech Tribe\n\nDescription: School community platform built with React and MySQL.\nType: Programming club project.'
      },
      'offshape_website.txt': {
        type: 'file',
        content: 'OffShape Website\n\nDescription: Official website for robotics team. Collaborative development.'
      },
      'demo.sh': {
        type: 'executable',
        content: '#!/bin/bash\necho "Opening web development portfolio..."\nwindow.open("/projects", "_blank")'
      }
    }
  },
  '/projects/robotics': {
    type: 'directory',
    contents: {
      'greenguardian.txt': {
        type: 'file',
        content: 'GreenGuardian - Autonomous Weed Detection\n\nDescription: Autonomous robot using 3D printing and OpenCV for precise weed elimination.\nAwards: CWSF Bronze (2024), TVSEF Gold (2024).'
      },
      'autonomous_litter_detection.txt': {
        type: 'file',
        content: 'Autonomous Litter Detection & Mapping\n\nDescription: Drone-based system for detecting and mapping litter using Computer Vision and GPS.\nStatus: 2025 TKS Focus Project.'
      },
      'maze_solving_robot.txt': {
        type: 'file',
        content: 'Maze-Solving Robot\n\nDescription: Award-winning TVSEF project that autonomously navigates mazes using pathfinding algorithms.\nAwards: Engineers Choice Award (2023).'
      }
    }
  },
  '/projects/ai_projects': {
    type: 'directory',
    contents: {
      'basil_home_ai.txt': {
        type: 'file',
        content: 'Basil home AI\n\nDescription: AI-powered app/device for fridge inventory management and intelligent recipe suggestions.\nStatus: In development (startup venture).'
      },
      'greenguardian_ai.txt': {
        type: 'file',
        content: 'GreenGuardian AI\n\nDescription: Computer vision models for real-time weed identification and targeting.'
      }
    }
  },
  '/projects/games': {
    type: 'directory',
    contents: {
      'minecraft_flight_mod.txt': {
        type: 'file',
        content: 'Minecraft Flight Mod\n\nDescription: Realistic plane mechanics mod for Minecraft using Java and Fabric API.\nStatus: Over 650 Total Downloads.'
      },
      'reconnect.txt': {
        type: 'file',
        content: 'Reconnect\n\nDescription: Top-down shooter game where players fix a broken computer circuit while avoiding enemies.'
      },
      'java_platformer.txt': {
        type: 'file',
        content: '1v1 Platformer Game\n\nDescription: Java collaborative project with collision handling and integrated intro screen.'
      }
    }
  },
  '/projects/mobile': {
    type: 'directory',
    contents: {
      'ontario_deca_app.txt': {
        type: 'file',
        content: 'Ontario DECA App\n\nDescription: Mobile application for Ontario DECA featuring authentication, calendars, and interactive maps.\nTech: Expo, React Native.'
      },
      'basil_mobile.txt': {
        type: 'file',
        content: 'Basil Mobile Interface\n\nDescription: Mobile frontend for the Basil AI inventory management system.'
      }
    }
  },
  '/experience': {
    type: 'directory',
    contents: {
      'work_history.txt': {
        type: 'file',
        content: 'Work History\n\n- Playtoon: Software Engineer (Mar 2025 - Aug 2025)\n- SIMMAD: Software Engineer (Oct 2024 - Feb 2025)\n- BRYCK: Software Engineer (Sep 2024 - Dec 2024)\n- London Public Library: Tech Tutor (Mar 2023 - Aug 2023)'
      },
      'education.txt': {
        type: 'file',
        content: 'Education\n\n- London Central Secondary School (STEM/CS focus)\n- The Knowledge Society (TKS) Innovation Program\n- Canada-Wide Science Fair (CWSF) Participant'
      }
    }
  }
}

export function InteractiveTerminal({ isOpen, onClose }) {
  const [currentPath, setCurrentPath] = useState('/')
  const [commandHistory, setCommandHistory] = useState([
    { type: 'output', content: 'Malinx OS 2.0.1-arch (tty1)\n' },
    { type: 'output', content: 'Last login: Fri Feb 27 14:30:22 2026 from 127.0.0.1' },
    { type: 'output', content: 'Type "help" to see available commands or "neofetch" for system info.' },
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
    const el = terminalRef.current
    if (!el) return

    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    el.addEventListener('click', handleClick)
    return () => {
      el.removeEventListener('click', handleClick)
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

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

  const normalizePath = (path) => {
    if (!path) return '/'
    const parts = path.split('/').filter(Boolean)
    const stack = []
    for (const part of parts) {
      if (part === '.') continue
      if (part === '..') {
        stack.pop()
      } else {
        stack.push(part)
      }
    }
    const result = '/' + stack.join('/')
    return result === '' ? '/' : result
  }

  const resolvePath = (path) => {
    if (!path) return '/'
    const base = path.startsWith('/') ? '' : currentPath
    const fullPath = base + '/' + path
    return normalizePath(fullPath)
  }

  // Get available autocomplete options for current directory
  const getAutocompleteOptions = (command, currentArg) => {
    const cmd = command.toLowerCase()
    const currentDir = getCurrentDirectory()

    if (!currentDir || currentDir.type !== 'directory') return []

    const options = []

    // If no command yet, suggest commands
    if (!command && !currentArg.includes('/')) {
      const commands = ['help', 'ls', 'cat', 'cd', 'pwd', 'neofetch', 'clear', 'exit']
      return commands.filter(c => c.toLowerCase().startsWith(currentArg.toLowerCase()))
    }

    // Handle path-based commands or any argument that looks like a path
    const isPathBased = ['cat', 'ls', 'cd'].includes(cmd) || currentArg.includes('/') || currentArg.startsWith('.')
    
    if (isPathBased) {
      const pathParts = currentArg.split('/')
      const partialName = pathParts[pathParts.length - 1]
      const pathPrefix = pathParts.slice(0, -1).join('/')

      const targetPath = resolvePath(pathPrefix || '.')
      const targetDir = getCurrentDirectoryFromPath(targetPath)
      
      if (targetDir && targetDir.type === 'directory') {
        Object.entries(targetDir.contents).forEach(([name, item]) => {
          if (name.toLowerCase().startsWith(partialName.toLowerCase())) {
            const entryName = pathPrefix ? `${pathPrefix}/${name}` : name

            if (cmd === 'cd') {
              if (item.type === 'directory') options.push(entryName + '/')
            } else if (cmd === 'cat') {
              if (item.type === 'file' || item.type === 'executable') options.push(entryName)
            } else if (cmd === '' && currentArg.startsWith('.')) {
              if (item.type === 'executable') options.push(entryName)
              if (item.type === 'directory') options.push(entryName + '/')
            } else {
              options.push(item.type === 'directory' ? entryName + '/' : entryName)
            }
          }
        })
      }

      // Suggest .. for navigation if applicable
      if ((cmd === 'cd' || cmd === 'ls' || (cmd === '' && currentArg.startsWith('.'))) && '..'.startsWith(partialName.toLowerCase())) {
        options.push((pathPrefix ? pathPrefix + '/' : '') + '..')
      }
    }

    return [...new Set(options)].sort()
  }

  // Handle autocomplete
  const handleAutocomplete = () => {
    if (currentCommand === '' || (currentCommand.trim() === '' && !currentCommand.endsWith(' '))) {
      const options = getAutocompleteOptions('', '')
      setCommandHistory(prev => [...prev, {
        type: 'command',
        content: `${getPrompt()} `
      }, {
        type: 'output',
        content: options.join('  ')
      }])
      return
    }

    const isTrailingSpace = currentCommand.endsWith(' ')
    const args = currentCommand.trim().split(/\s+/)
    
    let cmd = ''
    let currentArg = ''
    
    if (args.length > 1 || isTrailingSpace) {
      cmd = args[0]
      currentArg = isTrailingSpace ? '' : args[args.length - 1]
    } else {
      // Autocompleting the command itself or a path-based command
      currentArg = args[0] || ''
      if (currentArg.includes('/')) {
        cmd = '' // Path-based execution
      } else {
        cmd = '' // Normal command autocomplete
      }
    }

    const options = getAutocompleteOptions(cmd, currentArg)

    if (options.length === 1) {
      const newArgs = currentCommand.trim().split(/\s+/)
      if (isTrailingSpace) {
        newArgs.push(options[0])
      } else {
        newArgs[newArgs.length - 1] = options[0]
      }
      setCurrentCommand(newArgs.join(' '))
    } else if (options.length > 1) {
      setCommandHistory(prev => [...prev, {
        type: 'command',
        content: `${getPrompt()} ${currentCommand}`
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
      { type: 'command', content: `${getPrompt()} ${command}` }
    ])

    switch (cmd) {
      case 'neofetch':
        setCommandHistory(prev => [...prev, {
          type: 'output',
          content: `       .---.          malek@malinx
      /     \\         ------------
      | ()  |         OS: Malinx OS (v2.0.1)
       \\   /          Host: Vercel
        \\ /           Kernel: Next.js 14.2.3
         V            Uptime: 2 hours, 14 mins
      .  |  .         Packages: 42 (npm)
     / \\ | / \\        Shell: node 20.x
    /   \\|/   \\       Resolution: 1920x1080
   /    / \\    \\      UI: React 18.3.1
  /    /   \\    \\     Styles: Tailwind CSS
 /____/     \\____\\    Terminal: malinx-tty
                      CPU: Virtual (Vercel Edge)
                      GPU: Software Rendered
                      Memory: 512MB / 1024MB`
        }])
        break

      case 'help':
        setCommandHistory(prev => [...prev, {
          type: 'output',
          content: `Available commands:
ls <dir>      - List directory contents
cat <file>    - Display file contents  
cd <dir>      - Change directory
./<script>    - Execute shell script
pwd           - Show current directory
neofetch      - Show system information
clear         - Clear terminal
exit          - Close terminal
help          - Show this help message

Navigation:
UP / DOWN     - Command history
TAB           - Autocomplete files/commands
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
          if (item.type === 'directory') return `${name}/`
          if (item.type === 'executable') return `*${name}`
          return name
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
        const cdPath = args[1] ? resolvePath(args[1]) : '/'
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
                content: 'Opening in new tab...'
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
    const normalized = normalizePath(path)
    return fileSystem[normalized] || null
  }

  const getFileFromPath = (path) => {
    const normalized = normalizePath(path)
    const parts = normalized.split('/').filter(Boolean)
    const fileName = parts.pop()
    const dirPath = '/' + parts.join('/')
    
    const current = fileSystem[dirPath] || null
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
    const shortPath = currentPath === '/' ? '~' : currentPath
    return `[malek@malinx ${shortPath}]$`
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[9998]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Terminal container */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up"
        style={{ position: 'fixed', zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[350px] sm:h-[400px] overflow-hidden bg-black shadow-2xl border-t border-zinc-600">
          {/* Terminal header - more authentic Linux style */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-600 bg-zinc-800">
            <div className="flex items-center gap-3">
              <span className="text-zinc-300 font-mono text-xs">malek@malinx: {currentPath}</span>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors px-2 py-1 hover:bg-zinc-700 rounded text-xs font-mono"
              type="button"
            >
              exit
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
                  entry.type === 'command' ? 'text-blue-400' : ''
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
              <span className="text-blue-400 mr-2 flex-shrink-0 font-bold">{getPrompt()}</span>
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
    </div>
  )
}
