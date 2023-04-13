import React from 'react';
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
	<section id='product' className={layout.sectionReverse}>

		<div className={layout.sectionImgReverse}>

			<img src={bill} alt="billing" className='w-full h-full relative z-20' />
			<div className='absolute z-10 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient' />
			<div className='absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient' />

		</div>

		<div className={layout.sectionInfo}>

			<h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing</h2>
			<p className={`${styles.paragraph} max-w-lg mt-6`}>Cutting edge banking services at your fingertips. Download our state-of-the-art app for your smartphone and control your accounts wherever you are.</p>

			<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>

				<img src={apple} alt="app-store" className="w-32 h-auto mr-6 cursor-pointer" />
				<img src={google} alt="google-play-store" className="w-32 h-auto cursor-pointer" />

			</div>

		</div>

	</section>
)

export default Billing