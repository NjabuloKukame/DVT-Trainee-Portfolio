import './styles.css';
import './Search.css';
import Header from './components/Header';
import Filter from './components/Filter';

function Search(){
    return(
        <>
            <Header/>
            <div>
                <h1>Search</h1>
            </div>
            <Filter/>
        </>
        
    );
}

export default Search;