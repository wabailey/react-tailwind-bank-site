import React from 'react';
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
	<section className={`${styles.flexCenter} my-4`}>

		<div className={`${styles.flexCenter} flex-wrap w-full`}>

			{clients.map((client) => (
				<div key={client.id} className={`flex-1 ${styles.flexCenter} md:min-w-[192px] min-w-[120px]`}>

					<img src={client.logo} alt="client" className='md:w-48 w-24 object-contain hover:invert ease-in-out duration-300' />

				</div>
			))}

		</div>

	</section>
)

export default Clients