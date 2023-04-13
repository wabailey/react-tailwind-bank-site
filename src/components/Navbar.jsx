import React from 'react';
import { useState } from 'react';

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [navIcon, setNavIcon] = useState(false)

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>

			<img src={logo} alt="hoobank" className='w-32 h-8' />

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>

				{navLinks.map((nav, index) => (
					<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-base text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}>
						<a href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}

			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>

				<img src={navIcon ? close : menu} alt="menu" className='w-7 h-7 object-contain' onClick={() => setNavIcon((prev) => !prev)} />

				<div className={`${navIcon ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

					<ul className='list-none flex-col justify-end items-center flex-1'>

						{navLinks.map((nav, index) => (
							<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-base text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
								<a href={`#${nav.id}`}>
									{nav.title}
								</a>
							</li>
						))}

					</ul>

				</div>

			</div>

		</nav>
	)
}

export default Navbar