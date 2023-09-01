import { forwardRef } from "react"
import QuestionBlock from "./QuestionBlock"

const QuestionsBlock = ({
	quizItem,
	setChosenAnswerItems,
	chosenAnswerItems,
	setUnansweredQuestionIds,
	unansweredQuestionIds }, ref) => {
	//console.log(quizItem)
	return (
		<>
			<h2 ref={ref} className="question-title">{quizItem.text}</h2>
			<div className="questions-container">
				{quizItem.questions.map((question, _index) => (
					<QuestionBlock
						key={_index}
						quizItemId={quizItem.id}
						question={question}
						setChosenAnswerItems={setChosenAnswerItems}
						chosenAnswerItems={chosenAnswerItems}
						setUnansweredQuestionIds={setUnansweredQuestionIds}
						unansweredQuestionIds={unansweredQuestionIds}
					/>
				))}

			</div>
		</>
	)
}

export default forwardRef(QuestionsBlock)