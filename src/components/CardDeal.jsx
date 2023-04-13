import React from 'react';
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
	<section className={layout.section}>

		<div className={layout.sectionInfo}>

			<h2 className={styles.heading2}>
				Find a better card deal <br className='sm:block hidden' /> in a few easy steps
			</h2>
			<p className={`${styles.paragraph} max-w-lg mt-6`}>
				Our team of experts have crafted an easy to complete lifestyle quiz that can help you find the perfect banking solutions for your unique needs.
			</p>

			<Button styles="mt-10" />

		</div>

		<div className={layout.sectionImg}>

			<img src={card} alt="card" className='w-full h-full' />

		</div>

	</section>
)

export default CardDeal