import './Card.scss';
import { categories } from '../../helper/data';
import { useState } from 'react';

const Itemss = ({ name, image, options }) => {
  const [content, setContent] = useState(true);
  return (
    <div>
      {content ? (
        <div
          className="card-container-div"
          onClick={() => setContent(!content)}
        >
          <img src={image} alt="" className="card-container-img" />
          <div className="card-container-p">
            <p className="card-container-p">{name}</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setContent(!content)}
          className="card-container-div"
        >
          <div className="card-container-p">
            <p>{options[0]}</p>
          </div>
          <div className="card-container-p">
            <p>{options[1]}</p>
          </div>
          <div className="card-container-p">
            <p>{options[2]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = () => {
  return (
    <div className="card-container">
      {categories.map((item, index) => {
        return (
          <Itemss
            name={item.name}
            image={item.img}
            options={item.options}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Card;
