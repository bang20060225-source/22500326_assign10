import React from 'react'

import styles from './Scoreboard.module.css'

import { TEXTS } from '../constants/TEXTS.js'

const Scoreboard = ({ score }) => {
	return (
		<div className={styles.container}>
			<p>
				{TEXTS.scoreboard.win} <span className={styles.win}>{score.win}</span>
			</p>
			<p>
				{TEXTS.scoreboard.draw} <span className={styles.draw}>{score.draw}</span>
			</p>
			<p>
				{TEXTS.scoreboard.lose} <span className={styles.lose}>{score.lose}</span>
			</p>
		</div>
	)
}

export default Scoreboard
