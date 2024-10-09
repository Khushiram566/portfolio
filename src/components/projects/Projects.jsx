import React from 'react'
import ProjectCard from './ProjectCard'
import dp from '../../../public/photo.avif'
const Projects = () => {
  return (
    <>
      <h1 className="font-bold text-center text-3xl">Projects</h1>
      <div className='grid gap-y-4 m-2'>
        <ProjectCard
          Name="Blog Application"
          Image={dp}
          Skills={["React", "Appwrite", "Tailwind Css"]}
          link=" https://blog-one-neon-83.vercel.app/"
          StartDate="11/01/2024"
          EndDate="14/03/2024"
          Description="Developed a feature-rich Blog Application using React and Appwrite
for database and authentication.
 This platform allows users to create,
read, update, and delete blog posts with ease. Key features include
user authentication, real-time updates, and an intuitive interface,
ensuring a seamless and engaging user experience."
        />
        <ProjectCard
          Name="Blog Application"
          Image={dp}
          Skills={["React", "Appwrite", "Tailwind Css"]}
          link=" https://blog-one-neon-83.vercel.app/"
          StartDate="11/01/2024"
          EndDate="14/03/2024"
          Description="Developed a feature-rich Blog Application using React and Appwrite
for database and authentication. This platform allows users to create,
read, update, and delete blog posts with ease. Key features include
user authentication, real-time updates, and an intuitive interface,
ensuring a seamless and engaging user experience."
        />
        <ProjectCard
          Name="Blog Application"
          Image={dp}
          Skills={["React", "Appwrite", "Tailwind Css"]}
          link=" https://blog-one-neon-83.vercel.app/"
          StartDate="11/01/2024"
          EndDate="14/03/2024"
          Description="Developed a feature-rich Blog Application using React and Appwrite
for database and authentication. This platform allows users to create,
read, update, and delete blog posts with ease. Key features include
user authentication, real-time updates, and an intuitive interface,
ensuring a seamless and engaging user experience."
        />
      </div>
    </>
  );
}

export default Projects
