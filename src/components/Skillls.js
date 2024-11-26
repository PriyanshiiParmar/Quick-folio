const Skills = () =>{
    return(
        <div className="bg-gray-900 text-white py-5">
            <h1 className="text-4xl font-bold text-center p-3">My <span className="text-cyan-400">Skills</span></h1>
            <div className="flex justify-around w-[90%] pt-5 ">
                <div className="">
                    <h1 className="text-3xl font-bold my-3 ">Coding Skills</h1>
                    <div className="border-4 border-cyan-500 p-5 w-[180%] rounded-md">
                    <h3>HTML</h3>
                    <input className="w-[100%]" type="range"/>
                    <h3>CSS</h3>
                    <input className="w-[100%]" type="range"/>
                    <h3>JAVASCRIPT</h3>
                    <input className="w-[100%]" type="range"/>
                    <h3>PYTHON</h3>
                    <input className="w-[100%]" type="range"/>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold my-3">Professional Skills</h1>
                    <div className="border-4 border-cyan-500 p-5 w-[130%] rounded-md">
                    <h3>Web Design</h3>
                    <input className="w-[100%]" type="range"/>
                    <h3>Web Development</h3>
                    <input className="w-[100%]" type="range"/>
                    <h3>Graphic Design</h3>
                    <input className="w-[100%]" type="range"/>
                    <h3>System Architect</h3>
                    <input className="w-[100%]" type="range"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;