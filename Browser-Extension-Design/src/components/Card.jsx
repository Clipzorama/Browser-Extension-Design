import '../styles/Card.css'

function Card({imgSrc, title, desc}) {
    return (
        <div className="card-container">
            <section className="top">
                <img src={imgSrc} alt={title} />
                    <div className="header-section">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
            </section>
            <div className="bottom">
                <button className="removeBtn">Remove</button>

                {/* Anywhere on the label will toggle the checkbox when clicked */}
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default Card