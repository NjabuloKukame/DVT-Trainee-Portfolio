import './styles.css';
import './Search.css';

import Filter from './components/Filter';
import SearchResults from './components/SearchResults';
import { useEffect } from 'react';

function Search({searchResults}){
    useEffect(()=>{}, [searchResults]);
    return(
        <>
            
            <section className='search-box'>
                <div className='r-container-filter'>
                    <Filter/>
                    <SearchResults employees={searchResults}/>
                </div>
            </section>
        </>
        
    );
}

export default Search;