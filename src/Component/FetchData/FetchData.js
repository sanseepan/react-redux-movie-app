
const BASE_URL = 'https://crudend.app.sbb.ch/api/';

const fetchJson = async (uri, method, payload) => {
    const response = await fetch(BASE_URL + uri, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload ? JSON.stringify(payload) : undefined
    });
    return response.json();
};

export default fetchJson;

