import { useState, useEffect } from "react"
import Title from "./components/Title"



const App = () => {
	const [quiz, setQuiz] = useState(false)
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:8000/quiz")
			const json = await response.json()
			setQuiz(json)
			//console.log(quiz)
		}
		catch (err) {
			console.log(err)
		}


	}
	useEffect(() => {
		fetchData()
	}, [])
	console.log(quiz)

	return (

		<div className="app">
			<Title title={quiz?.title} subtitle={quiz?.subtitle} />
		</div>
	)
}

export default App
