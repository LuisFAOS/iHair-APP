import { parseCookies } from 'nookies'

export default (ctx, necessaryRole) => {
    const { 'auth.token': authToken, 'auth.clientpermission': clientPermission } = parseCookies(ctx)
    
    if(!authToken || clientPermission !== necessaryRole) {
        return {
            redirect: {
                destination: '/login?redirect=true',
                permanent: false
            }
        }
    }
}
