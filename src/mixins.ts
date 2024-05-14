export enum WEEK_RATING {
    BAD = 'Bad',
    NOT_TOO_BAD = 'Not too bad',
    MEH = 'Meh',
    PRETTY_GOOD = 'Pretty good',
    AWESOME = 'Awesome',
};

export const COLOR_MAP: { [key in WEEK_RATING]: string } = {
    [WEEK_RATING.BAD]: '#FF0000',
    [WEEK_RATING.NOT_TOO_BAD]: '#FFFF00',
    [WEEK_RATING.MEH]: '#F0F0F0',
    [WEEK_RATING.PRETTY_GOOD]: '#0000FF',
    [WEEK_RATING.AWESOME]: '#00FF00'
};
