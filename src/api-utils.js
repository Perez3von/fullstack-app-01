
const base_url = 'https://pure-oasis-32518.herokuapp.com';

export const getPeople = async () => {

    let res = await fetch(`${base_url}/people`);

    let data = await res.json();

    return data;

}

export const getPerson = async (id) => {

    let res = await fetch(`${base_url}/people/${id}`);
console.log(res)
    let data = await res.json();

    return data;

}
