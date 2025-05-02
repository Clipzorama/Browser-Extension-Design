import './App.css'
import Header from './components/Header.jsx'
import FilterBar from './components/FilterBar.jsx'
import Card from './components/Card.jsx'

// All images here:
import devlens from './assets/images/logo-devlens.svg'
import styleSpy from './assets/images/logo-style-spy.svg'
import speedBoost from './assets/images/logo-speed-boost.svg'
import jsonWizard from './assets/images/logo-json-wizard.svg'
import tabMaster from './assets/images/logo-tab-master-pro.svg'
import viewportBuddy from './assets/images/logo-viewport-buddy.svg'
import markNotes from './assets/images/logo-markup-notes.svg'
import gridGuides from './assets/images/logo-grid-guides.svg'
import palettePicker from './assets/images/logo-palette-picker.svg'
import lineChecker from './assets/images/logo-devlens.svg'
import domSnap from './assets/images/logo-dom-snapshot.svg'
import consolePlus from './assets/images/logo-console-plus.svg'
import { useState } from 'react'


function App() {

  const [activeFilter, setActiveFilter] = useState("connected");

  const [cards, setCards] = useState([
    {
      id: 1,
      imgSrc: devlens,
      title: "Devlens",
      desc: "Quickly inspect page layouts and visualize element boundaries.",
      isActive: false
    },
    {
      id: 2,
      imgSrc: styleSpy,
      title: "StyleSpy",
      desc: "Instantly analyze and copy CSS from any webpage element.",
      isActive: false
    },
    {
      id: 3,
      imgSrc: speedBoost,
      title: "SpeedBoost",
      desc: "Optimizes browser resource usage to accelerate page loading.",
      isActive: false
    },
    {
      id: 4,
      imgSrc: jsonWizard,
      title: "JSONWizard",
      desc: "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: false
    },
    {
      id: 5,
      imgSrc: tabMaster,
      title: "TabMaster Pro",
      desc: "Organizes browser tabs into groups and sessions.",
      isActive: false
    },
    {
      id: 6,
      imgSrc: viewportBuddy,
      title: "ViewportBuddy",
      desc: "Simulates various screen resolutions directly within the browser.",
      isActive: false
    },
    {
      id: 7,
      imgSrc: markNotes,
      title: "Markup Notes",
      desc: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: false
    },
    {
      id: 8,
      imgSrc: gridGuides,
      title: "GridGuides",
      desc: "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false
    },
    {
      id: 9,
      imgSrc: palettePicker,
      title: "Palette Picker",
      desc: "Instantly extracts color palettes from any webpage.",
      isActive: false
    },
    {
      id: 10,
      imgSrc: lineChecker,
      title: "LineChecker",
      desc: "Scans and highlights broken links on any page.",
      isActive: false
    },
    {
      id: 11,
      imgSrc: domSnap,
      title: "DOM Snapshot",
      desc: "Capture and export DOM structures quickly.",
      isActive: false
    },
    {
      id: 12,
      imgSrc: consolePlus,
      title: "ConsolePlus",
      desc: "Enhanced developer console with advanced filtering and logging.",
      isActive: false
    }
  ]);


  // This function updates a specific card’s isActive state when the switch is clicked.
  // works with the checked attribute
  const handleToggle = (id) => {
    setCards(prev =>
      prev.map(card =>
        // if id matches then the 'isActive' bool property negates itself
        card.id === id ? { ...card, isActive: !card.isActive } : card
      )
    );
  };

  // depending if the card is active or not, then it appears inside of the card container
  const filteredCards = cards.filter(card => {
    // This works with FilterBar.jsx
    if (activeFilter === "Active") return card.isActive;
    if (activeFilter === "Inactive") return !card.isActive;
    return true; // this refers to the ALL button in FilterBar.jsx
  });

  return (
    <div className="app-container">
      <Header />
      {/* using the useState as the props inside of the component */}
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <div className="cardList">
        {filteredCards.map(card => (
          <Card 
          key={card.id}
          imgSrc={card.imgSrc}
          title={card.title}
          desc={card.desc}
          isActive={card.isActive}
          onToggle= {() => handleToggle(card.id)}
          />
      ))}

      </div>
    </div>
  );
}

export default App
