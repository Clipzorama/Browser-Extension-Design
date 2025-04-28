import './App.css'
import Header from './components/Header.jsx'
import FilterBar from './components/FilterBar.jsx'
import Card from './components/Card.jsx'

// All images here:
import devlens from './assets/images/logo-devlens.svg'

function App() {

  const cardData = [
    {
      imgSrc: devlens,
      title: "Devlens",
      desc: "Quickly inspect page layouts and visualize element boundaries."
    }
  ]

  return (
    <div className="app-container">
      <Header />
      <FilterBar />
      <div className="cardList">
        {cardData.map((card, index) => (
          <Card 
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          desc={card.desc}
          />
        ))}

      </div>
    </div>
  );
}

export default App
