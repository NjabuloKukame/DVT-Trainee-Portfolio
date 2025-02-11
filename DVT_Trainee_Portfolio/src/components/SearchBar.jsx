import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
// import {employees, projects} from './MockSearch.json';

function SearchBar(){
  const [search,setSearch] = useState('')

  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search)

  //   const filteredEmployees = employees.filter((employee) =>
  //   employee.firstName.toLowercase().includes(search.toLowerCase())
  // );

  // setFilteredEmployees(filtered);
  }

    return(
        <div class="input-container">
      <SearchIcon/>
      <input type="text"  placeholder="Search" onChange={handleInputChange}/>
    </div>
    )
}
export default SearchBar;


