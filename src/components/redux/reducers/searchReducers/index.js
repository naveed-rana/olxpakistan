import {MAPLOCATIONS, SEARCHTITLE,GETSUGGESTIONS} from '../../actions/searchActions';
const INITIAL_STATE = {
    mapSearch: '',
    titleSearch: '',
    suggestions:[]

};

function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MAPLOCATIONS:{
            return{
                ...state,
                mapSearch:action.data
            }
        }
        case SEARCHTITLE:{
            return{
                ...state,
                titleSearch:action.data
            }
        }
        case GETSUGGESTIONS:{
            return{
                ...state,
                suggestions:action.data
            }
        }
        default:
            return state;
    }
}

export default searchReducer;