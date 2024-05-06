import { Link } from "react-router-dom";
import headerSVG from "../images/header.svg";

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={headerSVG} alt="header" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/user/register">登録</Link>
            </li>
            <li>
              <Link to="/user/login">ログイン</Link>
            </li>
            <li>
              <Link to="/item/create">アイテム作成</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
