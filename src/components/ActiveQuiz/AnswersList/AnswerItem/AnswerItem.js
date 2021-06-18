import classes from './AnswerItem.module.css';
import { AnswerContext } from '../../../../containers/Quiz/Quiz';

const AnswerItem = (props) => {
	return (
		<AnswerContext.Consumer>
			{(onAnswerClick) => (
				<li className={classes.AnswerItem} onClick={() => onAnswerClick(props.answer.id)}>
					{props.answer.text}
				</li>
			)}
		</AnswerContext.Consumer>
	);
};

export default AnswerItem;
