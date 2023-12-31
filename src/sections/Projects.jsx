import React from 'react'
import Project from '../components/Project'

function Projects() {
  return (
    <div id='projects' className='flex flex-col items-center px-4' >
        <h1 className='text-[32px] lg:text-[50px] my-[40px] md:mt-0 md:mb-16 font-bold text-white' >My Projects</h1>
        <Project name='1. Disney Plus Clone' description='A disney plus clone made using the TMDB API .' img='disney' vid='disney' projectLink='https://disneyplus-f1110.web.app/' skills={{s1:'react', s2:'tailwind', s3:'firebase'}}   />
        <Project name='2. Metaversus' description="Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real ." img='metaversus' vid='metaversus' projectLink='https://metaversus-sd2j.vercel.app/' skills={{s1:'react', s2:'tailwind', s3:'next'}}/>
        <Project name='3. TennisFam' description='A tennis website built with ReactJS , it gives you all the information about my favourite sport which is obviously tennis .' img='tennis' vid='tennis' projectLink='https://tennis-f70a4.web.app/' skills={{s1:'react', s2:'tailwind'}} />

    </div>
  )
}

export default Projects