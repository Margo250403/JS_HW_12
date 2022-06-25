import {data} from './data';

const createHTMLcards = ({id,name, age, email, country, company,birthday}) =>
    `<li>${id}</li>
    <li>${name}</li>
    <li>${age}</li>
    <li>${email}</li>
    <li>${country}</li>
    <li>${company}</li>
    <li>${birthday}</li> `
    
const container = document.querySelector('.user-card');

const render = () => {
    const list = data.map((item) => {
        const userCard = document.createElement('ul');
        userCard.innerHTML = createHTMLcards(item);
        return userCard;       
    });
    // container.appendChild(list);
    console.log(list)
}
render();
