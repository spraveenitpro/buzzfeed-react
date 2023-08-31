const QuestionBlock = ({ question }) => {
	return (
		<>
			<button className="question-block">
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