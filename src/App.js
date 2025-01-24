import './App.css';
import React, {useState} from 'react';
import ModuleCss from './01_component/ModuleCss';
import Events from './01_component/Events';
import State from './01_component/State';
import Prop from './01_component/Prop';

function App() {

  return (
    <div className="App">
      <ModuleCss />
      <hr />
      <Events />
      <hr />
      <State />
      <hr />
      <Prop age={10}/>
      <Prop age={20}/>
      <hr />
    </div>
  );
}

export default App;



/*********************************************************************************************
** useState **
*********************************************************************************************/
