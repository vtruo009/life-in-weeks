import { MS_IN_A_WEEK, NUM_WEEKS_IN_YEAR } from './mixins';

export function calcNumWeeks(dob: Date): number {
	const today = new Date();
	const thisBirthday = new Date(
		today.getFullYear(),
		dob.getMonth(),
		dob.getDate()
	);
	const weeksRemaining = Math.floor(
		(thisBirthday.getTime() - today.getTime()) / MS_IN_A_WEEK
	);
	const weeksHasPassed =
		(today.getFullYear() - dob.getFullYear()) * NUM_WEEKS_IN_YEAR;
	return weeksHasPassed - weeksRemaining;
}
