import { parseCookies } from 'nookies'

export default ctx => {
    const { 'auth.token': authToken, 'auth.clientpermission': clientPermission } = parseCookies(ctx)

    console.log('un auth page')    

    if(authToken){
        switch(clientPermission){
            case 'normalUser':
                return {
                    redirect: {
                        destination: '/lista-saloes?redirect=true',
                        permanent: false
                    }
                }
                break;
            default:
                console.log('client permission not identified')
                break;
        
        }
        
    }

}
