import './styles.css';
import './UserPortfolio.css';
import ProfileImage from './assets/icons8-user-profile-100.png';
import Header from './components/Header';

function UserPortfolio(){
    const projects = [0,0,0,0];
    return(
        <>
            <Header/>
            <div className="portfolio-container">

                <div className="profile-header">
                    <div className="pop">
                    <img src={ProfileImage} alt="Profile" className="profile-img" />
                    <div className="user-name-section">
                        <h1>John Doe</h1>
                    </div>

                    <div className='user-position'>
                        <h3>Full Stack Developer</h3>
                    </div>
                    </div>
                    <div className="about-section">
                        <p>I am a fullstack developer at DVT. </p>
                </div>
                </div>


                

                <div className="technology-section">
                    <div className="technology-stack-section">
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>SQLite</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>

                    <div className='project-section'>

                        <h2>Projects</h2>
                        <div className="project-grid-section">
                            {projects.map( (project) => {
                                return (<div className='project'></div>)
                            })}
                        </div>

                    </div>
                    
                </div>
                    <div>
                    <div className="cv-btn">
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserPortfolio;
