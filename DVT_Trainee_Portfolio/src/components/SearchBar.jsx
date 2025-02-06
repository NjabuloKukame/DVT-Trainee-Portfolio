import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(){
    return(
        <div class="input-container">
      {/* <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1"/> */}
      <SearchIcon/>
      <input type="text"  placeholder="Search"/>
    </div>
    )
}
export default SearchBar;
