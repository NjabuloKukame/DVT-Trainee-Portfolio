import { Link } from "react-router-dom"
import SearchNav from "./SearchNav";
import './SearchResults.css'

export default function SearchResults({employees}) {
  return (
    <>
      <section className="results-container">
        <SearchNav />
      
        <ResultsList results={employees} id={'employee_id'} isProject={false} />

      </section>
    </>
  )
};

export function ResultsList({results, isProject, id}){

  return (
    <section className="results-list">
      {
        results.map((result) => {
          return (
            <Link to={'/UserPortfolio'} key={result[id]} className="result-link">
            <Results result={result} isProject={isProject} /></Link>
          );})
      }
    </section>
  )
}

export function Results({result, isProject= false}) {

  return (
    <div className="results">
      <div className="r-profile">
        <div className="results-pic">
          <img src={isProject ? result.screenshot: result.avatar} alt=""  className={isProject ? "r-project-pic" : 'r-user-pic'}/>
        </div>
        
        <div className="intro">
          <p className="results-title">{isProject ? result.title: result.name}</p>
          <p className="results-type">{isProject ? result.created_on : result.role}</p>
        </div>
      </div>

      <div className="results-data">
        <p className="results-bio text-container">{isProject ? result.description : result.bio}</p>
      </div>
    </div>
  );
}
