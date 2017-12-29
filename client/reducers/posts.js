// a reducer takes in two things:

// 1. the action (info about what happened)

// 2. copy of current state

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log('incrementing likes.');
            const i = action.index;
            console.log(state);
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 10},
                ...state.slice(i + 1), //after the one we are updating
            ]
        // return the updated state
        default:
            return state;
    }
}

export default posts;