import '../styles/FilterBar.css'


// Destructuring the props to access each property in App.jsx. Connected with useState
function FilterBar({ activeFilter, setActiveFilter }) {


    return (
        <div className="filter-container">
            <h2>Extensions List</h2>
            <div className="btn-container">
                <button
                onClick={() => setActiveFilter("connected")}
                // by default, this button is active since the condition is === 'connected'
                className={activeFilter === "connected" ? "active" : "inactive"}
                >All</button>
                <button
                onClick={() => setActiveFilter("Active")}
                className={activeFilter === "Active" ? "active" : "inactive"}
                >Active</button>
                <button
                onClick={() => setActiveFilter("Inactive")}
                className={activeFilter === "Inactive" ? "active" : "inactive"}
                >Inactive</button>
            </div>
        </div>
    )
    
}

export default FilterBar