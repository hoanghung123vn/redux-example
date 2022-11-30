const { createStore } = require("redux");

const actions = [
    { type: "CHANGE_SPEED", payload: 1 },
    { type: "CHANGE_SPEED", payload: 2 },
    { type: "CHANGE_SPEED", payload: 3 },
];

const initState = {
    speed: 0,
    lastSpeed: 1,
};

const reducer = (state = initState, action) => {
    if (action.type === "CHANGE_SPEED") {
        return { ...state, speed: action.payload };
    }
    return state;
};

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({ type: "CHANGE_SPEED", payload: 1 });
console.log(store.getState());

store.dispatch({ type: "CHANGE_SPEED", payload: 2 });
console.log(store.getState());

store.dispatch({ type: "CHANGE_SPEED", payload: 3 });
console.log(store.getState());

// Action creators
const changeSpeed = (speed) => ({ type: "CHANGE_SPEED", payload: speed });

store.dispatch(changeSpeed(4));
console.log(store.getState());
