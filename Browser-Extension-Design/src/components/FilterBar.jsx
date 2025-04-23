import '../styles/FilterBar.css'


function FilterBar() {
    return (
        <div className="filter-container">
            <h2>Extensions List</h2>
            <div className="btn-container">
                <button className="all">All</button>
                <button className="active">Active</button>
                <button className="inactive">Inactive</button>
            </div>
        </div>
    )
    
}

export default FilterBar