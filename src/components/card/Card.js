import './Card.scss';
import { useState } from 'react';
import { categories } from '../../helper/data';

const Card = () => {
  console.log(categories);
  const [content, setContent] = useState(true);

  const clickHandler = () => {
    content ? setContent(false) : setContent(true);
  };

  return (
    <div className="card-container" onClick={clickHandler}>
      {content &&
        categories.map((item, idx) => {
          return (
            <ul key={idx} className="card-container-ul">
              <img src={item.img} alt="" className="card-container-img" />
              <li className="card-container-p">
                <p className="card-container-p">{item.name}</p>
              </li>
            </ul>
          );
        })}
      {!content &&
        categories.map((item, idx) => {
          const { options } = item;
          return (
            <ul key={idx} className="card-container-ul">
              <li className="card-container-p">
                <p>{options[0]}</p>
              </li>
              <li className="card-container-p">
                <p>{options[1]}</p>
              </li>
              <li className="card-container-p">
                <p>{options[2]}</p>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default Card;
