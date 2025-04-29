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


function App() {

  const cardData = [
    {
      imgSrc: devlens,
      title: "Devlens",
      desc: "Quickly inspect page layouts and visualize element boundaries."
    },
    {
      imgSrc: styleSpy,
      title: "StyleSpy",
      desc: "Instantly analyze and copy CSS from any webpage element."
    },
    {
      imgSrc: speedBoost,
      title: "SpeedBoost",
      desc: "Optimizes browser resource usage to accelerate page loading."
    },
    {
      imgSrc: jsonWizard,
      title: "JSONWizard",
      desc: "Formats, validates, and prettifies JSON responses in-browser."
    },
    {
      imgSrc: tabMaster,
      title: "TabMaster Pro",
      desc: "Organizes browser tabs into groups and sessions."
    },
    {
      imgSrc: viewportBuddy,
      title: "ViewportBuddy",
      desc: "Simulates various screen resolutions directly within the browser."
    },
    {
      imgSrc: markNotes,
      title: "Markup Notes",
      desc: "Enables annotation and notes directly onto webpages for collaborative debugging."
    },
    {
      imgSrc: gridGuides,
      title: "GridGuides",
      desc: "Overlay customizable grids and alignment guides on any webpage."
    },
    {
      imgSrc: palettePicker,
      title: "Palette Picker",
      desc: "Instantly extracts color palettes from any webpage."
    },
    {
      imgSrc: lineChecker,
      title: "LineChecker",
      desc: "Scans and highlights broken links on any page."
    },
    {
      imgSrc: domSnap,
      title: "DOM Snapshot",
      desc: "Capture and export DOM structures quickly."
    },
    {
      imgSrc: consolePlus,
      title: "ConsolePlus",
      desc: "Enhanced developer console with advanced filtering and logging."
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
