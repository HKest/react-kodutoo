
import './App.css';
import { useState, useRef } from 'react';


function App() {

const [sisseLogitud, muudaSisselogitud] = useState("ei");
const [sonum, muudaSonum] = useState("");
const kasutajaNimiRef = useRef();
const paroolRef = useRef();

const logiSisse = () => {
  if (paroolRef.current.value === "123") {
  muudaSisselogitud("jah");
  muudaSonum("Olete sisse logitud");
  muudaSonum(kasutajaNimiRef.current.value + " oled sisse logitud");

} else { 
   muudaSonum("Vale parool");
}
}

const logiValja = () => {
  muudaSisselogitud("ei");
  muudaSonum("Olete välja logitud")
}




  return (
    <div className="App">

      <div>{sonum}</div>

{sisseLogitud === "ei" &&<div>
      <label>Kasutajanimi</label><br />
      <input ref={kasutajaNimiRef} type="text" /><br />
      <label>Parool</label><br />
      <input ref={paroolRef} type="password" /><br />
      </div>}

{sisseLogitud === "ei" &&<button onClick={logiSisse}>Logi sisse</button>}
{sisseLogitud === "jah" &&<button onClick={ logiValja }>Logi välja</button>}


<br />
<br />
{/* Siin algab esimine kodutöö */}

 <button className='nupp'>Nupp</button>



 <p className='sinine-tekst'>Tee sinine tekst, millele hiirega peale minnes muuda selle teksti suurus suuremaks </p>
 <p className='roheline-tekst'>Tee roheline tekst</p>
 <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1060870/header.jpg?t=1615951640' className='pilt' alt='Hallo World'/>
    </div>
  );
}


export default App;
