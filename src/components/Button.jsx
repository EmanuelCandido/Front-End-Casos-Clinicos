import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function Button({
  children,
  icon,
  iconPosition = 'left',
  loading = false,
  onClick,
  to,
  variant = 'secondary',
  disabled = false,
}) {
  const content = (
    <>
      {loading && <span className="button__spinner" />}
      {!loading && icon && iconPosition === 'left' && <Icon name={icon} size={20} />}
      <span>{loading ? 'Gerando...' : children}</span>
      {!loading && icon && iconPosition === 'right' && <Icon name={icon} size={20} />}
    </>
  );

  if (to && !disabled && !loading) {
    return (
      <Link className={`button button--${variant}`} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`button button--${variant}`}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
}
