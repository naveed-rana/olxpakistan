import {MAPLOCATIONS, SEARCHTITLE,GETSUGGESTIONS,GETADS} from '../../actions/searchActions';
const INITIAL_STATE = {
    mapSearch: '',
    titleSearch: '',
    suggestions:[],
    ads:[]

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
        case GETADS:{
            return{
                ...state,
                ads:action.data
            }
        }
        default:
            return state;
    }
}

export default searchReducer;