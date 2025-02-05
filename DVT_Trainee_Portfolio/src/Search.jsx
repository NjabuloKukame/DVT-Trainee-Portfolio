import './styles.css';
import './Search.css';
import Header from './components/Header';
import {projects, employees} from './MockSearch.json'
import SearchResults from './components/SearchResults.jsx'
function Search(){
    return(
        <>
            <Header/>
            <SearchResults employees={employees} projects={projects} />
        </>
        
    );
}

export default Search;