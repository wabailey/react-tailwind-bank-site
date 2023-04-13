import React from 'react';
import styles from "../style";
import Button from "./Button";

const CTA = () => (
	<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-5xl mx-auto sm:flex-row flex-col bg-black-gradient-2 rounded-2xl box-shadow`}>

		<div className='flex-1 flex flex-col'>

			<h2 className={`${styles.heading2} sm:text-left text-center sm:my-0 mt-5`}>Try our service now!</h2>
			<p className={`${styles.paragraph} max-w-lg my-5 sm:text-left text-center`}>Everything you need to handle card payments and grow your business anywhere in the world.</p>

		</div>

		<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:my-0 my-5`}>

			<Button />

		</div>

	</section>
)

export default CTA