import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import SearchResults from './SearchResults';
import {employees} from '../MockSearch.json';

function SearchBar(){
  const [search,setSearch] = useState('')

  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search)

    const filteredEmployees = employees.filter((employee) => {
    employee.name.toLowercase().includes(search.toLowerCase())
   } 
  );

   < SearchResults employees={
    filteredEmployees}/>
  }

    return(
        <div class="input-container">
      <SearchIcon/>
      <input type="text"  placeholder="Search" onChange={handleInputChange}/>
    </div>
    )
}
export default SearchBar;


