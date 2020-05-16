import { loadInitialPeopleSuccess, newContactSuccess } from '../actions';
import config from "../config";

const API_HOST = `${config['API_HOST']}:${config['API_PORT']}`

export const createNewContact = (firstName, lastName, phone, email, 
    company, project, notes) =>  async dispatch => {
    try {
        const response = await fetch(`${API_HOST}/contact`, {
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

        const newContact = await response.json();
        console.log('Success: ', newContact);
        
        dispatch(newContactSuccess(newContact));
    } catch (error) {

        dispatch(displayAlert(error));
    }
};

export const loadInitialContacts = () =>  async dispatch => {
    try {
        const url = `${API_HOST}/contact`;
        console.log('URL: ', url);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log('Success: ', data);
        
        dispatch(loadInitialPeopleSuccess(data));
    } catch (error) {
        dispatch(displayAlert(error));
    }
};

export const displayAlert = text => () => {
    console.log(`Failure! ${text}`);
};
