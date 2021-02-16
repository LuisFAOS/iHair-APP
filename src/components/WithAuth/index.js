import { useContext } from 'react';
import AuthContext from '../../AuthContext'

import Login from '../../pages/login'

const withAuth = Component => {
    const Auth = (props) => {

        const { isSigned } = useContext(AuthContext);

        if (!isSigned) {
            return (
                <>
                    <Login />
                </>
            );
        }

        return (
            <Component {...props} />
        );
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;