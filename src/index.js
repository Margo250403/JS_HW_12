import {data} from './data';
import "./style.css";

const container = document.querySelector('.user-card');

const createHTMLlist = ({id,name, age, email, country, company,birthday}) =>
    `<li> id: ${id}</li>
    <li> name: ${name}</li>
    <li> age: ${age}</li>
    <li> email: ${email}</li>
    <li> country: ${country}</li>
    <li> company: ${company}</li>
    <li> birthday: ${birthday}</li> `
    
const render = () => {
    const list = data.map((item) => {
        const userCard = document.createElement('ul');
        userCard.className = "user-block"
        userCard.innerHTML = createHTMLlist(item);
        return userCard;       
    });
    container.append(...list);
}
render();
