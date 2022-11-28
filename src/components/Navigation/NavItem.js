import { Link } from "react-router-dom";

export default function NavItem({ children, to }) {
  return (
    <li className='mb-2'>
      <Link to={to}>{children}</Link>
    </li>
  );
}
