import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar componentBox">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/bitcoin">Bitcoin Rates</Link>
        </nav>
    );
};

export default Navbar;