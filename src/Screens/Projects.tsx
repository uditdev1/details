import { motion } from "framer-motion"
import DesignCard from "../components/DesignCard"
import { fullstack } from "../utils/data"

const Projects = () => {
    
    return (
        <div className=" p-4 min-h-screen mb-4 ">
             <motion.div 
                whileHover={{
                  rotateX : 25,
                  rotateY : 10,
                }}
                transition={{
                  translateZ : 100,
                  duration : 0.3,
                  ease : "easeInOut"
                }}
                className="hover:text-neutral-200 text-neutral-200 [perspective::1000px] [transform-style:preserve-3d] group relative font-medium font-jetbrains w-fit transform cursor-pointer duration-200 hover:text-[2.5rem] text-[2rem] m-4 "
              >
                <span className="group-hover:text-[4rem] duration-200">P</span>
                rojects
                <span className="h-[1.1px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[5px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r blur-sm from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[2px] left-[30%] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-1/2 bg-gradient-to-r blur-sm from-transparent via-yellow-300 to-transparent"></span>
            </motion.div> 
            <div className="flex flex-wrap p-2 gap-8 justify-center items-center">
                {
                    fullstack.map( (project , ind) => (
                        <DesignCard key={ind} pr={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects