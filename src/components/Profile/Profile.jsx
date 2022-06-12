import './Profile.scss';
import avatar from '../../assets/image-jeremy.png';

const Profile = (props) => {
  return (
    <div className='profile'>
      <div className='profile__header'>
        <img className='profile__avatar' src={avatar} alt='avatar' />
        <span className='profile__subheading'>Report for</span>
        <h1 className='profile__name'>Jeremy Robson</h1>
      </div>
      <ul className='profile__links'>
        <li className='profile__link'>Daily</li>
        <li className='profile__link'>Weekly</li>
        <li className='profile__link'>Monthly</li>
      </ul>
    </div>
  );
};

export default Profile;
