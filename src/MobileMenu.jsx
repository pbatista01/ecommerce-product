

function MobileMenu ({datos}) {
    return(
        <nav>
            <ul>
                <li>
                    {datos.map((item) => (
                        <a  className="cursor-pointer" key={item} >{item}</a>
                    ))}
                </li>
            </ul>
        </nav>
    );


}

export default MobileMenu;