import { Link } from "react-router-dom"
import SearchNav from "./SearchNav";
import './SearchResults.css'

export default function SearchResults({employees, projects}) {
  return (
    <>
      <section className="results-container">
        <SearchNav />
      
        <ResultsList results={employees} id={'employee_id'} isProject={false} />
        <ResultsList results={projects} id={'project_id'} isProject={true} />

      </section>
    </>
  )
};

export function ResultsList({results, isProject, id}){

  return (
    <ul className="results-list">
      {
        results.map((result) => {
          return (
            <li className="li-result">
              <Link to={'/portfolio'} key={result[id]} className="result-link">
              <Results result={result} isProject={isProject} /></Link>
            </li> 
          );})
      }
    </ul>
  )
}

export function Results({result, isProject= false}) {

  return (
    <div className="results">
      <div className="results-pic">
        <img src={isProject ? result.screenshot: result.avatar} alt=""  className={isProject ? "r-project-pic" : 'r-user-pic'}/>
      </div>
      <div className="results-data">
        <h2 className="results-title">{isProject ? result.title: result.name}</h2>
        <p className="results-type">{isProject ? result.created_on : result.role}</p>
        <p className="results-bio">{isProject ? result.description : result.bio}</p>
      </div>
    </div>
  );
}
