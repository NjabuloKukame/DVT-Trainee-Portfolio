import './styles.css';
import './Search.css';
import Header from './components/Header';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import {employees, projects} from './MockSearch.json'

function Search(){
    return(
        <>
            <Header/>
            <section className='search-box'>
                <SearchBar> </SearchBar>
                <div className='r-container-filter'>
                    <Filter className='filter-bar'/>
                    <SearchResults employees={employees} projects={projects} />
                </div>
            </section>
        </>
        
    );
}

export default Search;