import { intervalToDuration } from "date-fns";

const YEAR = 2001;
const MONTH = 7;
const DAY = 18;

export function getMyAge(): number | undefined {
  const currentDate = new Date();
  const birthDate = new Date(YEAR, MONTH, DAY);

  const { years } = intervalToDuration({
    start: birthDate,
    end: currentDate,
  });

  return years;
}
