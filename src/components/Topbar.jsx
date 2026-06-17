import { useAuth } from '../context/AuthContext.jsx';
import avatarAnderson from '../assets/avatar-anderson.png';
import Icon from './Icon.jsx';

export default function Topbar({ current = 'Parâmetros' }) {
  const { auth } = useAuth();
  const userName = auth?.username || 'Professor';
  const role = auth?.role || 'PROFESSOR';

  return (
    <header className="topbar">
      <h1 className="topbar__breadcrumb">
        <span>Criar Caso &gt;</span> {current}
      </h1>

      <button className="profile" type="button">
        <img alt="" className="profile__avatar" src={avatarAnderson} />
        <span className="profile__copy">
          <strong>{userName}</strong>
          <small>{role}</small>
        </span>
        <Icon name="chevronDown" size={10} />
      </button>
    </header>
  );
}
