import { FC } from 'react';

interface IHeaderProps {
  name?: string
}

const Header: FC<IHeaderProps> = ({ name }) => (
  <div className="header">{`Hello${name ? ` ${name}` : ''}`}</div>
);

export default Header;
