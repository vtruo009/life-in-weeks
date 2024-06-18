export const WEEK: number = 1000 * 60 * 60 * 24 * 7;
export const NUM_WEEKS_IN_YEAR: number = 52;

export enum WEEK_RATING {
    BAD = 'Bad',
    NOT_TOO_BAD = 'Not too bad',
    MEH = 'Meh',
    PRETTY_GOOD = 'Pretty good',
    AWESOME = 'Awesome',
};

export const COLOR_MAP: { [key in WEEK_RATING]: string } = {
    [WEEK_RATING.BAD]: '#E91E63',
    [WEEK_RATING.NOT_TOO_BAD]: '#FFEB3B',
    [WEEK_RATING.MEH]: '#ACACAC',
    [WEEK_RATING.PRETTY_GOOD]: '#2196F3',
    [WEEK_RATING.AWESOME]: '#009688'
};
