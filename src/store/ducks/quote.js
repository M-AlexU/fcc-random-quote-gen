//action types
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

//initial state
const defaultState = {
    quote: '',
    author: '',
    requesting: false
};

//action creators
const requestingData = () => { 
    return {
        type: REQUESTING_DATA
    } 
};

const receivedData = (data) => {
    return {
        type: RECEIVED_DATA,
        quote: data.content,
        author: data.author
    } 
};

//action dispatcher
const fetchQuote = () => {
    return async (dispatch) => {
        dispatch(requestingData());
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            dispatch(receivedData(data));
        } catch (error) {
            console.log(error);
        }
    };
};

//reducer
const quoteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                ...state,
                requesting: true
            }

        case RECEIVED_DATA:
            return {
                ...state,
                requesting: false,
                quote: action.quote,
                author: action.author
            }

        default:
            return state;
    }
};

export {quoteReducer, fetchQuote};