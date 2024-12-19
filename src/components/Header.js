const Header = () =>{
    return(
        <div className="bg-gray-950">
            <div className="flex justify-between">
                <h3 className="mr-10 cursor-pointer hover:text-cyan-500 text-4xl font-semiItalic  my-5 font-bold text-white mx-12">Portfolio</h3>
                <ul className="flex justify-between font-bold text-white font-yessava">
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">
                    <a href="#home">Home</a>
                    </li>
                    {/* <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">About</li> */}
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">
                    <a href="#journey">Journey</a>
                    </li>
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">
                    <a href="#skills">SKills</a>
                    </li>
                    {/* <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">Projects</li> */}
                    <li className="mr-10 cursor-pointer hover:text-cyan-500 text-xl mt-5">
                    <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header