import './Card.css';

function Card({name, description, image}) {
    return(
        <div className='card'>
            <img src={image} alt="Profile Picture" className='profile-pic'/>
            <div className='card-content'>
                <h3 className='name'>{name}</h3>
                <p className='description'>{description}</p>

            </div>
        </div>
    );
};

export default Card;