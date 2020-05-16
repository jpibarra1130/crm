const initialState = {
    people: [],
    detailView: false,
    selectedPerson: null,
};

export default (state = initialState, action) => {
    // console.log('Action type: ', action.type);
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: action.payload.people,
            }
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                selectedPerson: action.selectId,
            }
        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                selectedPerson: null,
            }
        case 'FORM_UDPATE':
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
            }
        case 'NEW_CONTACT':
            return {
                ...state,
                people: [...state.people, action.payload.contact]
            };

        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson,
            }
        default:
            return state;
    }
}