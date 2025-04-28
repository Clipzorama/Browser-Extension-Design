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
                <input type="checkbox" className="checker" />
            </div>
        </div>
    );
}

export default Card