import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

const Layout = ({ session }) => {

    return (
        <>
            <Navigation session={session} />
            <Outlet session={session} />
        </>
    );
}

export default Layout;