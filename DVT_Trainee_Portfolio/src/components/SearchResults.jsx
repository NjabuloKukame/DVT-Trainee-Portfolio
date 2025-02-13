import { Link } from "react-router-dom"
import SearchNav from "./SearchNav";
import './SearchResults.css';

export default function SearchResults({results, resultsCopy, filter}) {
  return (
    <>
      <section className="results-container">
        <SearchNav filter={filter} results={results} />       
        <ResultsList results={resultsCopy} id={'employee_id'}/>
      </section>
    </>
  )
};

export function ResultsList({results, id}){

  if(results.length == 0){
    return <h1>Results not Found</h1>
  }
  
  return (
    <section className="results-list">
      {
        results.map((result, index) => {
          return (
            <Link to={'/UserPortfolio'} key={result[id]+index} className="result-link">
            <Results result={result} isProject={result.employee_id === undefined} /></Link>
          );})
        }
    </section>
  )
}

export function Results({result, isProject}) {

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
      <div className="user-skills">
        <p className="skills-title">{isProject ? 'Technologies:' : 'Skills:'}</p>
        {
          !isProject ? <GenerateBadges badgeList={result.skills} /> : <GenerateBadges badgeList={result.technologies} />
        }
      </div>
    </div>
  );
}


export function GenerateBadges({badgeList}){
  return (
    <ul className="skills-list">
      {
        badgeList.map((badge)=>{
          return (<li><img src={`https://img.shields.io/badge/-${badge}-E34F26?style=flat-square&logoColor=ffffff`} alt="HTML" height="15"/></li>)
        })
      }
    </ul>
  )
}