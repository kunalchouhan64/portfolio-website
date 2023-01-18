import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <>
            {
                isAuthenticated ? <button className='py-[0.28rem] shadow-2xl shadow-slate-300 px-4 border-2 border-slate-700 rounded-xl' onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button> : <button onClick={() => loginWithRedirect()} className='py-[0.28rem] shadow-2xl shadow-slate-300 px-4 border-2 border-slate-700 rounded-xl' > Log In</button >
            }


        </>
    )


};

export default LoginButton;



