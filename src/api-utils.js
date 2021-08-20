
const base_url = 'https://pure-oasis-32518.herokuapp.com';

export const getPeople = async () => {

    let res = await fetch(`${base_url}/people`);

    let data = await res.json();

    return data;

}

export const getPerson = async (id) => {

    let res = await fetch(`${base_url}/people/${id}`);

    let data = await res.json();
    
    return data;

}

export const getColors = async (info) => {

    let res = await fetch(`${base_url}/colors`);

    let data = await res.json();
    
    return data;

}

export const updatePerson = async (personData) => {

    const resp = await fetch(`${base_url}/people/${personData.id}`,
        {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(personData),
        });


const data = await resp.json();

return data;


}

// const createPerson; 