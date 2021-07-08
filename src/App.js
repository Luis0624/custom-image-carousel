import Carousel from "./components/Carousel/Carousel"
// import logo from './logo.svg';
import './App.css';
import MainImg from './Images/mainImage.png'
import GifImg from './Images/giphy.gif'

function App() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
     
      <Carousel show ={2}>
      <div style={{padding: 8}}>
        <img
          alt="img 1"
          src={ GifImg }
          style={{width: '100%'}}
          // width="1600"
          height="300"
          // className="d-inline-block align-top"
        />
      </div>

      <div style={{padding: 8}}>
        <img
          alt="img 2"
          src={ MainImg }
          style={{width: '100%'}}
          // width="1600"
          height="300"
          // className="d-inline-block align-top"
        />
      </div>
       
      <div style={{padding: 8}}>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" style={{width: '100%'}}/>
      </div>

      <div style={{padding: 8}}>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" style={{width: '100%'}}/>
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
