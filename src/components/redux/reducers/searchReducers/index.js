import {MAPLOCATIONS, SEARCHTITLE,GETSUGGESTIONS,GETADS,GETADSUSERAds} from '../../actions/searchActions';
const INITIAL_STATE = {
    mapSearch: '',
    titleSearch: '',
    suggestions:[],
    ads:[],
    myAds:[]

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
        case GETADSUSERAds:{
            return{
                ...state,
                myAds:action.data
            }
        }
        default:
            return state;
    }
}

export default searchReducer;