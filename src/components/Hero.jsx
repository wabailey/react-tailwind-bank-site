import React from 'react';
import styles from '../style';
import { discount, robot } from "../assets";
import GetStarted from './GetStarted';

const Hero = () => (
	<section id='home' className={`flex md:flex-row flex-col lg:pl-4 ${styles.paddingY}`}>

		<div className={`${styles.flexStart} flex-col md:w-7/12 sm:pl-60 sm:px-0 px-4`}>

			<div className='flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-lg mb-4'>

				<img src={discount} alt="discount" className='w-8 h-8' />
				<p className={`${styles.paragraph} ml-2`}>
					<span className='text-white'>20%</span> Discount For
					<span className='text-white'> 1 Month</span> Account
				</p>

			</div>

			<div className='flex flex-row justify-between items-start w-full'>

				<h1 className='font-poppins font-semibold leading-tight sm:text-[72px] text-[64px] text-white'>
					The Next <br className='sm:block hidden' />
					<span className='text-gradient'>
						Generation
					</span>
				</h1>

				<div className='md:flex hidden mx-4'>

					<GetStarted />

				</div>

			</div>

			<h1 className='font-poppins font-semibold sm:text-[72px] text-[64px] leading-tight text-white w-full'>
				Payment Method
			</h1>
			<p className={`${styles.paragraph} max-w-lg mt-20`}>
				Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates and annual fees.
			</p>

		</div>

		<div className={`flex-1 md:w-4/12 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

			<img src={robot} alt="billing" className='relative z-10' />
			<div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient' />
			<div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
			<div className='absolute z-0 w-[80%] h-[50%] right-20 bottom-10 blue__gradient' />

		</div>

	</section>
)

export default Hero