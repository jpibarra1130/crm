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

export const createNewContact = (firstName, lastName, phone, email, 
    company, project, notes) =>  async dispatch => {
    try {
        const response = await fetch('http://192.168.72.244:3000/contact', {
            method: 'POST',
            body: JSON.stringify({
                "firstName": firstName, 
                "lastName": lastName, 
                "phone": phone, 
                "email": email, 
                "company": company, 
                "project": project, 
                "notes": notes
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const responseJson = await response.json();
        console.log('Sucess: ', responseJson);
        
        dispatch({ type: 'NEW_CONTACT' });
    } catch (error) {

        dispatch(displayAlert(error));
    }
};

export const displayAlert = text => () => {
    console.log(`Failure! ${text}`);
};