export default function MenuItems() {
    return (
        <nav className="header-nav">
            <ul>
                <li className=""><a href="/magazine/" className="header-magazine-link">Magazine</a></li>
                <li><a href="https://maps.roadtrippers.com/trips" className="header-guides-link" target="_blank" rel="noopener noreferrer">Trip Guides</a></li>
                <li className=""><a href="/voices/" className="header-voices-link">Voices</a></li>
                <li><a href="https://maps.roadtrippers.com" className="header-planner-link" target="_blank" rel="noopener noreferrer">Trip Planner</a></li>
            </ul>
        </nav>
    )
}