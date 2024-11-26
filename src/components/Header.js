const Header = () =>{
    return(
        <div className="bg-gray-950">
            <div className="flex justify-between">
                <h3 className="mr-10 cursor-pointer hover:text-cyan-500 text-4xl  my-5 font-bold text-white mx-12">Portfolio</h3>
                <ul className="flex justify-between font-bold text-white">
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">Home</li>
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">About</li>
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">Education</li>
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">Skills</li>
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">Projects</li>
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Header