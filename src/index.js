import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

let testTasks = [
        {id: 1, taskContent: 'testTask 1 !'},
        {id: 2, taskContent: 'testTask 2 !'}
      ]

function rootReducer (state = testTasks, action) {	
	if (action.type === 'ADD_NOTE') {

		console.log('action type ADD_NOTE --- ', action)
		return [...state, action.payload]

	}
	return state
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store} >
	              	<App />
	              </Provider>,
	              document.getElementById('root')
	              );

