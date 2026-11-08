import React from 'react'

import styles from './Option.module.css'
import parentStyles from './Options.module.css'

import robot from '../static/robot.webp'

const Option = ({ children, playerOpt, machineOpt, setPlayerOpt, value, image, imageAlt }) => {
	const shouldChecked = playerOpt === value
	const shoudlDisabled = playerOpt !== 'null'
	const shouldShowRobot = playerOpt !== 'null' && machineOpt === value

	const handleOnChange = ({ target }) => {
		setPlayerOpt(target.value)
	}

	return (
		<label className={styles.container + (shoudlDisabled ? ` ${parentStyles.disabled}` : '')}>
			<h3 className={styles.header}>{children}</h3>
			<img
				className={styles.image}
				src={image}
				alt={imageAlt}
			/>
			<input
				type="radio"
				name="option"
				value={value}
				className={styles.input}
				onChange={handleOnChange}
				disabled={shoudlDisabled}
				checked={shouldChecked}
				hidden
			/>
			{shouldShowRobot ? (
				<img
					className={styles.robot}
					src={robot}
					alt="로봇이 고른 카드"
				/>
			) : (
				''
			)}
		</label>
	)
}

export default Option
