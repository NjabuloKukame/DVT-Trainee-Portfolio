import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import Header from "./Header";
import Search from "../Search";
import {employees} from '../MockSearch.json';

function SearchBar(){
  const [search,setSearch] = useState('')
  const [searchResults, setResults] = useState(employees);

  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search)

    const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(search.toLowerCase())
   } 
  );
  setResults(filteredEmployees)

  }

    return(
      <>
      <Header />
        <div class="input-container">
          <SearchIcon/>
          <input type="text"  placeholder="Search" onChange={handleInputChange}/>
        </div>
      <Search searchResults={searchResults} />
      </>
    )
}
export default SearchBar;


