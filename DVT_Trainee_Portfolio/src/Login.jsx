import './styles.css';
import './Login.css';
import Header from './components/Header';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
            <Header/>
            <div>
                <h1>Login</h1>
                <Link to="/ProfileForm">
                    <button>Login</button>
                </Link>
            </div>
        </>
        
    );
}

export default Login;