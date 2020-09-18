const INITIAL_STATE = { mood: '┐( ˘_˘ )┌' }; //<-- create initial state

// create redux function with state and action
const moodRedux = (state = INITIAL_STATE, action) => {
	// include switches
	switch (action.type) {
		case 'HAPPY':
			return { ...state, mood: (action.payload = 'ʘ‿ʘ') };
		case 'SAD':
			return { ...state, mood: (action.payload = '⊙︿⊙') };
		case 'ANGRY':
			return { ...state, mood: (action.payload = 'ಠ_ಠ') };
		case 'CONFUSED':
			return { ...state, mood: (action.payload = '◔_◔') };
	}
};

const store = Redux.createStore(moodRedux);
