import './Profile.scss';
import avatar from '../../assets/image-jeremy.png';

const Profile = (props) => {
  const handleChangeTime = (e) => {
    props.setTime(e.target.textContent);
  };

  return (
    <div className='profile'>
      <div className='profile__header'>
        <img className='profile__avatar' src={avatar} alt='avatar' />
        <span className='profile__subheading'>Report for</span>
        <h1 className='profile__name'>Jeremy Robson</h1>
      </div>
      <ul className='profile__links'>
        <li
          className={`profile__link ${
            props.time === 'Daily' ? 'profile__link--active' : ''
          }`}
          onClick={handleChangeTime}
        >
          Daily
        </li>
        <li
          className={`profile__link ${
            props.time === 'Weekly' ? 'profile__link--active' : ''
          }`}
          onClick={handleChangeTime}
        >
          Weekly
        </li>
        <li
          className={`profile__link ${
            props.time === 'Monthly' ? 'profile__link--active' : ''
          }`}
          onClick={handleChangeTime}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default Profile;
