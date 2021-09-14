import iconPlan from '../img/search/icon-plan.png';
import iconExplore from '../img/search/icon-explore.png';
import heroImage from '../img/hero/pic.jpg';
import imgPopular from "../img/mobile-looking/popular.svg?v=2";
import imgFuelUp from "../img/mobile-looking/fuel-up.svg";
import imageDefaultArtwork from "../img/landing-page/mobile-cta-default-artwork.png";
import imageSquiggle from "../img/decoration/squiggle.svg";
import imagePlannerLeft from "../img/landing-page/planner-module-beans-left-mobile.png";
import imagePlannerRight from "../img/landing-page/planner-module-beans-right-mobile.png";

const mobileIcons = [
    {hex: "#ff7f00", category: "Popular", img: imgPopular},
    {hex: "#00aea4", category: "Dinner", img: imgFuelUp},
    {hex: "#1e2b49", category: "Book a Hotel", img: imgPopular},
    {hex: "#00aea4", category: "Bars & Pubs", img: imgPopular},
    {hex: "#48214b", category: "Entertainment", img: iconExplore},
    {hex: "#0054a6", category: "Fuel Up", img: imgFuelUp},
]

function MakeIcon(props) {
    return (
        <div className="slick-slide slick-active" data-slick-index={props.index} aria-hidden="false" style={{width: '87px'}}>
            <div>
                <a href="/" className="mobile-looking__item" data-selection={props.category} tabIndex="0" style={{width: '100%', display: 'inline-block'}}>
                    <div className="mobile-looking__icon" style={{backgroundColor: props.hex}}>
                        <img className="lazy lazy-loaded" alt="" src={props.img} />
                    </div>
                    {props.category}
                </a>
            </div>
        </div>
    )
}

export default function MainContent() {
    return (
        <div className="main-wrapper">
            <main className="page-content main-hero">
                <div id="page" className="planner-widget">
                    <div className="container">
                        <section className="hero">
                            <div className="hero__cover">
                                <div className="hero__poster">
                                    <img src={heroImage} alt="" />
                                </div>
                            </div>
                            <div className="grid-row">
                                <div className="grid_5 alpha">
                                    <h1 className="hero__title h2">Turn your road trip into an <span>adventure</span>.</h1>
                                    <h2 className="hero__subtitle h5">Build your route in Roadtrippers and then use our turn-by-turn navigation to lead the way.</h2>
                                    <div className="mobile-looking" data-daypart="3">
                                        <div className="mobile-looking__title">Good evening! What are you looking for?</div>
                                        <div className="mobile-looking__carousel slick-initialized slick-slider">
                                            <div className="slick-list draggable">
                                                <div className="slick-track" style={{opacity: 1, width: '0px', transform: "translate3d(0px, 0px, 0px)"}}>
                                                    {mobileIcons.map((icon,index) => <MakeIcon key={index} {...icon} />)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <a href="/maps/trips" className="hero__button action-button" data-event-name="Browse Trip Guides">Browse Trip Guides</a>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                        <div className="search grid_8 alpha">
                            <div className="search__title">Let's get started</div>
                            <div className="search__options">
                                <a href="/" data-target="search-1" className="removed-mb removed-mbl js__tab js__tab_active action-button" data-event-name="Plan Your Trip">
                                    <img src={iconPlan} width="26" height="24" alt="" />
                                    <span>Plan Your Trip</span>
                                </a>
                                <a href="/" data-target="search-2" className="removed-mb removed-mbl js__tab action-button" data-event-name="Explore Places">
                                    <img src={iconExplore} width="23" height="19" alt="" />
                                    <span>Explore Places</span>
                                </a>
                            </div>
                            <div></div>

                            <form data-tab="search-1" className="search__form js__tab-target js__tab-target_active">
                                <div className="search__group">
                                    <label className="search__label">Starting from</label>
                                    <input type="text" className="search__input search_input_from" autoComplete="off" />
                                    <div className="search__autocomplete search_autocomplete_from">
                                    <ul>
                                    </ul>
                                    </div>
                                    <div className="autocomplete_error search_input_from_error">Valid location required</div>
                                </div>
                                <div className="search__group">
                                    <label className="search__label">Destination</label>
                                    <input type="text" className="search__input search_input_to" autoComplete="off" />
                                    <div className="search__autocomplete search_autocomplete_to">
                                    <ul>
                                    </ul>
                                    </div>
                                    <div className="autocomplete_error search_input_to_error">Valid location required</div>
                                </div>

                                <button type="button" className="search__button plan_trip_search_button">
                                    Plan Trip	</button>
                                <div className="persona-toggle">
                                    <span className="persona-toggle-label">Plan your trip for</span>
                                    <a className="persona-toggle-option persona-toggle-option-rv" href="/" data-persona-option="rv">RV Travel</a>
                                    <a className="persona-toggle-option persona-toggle-option-auto active" href="/" data-persona-option="auto">Auto Travel</a>
                                </div>
                            </form>

                            <form data-tab="search-2" className="search__form js__tab-target" onKeyDown={(event) => event.key !== 'Enter'}>
                                <div className="search__group search__group_l">
                                    <label className="search__label">Where would you like to Explore?</label>
                                    <input type="text" className="search__input" id="search_input_places" autoComplete="off" />

                                    <div className="search__autocomplete" id="search_autocomplete_places">
                                    <ul>
                                    </ul>
                                    </div>
                                    <div className="autocomplete_error" id="search_input_places_error">Valid location required</div>
                                </div>
                                <button type="button" className="search__button search__button_l" id="explorer_search_button">Explore</button>
                            </form>
                        </div>
                        <div className="clear"></div>
                    </section>
                </div>
            </div>

            <div className="landing-page-content user-guest non-rver user-loaded">
                <div className="page-content-item display-all display-all-persona mobile_app_cta-module  mobile-device-display">
                    <div className="mobile-cta-module-inner text-center">
                        <img src={imageDefaultArtwork} alt="Download the mobile app to plan on the go." className="lazy mobile-cta-artwork lazy-loaded" />
                            <h3>Download the mobile app to plan on the go.</h3>
                        <img src={imageSquiggle} className="lazy mobile-cta-module-squiggle lazy-loaded" alt="" />
                            <p>Share and plan trips with friends while discovering millions of places along your route.</p>
                        <a href="/app/demo" className="wp-block-button__link green-button mobile-app-cta-button lg-button" target="_blank" rel="noreferrer">Get the App</a>
                        </div>
                    </div>
                    <div className="page-content-item display-all display-all-persona features-module white-bg non-mobile-device-display">
                        <div className="features-module container">
                            <div className="feature dynamic-image">
                                <a href="/map">
                                    <div className="feature-image grid_3 omega">
                                        <img className="lazy lazy-loaded" src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2019/11/RT_flow-01-720x720.png" alt="Discover amazing stops along your route" />
                                    </div>
                                </a>
                                <div className="media-copy grid_5 alpha">
                                    <h3 className="media-title">Discover amazing stops along your route</h3>
                                    <div className="media-paragraph"><p>Tell us where you want to go and what you’re into. Roadtrippers will help you find all the best stops along the way.</p>
                                    </div>
                                    <div className="wp-block-button is-style-outline">
                                        <a href="/maps" className="wp-block-button__link">Start Exploring</a>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="feature dynamic-image">
                                <a href="https://roadtrippers.com/about/app/">
                                    <div className="feature-image grid_3 omega">
                                        <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2019/11/RT_flow1-01-1-720x720.png" alt="Hit the road with the app when you're ready" />
                                    </div>
                                </a>
                                <div className="media-copy grid_5 alpha">
                                    <h3 className="media-title">Hit the road with the app when you're ready</h3>
                                    <div className="media-paragraph"><p>Sync your trip to your phone, and then let Roadtrippers lead the way with turn-by-turn navigation.</p>
                                    </div>
                                    <div className="wp-block-button is-style-outline">
                                        <a href="https://roadtrippers.com/about/app/" className="wp-block-button__link">Download the App</a>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content-item display-all display-nonrver icon_set-module white-bg all-devices-device-display">
                        <div className="icon-set-module container">
                            <div className="grid_8">
                                <h2>What our users are saying</h2>
                            </div>
                            <div className="clear"></div>
                            <div className="icons-wrapper small-icons">
                                <div className="icon-set-item grid_2 ">
                                    <p>"This app is beautiful. It isn't enough that it helps you find amazing places—you can also plan a trip to all of them. I see many more weekend trips in my future!"</p>
                                </div>
                                <div className="icon-set-item grid_2 ">
                                    <p>"Yes after 5 days of using 3 maps, 5 apps and I found Roadtrippers. I was telling my boyfriend as we sat in the RV and started crying as I described it to him. Lol. Happy days."</p>
                                </div>
                                <div className="icon-set-item grid_2 ">
                                    <p>"Fantastic! Really useful with road trips and with finding things in my city I didn't know existed. Seriously I recommend it to everyone, I love it!"</p>
                                </div>
                                <div className="icon-set-item grid_2 ">
                                    <p>"I’m planning a 60 day road trip and this app makes it so much fun and far less work!! I couldn’t imagine trying to plan a trip without it now."</p>
                                </div>
                                <div className="clear"></div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>

                    <div className="page-content-item display-all display-all-persona video-module  all-devices-device-display">

                        <div className="video-module wp-block-embed-video">
                            <div className="container">
                                <div className="grid_8">
                                    <div className="wp-block-embed__wrapper">
                                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden" data-lazy-type="iframe" data-lazy-src="<iframe src=&quot;https://www.youtube.com/embed/NW45g1Cv8QY?feature=oembed&amp;rel=0&amp;modestbranding=1&quot; frameborder=&quot;0&quot; allow=&quot;accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture&quot; allowfullscreen=&quot;&quot;></iframe>" alt="" />
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content-item display-all display-all-persona title_paragraph-module white-bg all-devices-device-display">
                        <div className="paragraph-module container small-text">
                            <div className="grid_6 push_1">
                                <h2>The #1 road trip planner</h2>

                                <p>Plan your next road trip route with Roadtrippers. Enter where you want to start and finish your road trip, and then discover the coolest “off the beaten path” places along the way. Our database includes millions of the world’s most fascinating places, making planning the unexpected easier than you thought. Road trip route planning can be tedious… and what do you get from it? Most of what you find online will funnel you into the same places, filled with other travelers. It can feel like you need a local guide to get an authentic experience on your trip, but Roadtrippers helps you escape the tourist bubble and find the coolest stops.</p>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="page-content-item display-all display-nonrver trip_planner-module white-bg non-mobile-device-display">
                        <div className="planner-widget form-planner ">
                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden planner-module-beans planner-module-bean-left-desktop" alt="" />
                            <img src={imagePlannerLeft} data-lazy-type="image" className="lazy planner-module-beans planner-module-bean-left-mobile lazy-loaded" alt="" />
                                <div className="container">
                                <div className="planner-module-header text-center">
                                    <h2 className="grid_6 push_1">Plan your trip now</h2>
                                    <div className="clear"></div>
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden planner-module-squiggle" alt="" />
                                        <p>
                                    Discover the most incredible places and experiences worth the detour.</p>
                                    <form data-tab="search-1" className="search__form js__tab-target js__tab-target_active">
                                    <div className="search__group">
                                    <label className="search__label">Starting from </label>
                                    <input type ="text" className="search__input search_input_from" autoComplete="off" />
                                    <div className="search__autocomplete search_autocomplete_from">
                                    <ul>
                                    </ul>
                                    </div>
                                    <div className="autocomplete_error search_input_from_error">Valid location required</div>
                                    </div>
                                    <div className="search__group">
                                    <label className="search__label">Destination</label>
                                    <input type ="text" className="search__input search_input_to" autoComplete="off" />
                                    <div className="search__autocomplete search_autocomplete_to">
                                    <ul>
                                    </ul>
                                    </div>
                                    <div className="autocomplete_error search_input_to_error">Valid location required</div>
                                    </div>

                                    <button type ="button" className="search__button plan_trip_search_button">
                                    Plan Trip	</button>
                                    <div className="persona-toggle">
                                    <span className="persona-toggle-label">Plan your trip for</span>
                                    <a className="persona-toggle-option persona-toggle-option-rv" href="/" data-persona-option="rv">RV Travel</a>
                                    <a className="persona-toggle-option persona-toggle-option-auto active" href="/" data-persona-option="auto">Auto Travel</a>
                                    </div>
                                    </form>
                                </div>
                            </div>
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden planner-module-beans planner-module-bean-right-desktop" alt="" />
                                    <img src={imagePlannerRight} className="lazy planner-module-beans planner-module-bean-right-mobile lazy-loaded" alt="" />
                                </div>

                                </div>

                                <div className="page-content-item display-all display-nonrver mixed_content-module  all-devices-device-display">
                                    <div className="container mixed-content-module-container ">
                                        <div className="mixed-content-wrapper">
                                            <div className="mixed-content-header">
                                                <h2>Classic road trips</h2>
                                                <div className="mixed-content-description"><p>America invented the road trip, but which are the greatest of the great?</p>
                                                </div>
                                            </div>
                                            <div className="mixed-content-items">
                                                <div className="mixed-content-item-wrapper grid_third alpha ">


                                                    <a href="https://roadtrippers.com/the-ultimate-guide-route-66/" className="post-list-item-sm">
                                                        <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2019/01/route-66-road-500x480.jpg" alt="The Ultimate Guide to Route 66" />
                                                    <h3 className="list-item-sm-header"><span>The Ultimate Guide to Route 66</span></h3>
                                                    </a>

                                                </div>

                                                <div className="mixed-content-item-wrapper grid_third  ">


                                                    <a href="https://maps.roadtrippers.com/trips/10380386" className="post-list-item-sm">
                                                        <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://assets2.roadtrippers.com/uploads/trip/uploaded_image/10380386/-quality_60_-interlace_Plane_-resize_960x416_U__-gravity_center_-extent_960x416/trip-uploaded_image-a447f06c-3d5c-43e9-a344-c350a7f8e212.jpg" alt="Must Drive: The Blue Ridge Parkway connects 2 national parks" />
                                                        <h3 className="list-item-sm-header"><span>Must Drive: The Blue Ridge Parkway connects 2 national parks</span></h3>
                                                    </a>

                                                </div>

                                                <div className="mixed-content-item-wrapper grid_third  omega">


                                                    <a href="https://roadtrippers.com/tail-of-the-dragon/" className="post-list-item-sm">
                                                        <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/10/dragon-500x500.jpg" alt="The Tail of the Dragon" />
                                                        <h3 className="list-item-sm-header"><span>The Tail of the Dragon</span></h3>
                                                    </a>

                                                </div>

                                                <div className="clear"></div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="more-button-wrapper wp-block-button is-style-outline text-center">
                                                <a href="https://maps.roadtrippers.com/collections/classic-usa-road-trips-4" className="wp-block-button__link sm-button" target="_blank" rel="noreferrer">More like this</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="page-content-item display-all display-nonrver generic_cta-module  all-devices-device-display">
                                    <div className="container generic-cta-container">
                                        <div className="grid_6 push_1 generic-cta-wrapper">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden generic-cta-module-beans generic-cta-bean-left" alt="" />
                                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden generic-cta-beans generic-cta-bean-right" alt="" />
                                            <div className="generic-cta bg-light-green">
                                            <h3>Enter the Road Trip Hall of Fame</h3>
                                            <p className="generic-cta-copy">Check out our favorite trips submitted by your fellow roadtrippers.</p>
                                            <a href="/" className="wp-block-button__link green-button lg-button">Take me there</a>
                                            </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <div className="page-content-item display-all display-all-persona mixed_content-module  all-devices-device-display">
                                        <div className="container mixed-content-module-container ">
                                            <div className="mixed-content-wrapper">
                                                <div className="mixed-content-header">
                                                    <h2>Explore our national parks</h2>
                                                    <div className="mixed-content-description"><p>Get tips from national park rangers!</p>
                                                    </div>
                                                </div>
                                                <div className="mixed-content-items">
                                                    <div className="mixed-content-item-wrapper grid_third alpha ">


                                                        <a href="https://roadtrippers.com/destinations/plan-your-trip-to-zion-national-park/" className="post-list-item-sm">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/06/zion-destionations-page-500x480.jpg" alt="Zion National Park" />
                                                        <h3 className="list-item-sm-header"><span>Zion National Park</span></h3>
                                                        </a>

                                                    </div>

                                                    <div className="mixed-content-item-wrapper grid_third  ">


                                                        <a href="https://roadtrippers.com/destinations/arches-national-park/" className="post-list-item-sm">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/04/arches-thumbnail-1-500x480.jpg" alt="Arches National Park" />
                                                            <h3 className="list-item-sm-header"><span>Arches National Park</span></h3>
                                                        </a>

                                                    </div>

                                                    <div className="mixed-content-item-wrapper grid_third  omega">


                                                        <a href="https://roadtrippers.com/destinations/badlands-national-park/" className="post-list-item-sm">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/04/badlands-thumbnail-1-500x480.jpg" alt="Badlands National Park" />
                                                            <h3 className="list-item-sm-header"><span>Badlands National Park</span></h3>
                                                        </a>

                                                    </div>

                                                    <div className="clear"></div>
                                                    <div className="mixed-content-item-wrapper grid_third alpha ">


                                                        <a href="https://roadtrippers.com/destinations/crater-lake-national-park/" className="post-list-item-sm">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/02/crater-lake-hero-2-500x680.jpg" alt="Crater Lake National Park" />
                                                            <h3 className="list-item-sm-header"><span>Crater Lake National Park</span></h3>
                                                        </a>

                                                    </div>

                                                    <div className="mixed-content-item-wrapper grid_third  ">


                                                        <a href="https://roadtrippers.com/destinations/glacier-national-park/" className="post-list-item-sm">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/04/glacier-thumbnail-500x480.jpg" alt="Glacier National Park" />
                                                            <h3 className="list-item-sm-header"><span>Glacier National Park</span></h3>
                                                        </a>

                                                    </div>

                                                    <div className="mixed-content-item-wrapper grid_third  omega">


                                                        <a href="https://roadtrippers.com/destinations/shenandoah-national-park/" className="post-list-item-sm">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/04/shenandoah-thumbnail-500x480.jpg" alt="Shenandoah National Park" />
                                                            <h3 className="list-item-sm-header"><span>Shenandoah National Park</span></h3>
                                                        </a>

                                                    </div>

                                                    <div className="clear"></div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="page-content-item display-all display-nonrver generic_cta-module  all-devices-device-display">
                                        <div className="container generic-cta-container">
                                            <div className="grid_6 push_1 generic-cta-wrapper">
                                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden generic-cta-module-beans generic-cta-bean-left" alt="" />
                                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="lazy lazy-hidden generic-cta-beans generic-cta-bean-right" alt="" />
                                                    <div className="generic-cta bg-light-blue">
                                                <h3>Are you an RVer?</h3>
                                                <p className="generic-cta-copy">Check out Roadtrippers' resources for RVers.</p>
                                                <a href="/" className="wp-block-button__link green-button lg-button">Go</a>
                                                </div>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>

                                        <div className="page-content-item display-all_not_plus display-all-persona image-module  all-devices-device-display">

                                            <div className="image-module">
                                                <div className="container">
                                                    <div className="grid_8">
                                                        <a href="https://roadtrippers.com/plus">
                                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2019/09/RT-Ad_190203_Space-2-1160x511.jpg" className="lazy lazy-hidden full-width" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-content-item display-all display-all-persona related_articles-module  all-devices-device-display">
                                            <div className="container single">
                                                <section className="stories stories_results block_articles new-stories-switch related-posts related-stories">
                                                    <div className="guides__select">
                                                        <h2>From Roadtrippers Magazine</h2>
                                                    </div>
                                                    <div className="grid-row">
                                                        <div className="related-row post-row">

                                                            <div className="grid_third stories__item-new-wrapper">
                                                                <a href="https://roadtrippers.com/magazine/alpine-inn-nebraska-raccoons/" className="stories__item stories__item-new stories-hover-color-1">
                                                                    <span className="stories__shape stories__shape_1"></span>
                                                                    <span className="stories__shape stories__shape_2"></span>
                                                                    <span className="stories__shape stories__shape_3"></span>
                                                                    <span className="stories__shape stories__shape_4"></span>
                                                                    <span className="stories__shape stories__shape_5"></span>
                                                                    <div className="stories__meta">
                                                                        <div className="stories__date">Sep 10th 2021</div>
                                                                        <div className="stories__tag"><span className="cat-3314 cat-slug-road-culture">Road Culture</span></div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <img className="lazy lazy-hidden stories__pic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2021/09/alpine-inn-raccoons-2-540x288.jpg" alt="At this Nebraska restaurant, hungry raccoons snacking on dinner scraps is the main event" />
                                                                    <div className="stories__cont">
                                                                    <h3 className="stories__heading">At this Nebraska restaurant, hungry raccoons snacking on dinner scraps is the main event</h3>
                                                                    <div className="stories__more">Read</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="grid_third stories__item-new-wrapper">
                                                                <a href="https://roadtrippers.com/magazine/isle-royale-national-park/" className="stories__item stories__item-new stories-hover-color-2">
                                                                    <span className="stories__shape stories__shape_6"></span>
                                                                    <span className="stories__shape stories__shape_7"></span>
                                                                    <span className="stories__shape stories__shape_8"></span>
                                                                    <span className="stories__shape stories__shape_9"></span>
                                                                    <span className="stories__shape stories__shape_10"></span>
                                                                    <div className="stories__meta">
                                                                        <div className="stories__date">Sep 7th 2021</div>
                                                                        <div className="stories__tag"><span className="cat-3315 cat-slug-great-outdoors">Great Outdoors</span></div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <img className="lazy lazy-hidden stories__pic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2021/09/IMG_0695-540x288.jpeg" alt="Ditch your car to experience Isle Royale, the least-visited national park in the contiguous U.S." />
                                                                    <div className="stories__cont">
                                                                    <h3 className="stories__heading">Ditch your car to experience Isle Royale, the least-visited national park in the contiguous U.S.</h3>
                                                                    <div className="stories__more">Read</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="grid_third stories__item-new-wrapper">
                                                                <a href="https://roadtrippers.com/magazine/chuck-a-burger-st-louis/" className="stories__item stories__item-new stories-hover-color-3">
                                                                    <span className="stories__shape stories__shape_11"></span>
                                                                    <span className="stories__shape stories__shape_12"></span>
                                                                    <span className="stories__shape stories__shape_13"></span>
                                                                    <span className="stories__shape stories__shape_14"></span>
                                                                    <span className="stories__shape stories__shape_15"></span>
                                                                    <div className="stories__meta">
                                                                        <div className="stories__date">Sep 3rd 2021</div>
                                                                        <div className="stories__tag"><span className="cat-3314 cat-slug-road-culture">Road Culture</span></div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <img className="lazy lazy-hidden stories__pic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2021/09/chuck-a-burger-5-540x288.jpg" alt="Crispy edges, classic cars, and a cherry on top: St. Louis’ Chuck-A-Burger thrives on good food and nostalgia" />
                                                                    <div className="stories__cont">
                                                                    <h3 className="stories__heading">Crispy edges, classic cars, and a cherry on top: St.Louis’ Chuck-A-Burger thrives on good food and nostalgia</h3>
                                                                    <div className="stories__more">Read</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="clear"></div>						<div className="clear"></div>
                                                        </div>

                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                        <div className="page-content-item display-all display-all-persona banner_ad-module  all-devices-device-display">
                                            <div className="ad-wrapper ad-728x90">
                                                <div style={{display: 'inline-block'}} className="dfp-ad-container">
                                                    <div id="div-gpt-ad-1538401743200-0" style={{height: '90px', width: '728px'}} className="dfp-ad">
                                                        {/* <script>
                                                            document.addEventListener('userReady', function(){
                                                                googletag.cmd.push(function () { googletag.display('div-gpt-ad-1538401743200-0'); });
                                                            });
                                                        </script> */}
                                                    </div>
                                                    <a href="https://maps.roadtrippers.com/plus">
                                                        <div className="dfp-ad-button" role="button">Remove Ads</div>
                                                    </a>
                                                </div>
                                            </div>	</div>
                                        <div className="page-content-item display-all display-all-persona subscribe-module  all-devices-device-display">
                                            <div className="container">
                                                <div className="subscription-wrapper">
                                                    <div className="subscription-inner-wrapper">
                                                        <div className="subscribe">
                                                            <div className="subscribe-body">
                                                                <h2 className="subscribe-subtitle">I want inspiring road trip stories, extraordinary destinations, and special offers sent right to my inbox.</h2>
                                                                <div className="subscribe-pic">
                                                                    <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2018/07/pic.png" width="390" height="242" alt="" />                                                                    
                                                                </div>
                                                                <form action="#" className="subscribe__form subscribe-form" method="post" id="homepage-signup">
                                                                    <label className="subscribe-label">Your Email Address</label>
                                                                    <input type="text" placeholder="myemail@somewhere.com" className="subscribe__input subscribe-input" />
                                                                    <div className="subscribe__hint subscribe-hint">Give us your email to receive awesome stories from the road right in your inbox.You can unsubscribe at any time by clicking on the link at the bottom of our emails.</div>
                                                                    <button type ="submit" className="wp-block-button__link purple-button subscribe__button lg-button">Subscribe</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>	</div>
                                        <div className="page-content-item display-all display-all-persona banner_ad-module  all-devices-device-display">
                                            <div className="ad-wrapper ad-728x90">
                                                <div style={{display: 'inline-block'}} className="dfp-ad-container">
                                                    <div id="div-gpt-ad-1538182701379-0" style={{height: '90px', width: '728px'}} className="dfp-ad">
                                                        {/* <script>
                                                            document.addEventListener('userReady', function(){
                                                                googletag.cmd.push(function () { googletag.display('div-gpt-ad-1538182701379-0'); });
                                                            });
                                                        </script> */}
                                                    </div>
                                                    <a href="https://maps.roadtrippers.com/plus">
                                                        <div className="dfp-ad-button" role="button">Remove Ads</div>
                                                    </a>
                                                </div>
                                            </div>	</div>
                                    </div>

                                </main>
                                <footer className="page-footer">

                                    <div className="container">
                                        <div className="footer-top">
                                            <div className="grid_5 footer-apps">
                                                <div className="keep-exploring">
                                                    <div className="keep-exploring__baloons">
                                                        <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
                                                            </div>
                                                    <p><strong>Keep exploring with the Roadtrippers mobile apps.</strong></p>
                                                    <p>Anything you plan or save automagically syncs with the apps, ready for you when you hit the road!</p>
                                                    <div className="fs0">
                                                        <a href="https://roadtrippers.onelink.me/oAFY/fc110aab" target="_blank" rel="noreferrer nofollow" className="keep-exploring__button">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="24" height="26" alt="" />
                                                                Download from <strong>Apple App Store</strong>
                                                            <div className="clear"></div>
                                                        </a>
                                                        <a href="https://roadtrippers.onelink.me/oAFY/b396cae" target="_blank" rel="noreferrer nofollow" className="keep-exploring__button">
                                                            <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="25" height="26" alt="" />
                                                                Download from <strong>Google Play Store</strong>
                                                            <div className="clear"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid_3 footer-social">
                                                <div className="keep-exploring">
                                                    <div className="keep-exploring__parrot">
                                                        <img className="lazy lazy-hidden" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
                                                    </div>
                                                    <p><strong>Connect with us and hit up #keepexploring</strong></p>
                                                    <p>Tall tales, trip guides, &amp; the world’s weird &amp; wonderful.</p>
                                                    <div className="fs0">
                                                        <a target="_blank" rel="noreferrer" href="https://twitter.com/roadtrippers" className="keep_exploring__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                                        </a>
                                                        <a target="_blank" rel="noreferrer" href="https://facebook.com/roadtrippers" className="keep_exploring__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                                                        </a>
                                                        <a target="_blank" rel="noreferrer" href="https://instagram.com/roadtrippers" className="keep_exploring__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M251.921,0.159 C183.503,0.159 174.924,0.449 148.054,1.675 C121.24,2.898 102.927,7.157 86.903,13.385 C70.337,19.822 56.288,28.436 42.282,42.441 C28.277,56.447 19.663,70.496 13.226,87.062 C6.998,103.086 2.739,121.399 1.516,148.213 C0.29,175.083 0,183.662 0,252.08 C0,320.497 0.29,329.076 1.516,355.946 C2.739,382.76 6.998,401.073 13.226,417.097 C19.663,433.663 28.277,447.712 42.282,461.718 C56.288,475.723 70.337,484.337 86.903,490.775 C102.927,497.002 121.24,501.261 148.054,502.484 C174.924,503.71 183.503,504 251.921,504 C320.338,504 328.917,503.71 355.787,502.484 C382.601,501.261 400.914,497.002 416.938,490.775 C433.504,484.337 447.553,475.723 461.559,461.718 C475.564,447.712 484.178,433.663 490.616,417.097 C496.843,401.073 501.102,382.76 502.325,355.946 C503.551,329.076 503.841,320.497 503.841,252.08 C503.841,183.662 503.551,175.083 502.325,148.213 C501.102,121.399 496.843,103.086 490.616,87.062 C484.178,70.496 475.564,56.447 461.559,42.441 C447.553,28.436 433.504,19.822 416.938,13.385 C400.914,7.157 382.601,2.898 355.787,1.675 C328.917,0.449 320.338,0.159 251.921,0.159 Z M251.921,45.55 C319.186,45.55 327.154,45.807 353.718,47.019 C378.28,48.139 391.619,52.243 400.496,55.693 C412.255,60.263 420.647,65.722 429.462,74.538 C438.278,83.353 443.737,91.745 448.307,103.504 C451.757,112.381 455.861,125.72 456.981,150.282 C458.193,176.846 458.45,184.814 458.45,252.08 C458.45,319.345 458.193,327.313 456.981,353.877 C455.861,378.439 451.757,391.778 448.307,400.655 C443.737,412.414 438.278,420.806 429.462,429.621 C420.647,438.437 412.255,443.896 400.496,448.466 C391.619,451.916 378.28,456.02 353.718,457.14 C327.158,458.352 319.191,458.609 251.921,458.609 C184.65,458.609 176.684,458.352 150.123,457.14 C125.561,456.02 112.222,451.916 103.345,448.466 C91.586,443.896 83.194,438.437 74.379,429.621 C65.564,420.806 60.104,412.414 55.534,400.655 C52.084,391.778 47.98,378.439 46.86,353.877 C45.648,327.313 45.391,319.345 45.391,252.08 C45.391,184.814 45.648,176.846 46.86,150.282 C47.98,125.72 52.084,112.381 55.534,103.504 C60.104,91.745 65.563,83.353 74.379,74.538 C83.194,65.722 91.586,60.263 103.345,55.693 C112.222,52.243 125.561,48.139 150.123,47.019 C176.687,45.807 184.655,45.55 251.921,45.55 Z" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path>
                                                                <path d="M251.921,336.053 C205.543,336.053 167.947,298.457 167.947,252.08 C167.947,205.702 205.543,168.106 251.921,168.106 C298.298,168.106 335.894,205.702 335.894,252.08 C335.894,298.457 298.298,336.053 251.921,336.053 Z M251.921,122.715 C180.474,122.715 122.556,180.633 122.556,252.08 C122.556,323.526 180.474,381.444 251.921,381.444 C323.367,381.444 381.285,323.526 381.285,252.08 C381.285,180.633 323.367,122.715 251.921,122.715 Z" id="Fill-4" fill="#FFFFFF"></path>
                                                                <path d="M416.627,117.604 C416.627,134.3 403.092,147.834 386.396,147.834 C369.701,147.834 356.166,134.3 356.166,117.604 C356.166,100.908 369.701,87.373 386.396,87.373 C403.092,87.373 416.627,100.908 416.627,117.604" id="Fill-5" fill="#FFFFFF"></path></svg>
                                                        </a>
                                                        <a target="_blank" rel="noreferrer" href="https://pinterest.com/roadtrippers" className="keep_exploring__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg>
                                                        </a>
                                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/roadtrippers" className="keep_exploring__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>

                                        <div className="footer-middle">
                                            <div className="grid_1 footer-about">
                                                <div className="quick-links">
                                                    <h6 className="quick-links__title">About</h6>
                                                    <div className="menu-menu-about-container"><ul id="menu-menu-about" className="quick-links__list"><li id="menu-item-19604" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19604"><a href="https://roadtrippers.com/about/">About Us</a></li>
                                                        <li id="menu-item-20762" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20762"><a href="https://roadtrippers.com/team/">Team</a></li>
                                                        <li id="menu-item-23537" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23537"><a href="https://roadtrippers.com/careers/">Careers</a></li>
                                                        <li id="menu-item-20764" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20764"><a target="_blank" rel="noreferrer noopener" href="https://togogroup.io/">Togo Group</a></li>
                                                        <li id="menu-item-26783" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26783"><a href="https://roadtrippers.com/about/road-trip-apps/">Mobile Apps</a></li>
                                                        <li id="menu-item-40934" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40934"><a href="https://roadtrippers.com/destinations/">Destinations</a></li>
                                                        <li id="menu-item-4155" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4155"><a target="_blank" rel="noreferrer noopener" href="https://support.roadtrippers.com">Support</a></li>
                                                        <li id="menu-item-43168" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43168"><a href="https://roadtrippers.com/media-center/">Media Center</a></li>
                                                        <li id="menu-item-19603" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19603"><a href="https://roadtrippers.com/contact/">Contact</a></li>
                                                    </ul></div>					</div>
                                            </div>

                                            <div className="grid_1 footer-tools">
                                                <div className="quick-links">
                                                    <h6 className="quick-links__title">Business Tools</h6>
                                                    <div className="menu-menu-business-tools-container"><ul id="menu-menu-business-tools" className="quick-links__list"><li id="menu-item-24736" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24736"><a href="https://roadtrippers.com/content-studio/">Content Studio</a></li>
                                                        <li id="menu-item-25270" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25270"><a href="https://roadtrippers.com/partnerships">Partnerships</a></li>
                                                        <li id="menu-item-20961" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20961"><a href="https://roadtrippers.com/creativecommunity/">Creative Community</a></li>
                                                    </ul></div>					</div>
                                            </div>

                                            <div className="grid_3 footer-products">
                                                <div className="quick-links">
                                                    <h6 className="quick-links__title">Other Products</h6>

                                                    <ul className="quick-links__list">
                                                        <li><a target="_blank" rel="noreferrer" href="https://togorv.com/?utm_medium=referral&amp;utm_source=rt&amp;utm_campaign=roadpress-footer">Togo RV<span className="removed-tb"><br />Your RV camping companion</span></a></li>
                                                        <li><a target="_blank" rel="noreferrer" href="https://www.rvillage.com/?utm_medium=referral&amp;utm_source=rt&amp;utm_campaign=roadpress-footer">RVillage<span className="removed-tb"><br />The largest social network dedicated to RVers</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="grid_3 footer-articles">
                                                <div className="quick-links">
                                                    <h6 className="quick-links__title">The Latest</h6>
                                                    <ul className="quick-links__list"><li><a href="https://roadtrippers.com/magazine/alpine-inn-nebraska-raccoons/">At this Nebraska restaurant, hungry raccoons snacking on dinner scraps is the main event</a></li><li><a href="https://roadtrippers.com/magazine/isle-royale-national-park/">Ditch your car to experience Isle Royale, the least-visited national park in the contiguous U.S.</a></li><li><a href="https://roadtrippers.com/magazine/chuck-a-burger-st-louis/">Crispy edges, classic cars, and a cherry on top: St. Louis’ Chuck-A-Burger thrives on good food and nostalgia</a></li></ul>					</div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>

                                    <div className="copyrights footer-bottom">
                                        <div className="container">
                                            <div className="grid_2 footer-logo">
                                                
                                            </div>
                                            <div className="grid_6 footer-legal-wrapper">
                                                <ul id="footer-legal-menu" className="copyrights__list"><li id="menu-item-14866" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14866"><a href="https://roadtrippers.com/privacy-policy/">Privacy Policy</a></li>
                                                    <li id="menu-item-11078" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11078"><a target="_blank" rel="noreferrer noopener" href="https://maps.roadtrippers.com/tos">Terms and Conditions</a></li>
                                                    <li id="menu-item-11079" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11079"><a target="_blank" rel="noreferrer noopener" href="https://forms.gle/Ea2sUNYGtdNfBcCd7">Copyright</a></li>
                                                </ul>											<p className="copyrights__text">© Roadtrippers, LLC 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                                )
}