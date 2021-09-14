import { useContext } from 'react';
import { useRouter } from 'next/router'
import AuthContext from '../../context/Auth'

//import Login from '../../pages/login'
import Loading from '../../components/Spinner'

const withAuth = (Component, NecessaryRole) => {
    const Auth = props => {

        const { isSigned, isLoading, authClient } = useContext(AuthContext);
        
        const router = useRouter()

        const LoadingContainer = (
            <div style={{height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <Loading size="large" color="#DC3545"/>
            </div>
        )

        console.log(`is signed: ${isSigned}, component: ${Component.name}, necessary role: ${NecessaryRole}`)
        console.log(authClient)
        if (isLoading){ 
            console.log('loading page...')
            return LoadingContainer
        }
        
        if((isSigned && authClient.permissionOf === NecessaryRole) || (!isSigned && NecessaryRole === "NoRoleNecessary")){
            console.log('show page')
            return <Component {...props}/>
        }

        else if(!isSigned && NecessaryRole !== "NoRoleNecessary") {
            console.log('replacing to login!')
            router.push('/login?redirect=true')

            return LoadingContainer
        }
        else if(isSigned && NecessaryRole === 'NoRoleNecessary'){
            console.log('pushing to lista-saloes')
            router.push('/lista-saloes?redirect=true')
    
            return LoadingContainer
        }
        

    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth;
};

export default withAuth;
