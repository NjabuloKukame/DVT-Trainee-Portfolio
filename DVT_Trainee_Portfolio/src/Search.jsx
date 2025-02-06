import './styles.css';
import './Search.css';
import Header from './components/Header';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';

function Search(){
    return(
        <>
            <Header/>
            <div>
                <h1>Search</h1>
            </div>
            <Filter/>
            <SearchBar> </SearchBar>
        </>
        
    );
}

export default Search;