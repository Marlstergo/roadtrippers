import Burger from "./Burger";
import InitialActions from "./InitialActions";
import MenuItems from "./MenuItems";


function Header() {
    return (
        <header className="main-header">
            <div className="main-header-inner">
                <div className="header-left">
                    <Burger />
                    <a href="https://roadtrippers.com" className="header-logo-full">Roadtrippers</a>
                    <a href="https://roadtrippers.com" className="header-logo-icon">Roadtrippers</a>
                    <span className="section-title desktop-hide"></span>
                    <MenuItems />
                </div>
                <div className="header-right">
                    <InitialActions />
                </div>
                <div className="clear"></div>
            </div>
        </header>
    )
}
export default Header;
