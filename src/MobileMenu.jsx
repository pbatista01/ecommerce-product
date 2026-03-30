import closeIcon from './assets/icon-close.svg'

function MobileMenu ({datos, setIsMenuOpen, isMenuOpen}) {
    return(
        <nav className="w-[60%] h-[100%] flex flex-col gap-12 py-6 px-7 absolute z-10 top-0 left-0 bg-white shadow-md md:hidden">
            <img src={closeIcon} alt="close icon" className="w-4 h-4" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            <ul>
                <li className="flex flex-col gap-6 font-bold text-md font-display">
                    {datos.map((item) => (
                        <a  className="cursor-pointer" key={item} >{item}</a>
                    ))}
                </li>
            </ul>
        </nav>
    );


}

export default MobileMenu;