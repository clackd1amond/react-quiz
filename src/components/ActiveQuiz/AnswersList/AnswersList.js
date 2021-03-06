import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
	<ul className={classes.AnswersList}>
		{props.answers.map((answer, index) => {
			return (
				<AnswerItem
					key={index}
					answer={answer}
					state={props.state ? props.state[answer.id] : null}
					onAnswerClick={props.onAnswerClick}
				/>
			);
		})}
	</ul>
);

export default AnswersList;
