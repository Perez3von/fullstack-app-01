
const base_url = 'https://pure-oasis-32518.herokuapp.com';

export const getPeople = async () => {

    let url = `${base_url}/people`;
    let res = await fetch(url);
    let data = res.json();
    return data;

}