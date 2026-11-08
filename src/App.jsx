import { useState } from 'react'

import { TEXTS } from './constants/TEXTS.js'

import { getRndElement } from './utils/getRndElement.js'
import { getWinner } from './utils/getWinner.js'

import Header from './components/Header.jsx'
import SubHeader from './components/SubHeader.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import Options from './components/Options.jsx'
import Instructions from './components/Instructions.jsx'
import Footer from './components/Footer.jsx'

const options = [TEXTS.form.options.rock.value, TEXTS.form.options.paper.value, TEXTS.form.options.scissors.value]

function App() {
	const [playerOpt, setPlayerOpt] = useState('null')
	const [machineOpt, setMachineOpt] = useState(null)
	const [score, setScore] = useState({ win: 0, draw: 0, lose: 0 })

	// 카드를 고르면 로봇 선택 + 점수 계산, 다시 하기를 누르면 'null'이 들어옴
	const selectOption = (value) => {
		if (value === 'null') {
			setPlayerOpt('null')
			setMachineOpt(null)
			return
		}

		const machine = getRndElement(options)
		const result = getWinner({ firstOpt: value, secondOpt: machine })

		setPlayerOpt(value)
		setMachineOpt(machine)

		if (result === 'playerWins') setScore({ ...score, win: score.win + 1 })
		else if (result === 'machineWins') setScore({ ...score, lose: score.lose + 1 })
		else setScore({ ...score, draw: score.draw + 1 })
	}

	return (
		<>
			<Header />
			<SubHeader
				playerOpt={playerOpt}
				machineOpt={machineOpt}
			></SubHeader>
			<Scoreboard score={score} />
			<Options
				playerOpt={playerOpt}
				machineOpt={machineOpt}
				setPlayerOpt={selectOption}
			/>
			<Instructions />
			<Footer />
		</>
	)
}

export default App
