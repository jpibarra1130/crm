import people from './people.json';

const initialState = {
    people,
    detailView: false,
    selectedPerson: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_PERSON':
            console.log("action: ", action);
            return {
                ...state,
                detailView: true,
                selectedPerson: action.selectId,
            }
        case 'NONE_SELECTED':
            console.log("None selected");
            
            return {
                ...state,
                detailView: false,
                selectedPerson: null,
            }
        default:
            return state;
    }
}