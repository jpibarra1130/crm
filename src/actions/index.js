export const selectedPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};

export const loadInitialPeopleSuccess = people => {
    return {
        type: 'INITIAL_FETCH',
        payload: { people },
    }
};

export const newContactSuccess = contact => {
    return {
        type: 'NEW_CONTACT',
        payload: { contact },
    }
};

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
}
