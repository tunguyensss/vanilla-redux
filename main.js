// init counter state
const initialState = {
  count: 0,
  increment: 0,
  decrement: 0,
};

// make a reducer
// a simple function to update state
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        increment: state.increment + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        decrement: state.decrement + 1,
      };
    case 'RESET': {
      return {
        ...state,
        count: 0,
        increment: 0,
        decrement: 0,
      };
    }
    default:
      return state;
  }
};

// Make a Store
const store = Redux.createStore(counterReducer);

// Get counter DOM element
const counterElement = document.getElementById('counter');

const render = () => {
  counterElement.innerText = store.getState().count.toString();
};
// And subscribe it
// to listen each time state change
store.subscribe(render);

// Action Button
const btnIncre = document.getElementById('btnInc');
const btnDecre = document.getElementById('btnDec');
const btnReset = document.getElementById('btnReset');

btnIncre.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

btnDecre.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

btnReset.addEventListener('click', () => {
  store.dispatch({ type: 'RESET' });
});
