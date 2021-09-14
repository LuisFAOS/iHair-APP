import { useContext } from 'react';
import { useRouter } from 'next/router'
import AuthContext from '../../context/Auth'

import Spinner from '../../components/Spinner'

const withUnAuth = Component => {
    const UnAuth = props => {

        const { isSigned, isLoading } = useContext(AuthContext);

        const LoadingContainer = (
            <div style={{height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <Spinner size="large" color="#DC3545"/>
            </div>
        )
        
        if (isLoading){ 
            console.log('loading page...')
            return LoadingContainer
        }
        
        if(isSigned){
            console.log('replacing to lista-saloes!')
            window.location.replace('http://localhost:3000/lista-saloes?redirect=true')

            return LoadingContainer
        }
        
        return <Component {...props}/>

    };

    if (Component.getInitialProps) {
        UnAuth.getInitialProps = Component.getInitialProps;
    }

    return UnAuth;
};

export default withUnAuth;
