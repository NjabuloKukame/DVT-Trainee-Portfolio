import "./Filter.css"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {employees} from "../MockSearch.json"
import { useState } from "react";

function Filter(){
    // Get all unique languages and roles
    const languages = employees.map((employee) => employee.skills);
    const roles = employees.map((employee) => employee.role);
    // Remove duplicates
    const allLanguages = [...new Set(languages.flat())];
    const allRoles = [...new Set(roles)];

    const [selectedFilter, setSelectedFilter] = useState([]);

    const handleFilterClick = (filter) => {
        if(selectedFilter.includes(filter)){
            setSelectedFilter((prev) => prev.filter((item) => item !== filter));
        }else{
            setSelectedFilter((prev) => [...prev, filter]);
        }

        console.log(selectedFilter);
        
    }
    return(
        <section className="filter-container">
            <div className="filter-title">
                <h3 className="logo-text">Filter</h3>
                <FilterAltIcon/>
            </div>
            <div className="divider"></div>
            <div className="scroller">
                <div className="filter-section">
                    <p className="filter-section-title">Languages</p>
                    <div className="filter-content-container">
                        {allLanguages.map((language) => (
                            <FilterItem 
                                key={language}
                                name={language} 
                                onToggle={handleFilterClick}
                                isSelected={selectedFilter.includes(language)}
                            />
                        ))}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="filter-section">
                    <p className="filter-section-title">Roles</p>
                    <div className="filter-content-container">
                        {allRoles.map((role) => (
                            <FilterItem name={role}/>
                        ))}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="filter-section">
                    <p className="filter-section-title">Tools</p>
                    <div className="filter-content-container">
                        <FilterItem name={"React"}/>
                        <FilterItem name={"Node.js"}/>
                        <FilterItem name={"Express"}/>
                        <FilterItem name={"MongoDB"}/>
                        <FilterItem name={"MySQL"}/>
                        <FilterItem name={"PostgreSQL"}/>   
                        <FilterItem name={"Docker"}/>
                        <FilterItem name={"Jenkins"}/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="filter-section">
                    <p className="filter-section-title">Operating System</p>
                    <div className="filter-content-container">
                        <FilterItem name={"Windows"}/>
                        <FilterItem name={"Linux"}/>
                        <FilterItem name={"MacOS"}/>
                        <FilterItem name={"iOS"}/>
                        <FilterItem name={"Android"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}



function FilterItem({name, onToggle, isSelected}){
    const generatePastelColor = () => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 100%, 50%)`;
    };
    return(
        <div className={`filter-content ${isSelected ? "selected" : ""}`}>
            <span className="filter-content-circle" style={{backgroundColor: generatePastelColor()}}></span>
            <p className="filter-content-name" onClick={() => onToggle(name)}>{name}</p>
        </div>
    )
}

export default Filter;