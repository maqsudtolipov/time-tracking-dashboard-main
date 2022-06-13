import './Card.scss';

import image from '../../assets/headers/icon-ellipsis.svg';

const Card = (props) => {
  const time = props.timeframes[props.time.toLowerCase()];
  return (
    <div
      className={`card card--${props.title.toLowerCase().replace(' ', '-')}`}
    >
      <div className='card__content'>
        <div className='card__head'>
          <span className='card__title'>{props.title}</span>
          <img className='card__icon' src={image} alt='icon' />
        </div>
        <div className='card__body'>
          <h1 className='card__time'>{time.current}hrs</h1>
          <div className='card__last-time'>Last Week - {time.previous}hrs</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
