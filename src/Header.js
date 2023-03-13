import { ReactComponent as Logo } from './assets/shared/logo.svg';

function Header() {
  return (
    <header>
      <div className='logo'><Logo /></div>
      <button>Pre-order now</button>
    </header>
  );
}

export default Header;
