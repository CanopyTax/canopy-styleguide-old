import {Component, h} from 'preact';
import styles from './cps-datepicker.styles.css';
import moment from 'moment';
import { range, chunk, partial } from 'lodash';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default class Days extends Component {
	render() {
		const square = Math.floor(this.props.width / 7);
		return (
			<div>
				<div
					className={styles.week}>
					{days.map(day => {
						return (
							<div
								style={{
									minHeight: `${square}px`,
									minWidth: `${square}px`,
								}}
								className={`${styles.day} ${styles.weekHeaderDay} cps-medium-gray cps-wt-bold`}>
								{day}
							</div>
						)
					})}
				</div>
				{formDayGrid(this.props.date)
					.map((week, index) => {
						return (
							<div
								key={index}
								className={styles.week}>
								{week.map((day, index) => {
									return (
										<div
											style={{
												minHeight: `${square}px`,
												minWidth: `${square}px`,
												borderRadius: `${(square / 2)}px`,
											}}
											onClick={partial(this.props.selectDate, day.attachedDate)}
											key={index}
											className={getDayClass(this.props.pickedDate, this.props.date, day.attachedDate)}>
											{day.day}
										</div>
									)
								})}
							</div>
						)
					})
				}
			</div>
		)
	}
}

function getDayClass(pickedDate, viewDate, day) {
	const stringDay = day.format('MMDDYY');
	const today = moment();
	const isToday = stringDay === today.format("MMDDYY");
	const isPicked = pickedDate && pickedDate.format("MMDDYY") === stringDay;
	const thisMonth = day.month() === viewDate.month();
	return `${isPicked ? styles.picked : isToday ? styles.today : ''} ${(isToday || isPicked) ? 'cps-white' : thisMonth ? 'cps-light-gray' : 'cps-gray-10'} ${styles.day}`
}

function formDayGrid(date) {
	const newDate = moment(date);

	const daysInMonth = date.daysInMonth();
	const weekdayStart = newDate.date(1).weekday();
	const weekdayEnd = newDate.date(daysInMonth).weekday();
	const daysInLastMonth = newDate.month(date.month() - 1).daysInMonth();
	const days = [
		...range(daysInLastMonth - (weekdayStart - 1), daysInLastMonth + 1),
		...range(1, daysInMonth + 1),
		...range(1, (6 - weekdayEnd + 1)),
	].map((item, index) => {
		if (index < weekdayStart) {
			const attachedDate = moment();
			attachedDate.year(date.year());
			attachedDate.month(date.month() - 1);
			attachedDate.date(item);
			return {day: item, attachedDate: attachedDate};
		}
		if (index >= daysInMonth + weekdayStart) {
			const attachedDate = moment();
			attachedDate.year(date.year());
			attachedDate.month(date.month() + 1);
			attachedDate.date(item);
			return {day: item, attachedDate: attachedDate};
		}
		else {
			const attachedDate = moment();
			attachedDate.year(date.year());
			attachedDate.month(date.month());
			attachedDate.date(item);
			return {day: item, attachedDate: attachedDate};
		}
	});
	return chunk(days, 7);
}
