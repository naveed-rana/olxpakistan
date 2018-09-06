import {MAPLOCATIONS, SEARCHTITLE,GETSUGGESTIONS,GETADS,GETADSUSERAds,USERADDELETE} from '../../actions/searchActions';
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
            let adsrev = action.data.reverse();
            return{
                ...state,
                ads:adsrev
            }
        }
        case GETADSUSERAds:{
            let adsrev = action.data.reverse();
            return{
                ...state,
                myAds:adsrev
            }
        }
        case USERADDELETE:{
            let deleteAd = state.myAds.filter((ad)=> ad._id !== action.data.id);
            return{
                ...state,
                myAds:deleteAd
            }
        }
        default:
            return state;
    }
}

export default searchReducer;