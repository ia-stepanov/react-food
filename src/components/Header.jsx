import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">Обо мне</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <a
              href="https://github.com/ia-stepanov?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Проекты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
