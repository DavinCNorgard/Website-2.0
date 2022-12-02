
import NavBarItem from './NavBarItem'
import '../../styles.css'


export default function NavigationBar() {
    return (
        <nav className='nav'>
            <ul>
             
                <NavBarItem to="/Home">Home</NavBarItem>
            
                <NavBarItem to="/Interests">Interests</NavBarItem>
               
                
            </ul>
        </nav>
    )
}
