import "./Filter.css"
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Filter(){
    return(
        <section className="filter-container">
            <div className="filter-title">
                <h3 className="logo-text">Filter</h3>
                <FilterAltIcon/>
            </div>
            <div className="divider"></div>
            <div className="filter-section">
                <p className="filter-section-title">Languages</p>
                <div className="filter-content-container">
                    <div className="filter-content">
                        <span className="filter-content-circle"></span>
                        <p className="filter-content-name">JavaScript</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-1"></span>
                        <p className="filter-content-name">React</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-2"></span>
                        <p className="filter-content-name">C#</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-3"></span>
                        <p className="filter-content-name">CSS</p>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="filter-section">
                <p className="filter-section-title">Roles</p>
                <div className="filter-content-container">
                    <div className="filter-content">
                        <span className="filter-content-circle color-4"></span>
                        <p className="filter-content-name">Full Stack</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-5"></span>
                        <p className="filter-content-name">Front End</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-6"></span>
                        <p className="filter-content-name">Back End</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-7"></span>
                        <p className="filter-content-name">Dev Ops</p>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="filter-section">
                <p className="filter-section-title">Tools</p>
            {/* <div className="divider"></div> */}
                {/* <div className="divider"></div> */}
                <div className="filter-content-container">
                    <div className="filter-content">
                        <span className="filter-content-circle color-8"></span>
                        <p className="filter-content-name">Docker</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-9"></span>
                        <p className="filter-content-name">Jenkins</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle color-10"></span>
                        <p className="filter-content-name">CSS</p>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="filter-section">
                <p className="filter-section-title">Operating System</p>
            {/* <div className="divider"></div> */}
                {/* <div className="divider"></div> */}
                <div className="filter-content-container">
                    <div className="filter-content">
                        <span className="filter-content-circle"></span>
                        <p className="filter-content-name">iOS</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle blue"></span>
                        <p className="filter-content-name">Windows</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle red"></span>
                        <p className="filter-content-name">Android</p>
                    </div>
                    <div className="filter-content">
                        <span className="filter-content-circle yellow"></span>
                        <p className="filter-content-name">Linux</p>
                    </div>
                </div>
            </div>
            

        </section>
    );
}

export default Filter;