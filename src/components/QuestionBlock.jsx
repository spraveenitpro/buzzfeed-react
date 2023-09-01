const QuestionBlock = ({
	question,
	setChosenAnswerItems,
	chosenAnswerItems,
	setUnansweredQuestionIds,
	unansweredQuestionIds,
	quizItemId
}) => {

	const handleClick = (e) => {
		//console.log("You clicked!");
		setChosenAnswerItems((prevState) => [...prevState, question.text])
		setUnansweredQuestionIds(unansweredQuestionIds.filter((id) => id != quizItemId))
	}

	const validPick = !chosenAnswerItems?.includes(question.text) &&
		!unansweredQuestionIds?.includes(quizItemId)

	return (
		<>
			<button
				className="question-block"
				onClick={handleClick}
				disabled={validPick}
			>
				<img src={question.image} alt={question.text} />
				<h3>{question.text}</h3>
				<p>
					<a href={question.url}>{question.credit}</a>
					<a href="https://unsplash.com"> unsplash.com</a>
				</p>
			</button>
		</>
	)
}

export default QuestionBlock