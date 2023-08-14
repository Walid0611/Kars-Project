import React from 'react';
import './KarsCard.css';
import { useNavigate } from 'react-router-dom';
import { DeleteCar } from '../../api/AuthCars';

const KarsCard = ({ mini, getAllKars }) => {
  const navigate = useNavigate();

  const navigateKars = () => {
    navigate(`/update/${mini._id}`);
  };

  const handleDelete = async () => {
    try {
      await DeleteCar(mini._id);
      getAllKars(); // Fetch the updated car list
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };


  return (
    <div className='bodyCardCards'>
      <div className="background" />
      <div className="background-texture" />
      <section className="carousel">
        <div className="carousel__container">
          <div className="carousel-item">
            <span>{mini.name}</span>
            <img
              className="carousel-item__img"
              src={mini.image}
              alt="cars"
            />
            
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle" />
                <span className="fas fa-plus-circle" />
              </div>
              <h5 className="carousel-item__details--title">{mini.categories}</h5>
              <h6 className="carousel-item__details--subtitle">
                {mini.model}
              </h6>
              <div className="buttons-container">
                <button className="update-button" onClick={navigateKars}>Update Modification</button>
                 <button className="delete-button" onClick={handleDelete}>X</button>
              </div>
            </div>
            
            <button className="bn30" onClick={async () => { await getAllKars(); }}> </button>
          </div>
          {/* ... */}
        </div>
      </section>
    </div>
  );
};

export default KarsCard;
