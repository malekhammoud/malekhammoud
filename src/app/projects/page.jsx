'use client'

import { useState } from 'react'
import Image from 'next/image'
import { OptimizedVideo } from '@/components/OptimizedVideo'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
/*LOGOS*/
import webdev from '@/images/projects/webdev.png';
import game from '@/images/projects/gamedev.png';
import robot from '@/images/projects/robot.png';
import ai from '@/images/projects/ai.png';


import p1 from '@/images/projects/green.png';
import eco from '@/images/projects/ecosphere.png';
import reconnect from '@/images/projects/reconnect.png';
import p2 from '@/images/projects/linux.png';
import p4 from '@/images/projects/centralweb.png';
import p6 from '@/images/projects/ecosoute.png';
import p7 from '@/images/projects/reminderapp.png';
/*Project images*/

const projects = [
  {
    name: 'GreenGuardian',
    description:
        'GreenGuardian is an autonomous robot that uses 3D printing, image processing, and obstacle avoidance to precisely spray weeds. It minimizes herbicide use and reduces environmental impact.',
    link: { href: 'https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination', label: '2024 CWSF Project Board' },
    logo: robot,
    image: p1,
    category: ['robotics', 'ai'],
    type: 'image',
  },
  {
    name: 'Autonomous Litter Detection',
    description:
      'Building a low-cost, proof-of-concept autonomous system for detecting and mapping litter using drones. This project aims to enhance environmental monitoring and community engagement.',
    link: { href: 'https://www.notion.so/tksworld/Autonomous-Litter-Detection-Mapping-System-1f60b470b010802ba60cd8a57ee73b0e', label: '2025 TKS Focus Project' },
    logo: robot,
    video: { webm: '/videos/drone.webm', mp4: '/videos/drone.mp4' },
    category: ['robotics', 'ai'],
    type: 'video',
  },
  {
    name: 'EcoSphere',
    description:
      'An all-in-one platform designed to power conservation teams globally—identify species with photo recognition, communicate instantly through team chat, and collaborate seamlessly. Your mission control for ecosystem protection.',
    link: { href: 'https://www.eco-sphere.co/', label: '2025 SolutionsHacks Project (team)' },
    logo: webdev,
    image: eco,
    category: ['webdev'],
    type: 'image',
  },
  {
    name: 'Linux Exploration',
    description:
        'Linux Exploration chronicles my journey from using a Chromebook without a GUI to dual-booting Ubuntu on my Acer laptop. This experience has significantly shaped my programming environment.',
    link: { href: '#', label: '' },
    logo: webdev,
    image: p2,
    category: ['webdev'],
    type: 'image',
  },
  {
    name: 'Reconnect',
    description:
      'Top-down shooter where players collect parts to fix a broken computer circuit while avoiding enemies.',
    link: { href: 'https://github.com/malekhammoud/Reconnect', label: 'Github >' },
    logo: game,
    image: reconnect,
    category: ['game'],
    type: 'image',
  },
  {
    name: '1v1 Platformer Game',
    description:
        'The 1v1 Platformer Game is a collaborative Grade 11 Java project where players compete by landing on each other. It features collision handling, keyboard input, and an integrated intro screen.',
    link: { href: 'https://github.com/mhammoud-os/JavaProject', label: 'Github >' },
    logo: game,
    video: { webm: '/videos/javagame.webm', mp4: '/videos/javagame.mp4' },
    category: ['game'],
    type: 'video',
  },
  {
    name: 'Central Tech Tribe',
    description:
        'Central Tech Tribe is a React-based website with a MySQL backend built as a programming club project. It serves the school community and showcases full-stack development skills.',
    link: { href: 'https://central-server-theta.vercel.app/', label: 'Currently In Development...' },
    logo: webdev,
    image: p4,
    category: ['webdev'],
    type: 'image',
  },
  {
    name: 'Maze-Solving Robot Car',
    description:
        'The Maze-Solving Robot Car is a 2023 award-winning TVSEF project that autonomously navigates a maze. It uses pathfinding and obstacle avoidance to reach its destination.',
    link: { href: 'https://github.com/mhammoud-os/Real-World-Graph-Theory-Simulation', label: '2023 TVSEF Project >' },
    logo: robot,
    video: { webm: '/videos/maze.webm', mp4: '/videos/maze.mp4' },
    category: ['robotics'],
    type: 'video',
  },
  {
    name: 'EcoScout',
    description:
        'EcoScout is a Hack49 app that lets users report litter, access an interactive dashboard, and navigate using GPS. It aims to promote environmental sustainability through community engagement.',
    link: { href: 'https://github.com/mhammoud-os/EcoScout', label: 'View the code >' },
    logo: webdev,
    image: p6,
    category: ['webdev'],
    type: 'image',
  },
  {
    name: 'Reminder App',
    description:
        'The Focus Reminder App is an Electron-based tool that tracks focus days, logs progress, uploads documents, and provides productivity stats. It is designed to help users maintain consistent focus.',
    link: { href: 'https://github.com/mhammoud-os/Project-Reminder', label: 'Download The App >' },
    logo: webdev,
    image: p7,
    category: ['webdev'],
    type: 'image',
  },
  {
    name: 'OffShape Website',
    description:
        'I created the website for my robotics team. It was a collaborative effort with two other people.',
    link: { href: 'https://offshape.vercel.app/', label: 'View The site >' },
    logo: webdev,
    video: { webm: '/videos/offshape.webm', mp4: '/videos/offshape.mp4' },
    category: ['webdev'],
    type: 'video',
  },
  {
    name: 'Posture Pall',
    description:
        'Posture Pall is a device that sprays you if you have bad posture. It is designed to help improve your posture by providing instant feedback.',
    link: { href: 'https://github.com/joaoP-santos/posturepal', label: 'See the video >' },
    logo: webdev,
    video: { webm: '/videos/posture.webm', mp4: '/videos/posture.mp4' },
    category: ['webdev', 'ai'],
    type: 'video',
  }
]

function LinkIcon(props) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
        />
      </svg>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'game', name: 'Game Development' },
    { id: 'ai', name: 'AI' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
        const categories = Array.isArray(project.category) ? project.category : [project.category]
        return categories.includes(activeFilter)
      })

  return (
      <SimpleLayout
          title="Projects That Fuel My Passion for Innovation"
          intro="From robotics to full-stack development, here are some of the projects I've poured my creativity into. Many are open-source, so feel free to explore, use, or improve them as you see fit!"
      >
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/50 dark:bg-teal-400 dark:text-zinc-900'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
              }`}
            >
              {category.name}
              {category.id !== 'all' && (
                <span className="ml-2 text-xs opacity-75">
                  ({projects.filter(p => {
                    const cats = Array.isArray(p.category) ? p.category : [p.category]
                    return cats.includes(category.id)
                  }).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => {
            // Get all logos for the project based on its categories
            const categoryLogos = {
              'robotics': robot,
              'webdev': webdev,
              'game': game,
              'ai': ai
            }

            const projectCategories = Array.isArray(project.category) ? project.category : [project.category]
            const logos = projectCategories.map(cat => categoryLogos[cat]).filter(Boolean)

            return (
              <Card as="li" key={project.name}>
                {/* Multiple logos */}
                <div className="relative z-10 flex gap-2">
                  {logos.map((logo, index) => (
                    <div key={index} className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                          src={logo}
                          alt={`${project.name} logo ${index + 1}`}
                          width={32}
                          height={32}
                          className="h-8 w-8"
                          loading="lazy"
                          quality={90}
                      />
                    </div>
                  ))}
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Link>
                </h2>
                <Card.PDescription>
                  <p>
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      {project.type === 'video' ? (
                        <OptimizedVideo
                          webmSrc={project.video.webm}
                          mp4Src={project.video.mp4}
                          className="h-full w-full object-cover"
                          priority={false}
                        />
                      ) : (
                        <Image
                          src={project.image}
                          alt={`${project.name} project image`}
                          loading="lazy"
                          quality={80}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </Card.PDescription>

                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <Card.Link href={project.link.href} className="flex items-center" target="_blank" rel="noopener noreferrer">
                    <span>Visit {project.link.label}</span>
                    <LinkIcon className="ml-2 h-4 w-4" />
                  </Card.Link>
                </p>
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
  )
}
