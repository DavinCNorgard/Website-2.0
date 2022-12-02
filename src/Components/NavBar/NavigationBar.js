
import NavBarItem from './NavBarItem'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../styles.css'


export default function NavigationBar() {
    return (
        <nav className='nav'>
            <div className='titleContainer'>
                <div className='title'>
                    Davin Norgard
                </div>
                <div className='iconContatiner'>
                    <a href='https://github.com/DavinCNorgard'><GitHubIcon className='icon'/></a>
                    <a href='https://www.linkedin.com/in/davin-norgard-5407ab194/'><LinkedInIcon className='icon'/> </a>
                </div>
            </div>
                
            <ul>
             
                <NavBarItem to="/Home">Home</NavBarItem>
                
                <NavBarItem to="/Interests">Interests</NavBarItem>
               
                
            </ul>
        </nav>
    )
}
