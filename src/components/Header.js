import React, { useEffect } from 'react';
import nav from '../settings/main.json'
import Link from '../resolvers/Link'
// import DarkmodeToggle from './DarkmodeToggle'
import DarkModeToggle from './DarkmodeToggleNew'
import { mobileMenuToggle } from '../lib/main'

export default function Header() {
	useEffect(() => {
        mobileMenuToggle();
	}, []);
	
	return (
		<header className="header" role="banner">
			<a href="/" className="brand">
				<svg width="115.162px" height="35.2825367px" viewBox="0 0 115.162 35.2825367" version="1.1">
					<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Contact-Us-Concept-1" transform="translate(-50.000000, -40.000000)" fill="#FFFFFF">
							<g id="Header" transform="translate(50.000000, 30.000000)">
								<g id="logo" transform="translate(0.000000, 10.000000)">
									<polygon id="Fill-1" points="14.1505078 35.2825015 35.2825367 35.2825015 35.2825367 28.2256075 21.2070678 28.225959"></polygon>
									<polygon id="Fill-2" points="42.3390792 7.05654249 70.5650733 7.05654249 70.5650733 0 42.3390792 0"></polygon>
									<polygon id="Fill-3" points="42.3390792 35.2824488 70.5650733 35.2824488 70.5650733 28.2259063 42.3390792 28.2259063"></polygon>
									<polygon id="Fill-4" points="35.2825367 21.1695396 63.5085308 21.1695396 63.5085308 14.1129971 35.2825367 14.1129971"></polygon>
									<polygon id="Fill-5" points="66.5650733 7.05654249 85.5650733 7.05654249 85.5650733 0 66.5650733 0"></polygon>
									<polygon id="Fill-6" points="105.798393 0 84.6779825 0 84.6779825 35.2825367 91.734525 35.2825367 91.734525 7.05654249 98.7418501 7.05654249"></polygon>
									<polygon id="Fill-7" points="21.1574989 0 1.75776368e-05 0 1.75776368e-05 7.05654249 14.100974 7.05654249"></polygon>
									<polygon id="Fill-8" points="35.2825367 4.73541549 35.2825367 0 30.5891317 0 0 30.5890966 0 35.2825015 4.73541549 35.2825015"></polygon>
									<polygon id="Fill-9" points="108.105282 7.05636671 108.105282 35.282396 115.162 35.282396 115.162 7.05636671 115.152684 7.05636671 115.152684 0.00896459502"></polygon>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</a>

			<div className="header__nav">
				<nav className="nav-primary">
					{nav.nav.map((item, i) => (
						<Link to={item.permalink} key={i}>
							{item.name}
						</Link>
					))}
				</nav>

				<div className="header__buttons">
					<DarkModeToggle />
					<a href="/contact-us/" className="button button--standard button--yellow">
						Contact
					</a>

					<button className="mobile-trigger">
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}
