import classes from './AnswerItem.module.css';
import { AnswerContext } from '../../../../containers/Quiz/Quiz';

const AnswerItem = (props) => {
	const cls = [classes.AnswerItem];

	if (props.state) {
		cls.push(classes[props.state]);
	}

	return (
		<AnswerContext.Consumer>
			{(onAnswerClick) => (
				<li className={cls.join(' ')} onClick={() => onAnswerClick(props.answer.id)}>
					{props.answer.text}
				</li>
			)}
		</AnswerContext.Consumer>
	);
};

export default AnswerItem;
