import { currentUser } from '../services/caseMock.js';
import Icon from './Icon.jsx';

export default function Topbar({ current = 'Parâmetros' }) {
  return (
    <header className="topbar">
      <h1 className="topbar__breadcrumb">
        <span>Criar Caso &gt;</span> {current}
      </h1>

      <button className="profile" type="button">
        <img alt="" className="profile__avatar" src={currentUser.avatar} />
        <span className="profile__copy">
          <strong>{currentUser.name}</strong>
          <small>{currentUser.course}</small>
        </span>
        <Icon name="chevronDown" size={10} />
      </button>
    </header>
  );
}
