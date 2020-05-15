export const selectedPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
}

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};


export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
}
