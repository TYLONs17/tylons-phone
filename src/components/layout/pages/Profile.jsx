import ProjectsCard from '@/components/utils/ProjectsCard'
import Resume from '../../resume/Resume'
// import RainThunder from '@/components/theme/RainThunder'
import Projects from '@/models/projects'


export default function About() {


  return (
    <div className="container px-2 ">
      <div className="p-2  ">
        <h1 className="p-2 bg-gray-500 bg-opacity-70">Here&apos;s a Quick Overview About Me</h1>
        {/* <RainThunder /> */}
        <div className="text-2xl pt-2 hidden ">Facing a challange not knowing what it is or how to even start solving it, that is true  Stoitism.</div>
        <p className="hidden ">That is the sort of light i want to see lit in my eyes too. Come.. <span className="p-4 font-bold ">Face Me.</span> <sub>I shall be your opponent.</sub></p>

        <hr className="border-blue-500" />
        
        <Resume />
      </div>

      {/* <div className="p-6 flex flex-col justify-center items-center bg-gray-500 bg-opacity-70">
        <p className="text-lg">Browse My Recent</p>
        <h1 className="text-xl font-bold" id="projects">Projects</h1>

        <div className="relative flex gap-4 flex-wrap justify-center items-center py-">
          {Projects.map((project, index) => (
            <ProjectsCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} linkUrl={project.linkUrl} liveDemo={project.liveDemo || ''} />
          ))}
        </div>
      </div> */}
      
    </div>
  )
}