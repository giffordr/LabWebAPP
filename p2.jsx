import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import States from './components/states/States';
import Game from './components/game/Game';

ReactDOM.render(
  <States />,
  //<Game />,
  document.getElementById('reactapp'),
);
