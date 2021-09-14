export default function InitialActions() {
    return (
        <>
            <a data-target="#login" data-location="header log in" className="header-login popup-opener quick-login" href="/">Log in</a>
            <a data-location="header sign up" data-state="register" className="header-signup authorize-with-roadpass get-started round-button green-button mobile-hide" href="/">Sign up</a>
            <a className="header-logout rtauth-logout rtauth-hidden" href="/">Sign out</a>
            <div className="rt-user-img rtauth-hidden"></div>
        </>
    )
}