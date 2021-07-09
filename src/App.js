import Carousel from "./components/Carousel/Carousel"
// import logo from './logo.svg';
import './App.css';
import img2 from './Images/img2.png'
import img1 from './Images/img1.gif'
import img3 from './Images/img3.gif'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'

function App() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
     
      <Carousel show ={3}>
      <div style={{padding: 8}}>
        <img
          alt="img 1"
          src={ img1 }
          style={{width: '100%'}}
          // width="1600"
          height="300"
          // className="d-inline-block align-top"
        />
      </div>

      <div style={{padding: 8}}>
        <img
          alt="img 1"
          src={ img2 }
          style={{width: '100%'}}
          // width="1600"
          height="300"
          // className="d-inline-block align-top"
        />
      </div>

      <div style={{padding: 8}}>
        <img src={ img3 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>
       
      <div style={{padding: 8}}>
        <img src={ img4 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img5 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img2 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img5 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img5 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      </Carousel>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
