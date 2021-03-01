
import './App.css';
// bootstrap added 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Player from './components/Player/Player';
import PlayersData from './PlayerData/Players.json'
import { useEffect, useState } from 'react';
import Selection from './components/Selection/Selection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
function App() {
  const [Players,setPlayers] = useState([]);

  const [selectedPlayer,setselectedPlayer] = useState([]);

  const handleAddButton = (addedPlayer) =>{
      let newselectedPlayer = [...selectedPlayer,addedPlayer];
      setselectedPlayer(newselectedPlayer);
  }
  useEffect(()=>{
    setPlayers(PlayersData);
    //console.log(PlayersData)
  },[]);

  let totalSalary = 0;
  for (let i = 0; i < selectedPlayer.length; i++) {
    const selectPlayer = selectedPlayer[i];
    totalSalary = totalSalary + selectPlayer.salary;
  }

  return (
    
    
    <div className="app">

  {/* // Header area  */}
    <Header></Header>

    {/* // All player data as card items  */}
    <div className="row pt-5">
      <div className="all-players-container container col-md-8 d-flex flex-wrap px-3">
      {
        Players.map( player => <Player key={player.id} handleAddButton={handleAddButton} detail ={player}></Player>)
      }
      </div>

      <div className="selected-players-container col-md-4">
        <h2><FontAwesomeIcon icon={faClipboardCheck} /> selected Players : {selectedPlayer.length} {console.log(selectedPlayer)} </h2>
        <div className="selected-player">
          {
            selectedPlayer.map(player => <Selection detail={player}></Selection>)
          }

          <h3>Total :{totalSalary} </h3>

        </div>
      </div>
      

    
     
    </div>
    </div>
  );
}

export default App;
