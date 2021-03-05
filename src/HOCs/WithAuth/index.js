import { useContext } from 'react';
import { useRouter } from 'next/router'
import AuthContext from '../../AuthContext'

import Loading from '../../components/Loading'

const withAuth = Component => {
    const Auth = props => {

        const { isSigned, loading, authDatas } = useContext(AuthContext);
        const router = useRouter()

        const LoadingContainer = (
            <div style={{height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <Loading size="large" color="#DC3545"/>
            </div>
        )
        
        if (loading) {
            return LoadingContainer
        }

        if(!isSigned || (authDatas && authDatas.client.permissionOf !== 'normalUser')){
            router.push({
                pathname: '/login',
                query: {
                    redirect: true
                }
            })
                
            return LoadingContainer
        }

        return <Component {...props}/>
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;