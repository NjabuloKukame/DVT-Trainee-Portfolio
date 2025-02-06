import sort from '../assets/icons8-sort-100 (1).png'
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function SearchNav() {
  return (
    <div className="result-nav">
      <div className="result-nav-btns">
        <button className="result-nav-btn">All</button>
        <button className="result-nav-btn">Employees</button>
        <button className="result-nav-btn">Projects</button>
      </div>
      <div>
        <button className="result-nav-btn sort-btn">
          <span className="sort-txt">Sort</span>
          <SwapVertIcon/>
        </button>
      </div>
    </div>
  )
};