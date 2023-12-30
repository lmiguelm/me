import { secondsToMinutes } from 'date-fns'

const ONE_MINUTE = 60
const AVG_READING_TIME = 200

export function getReadingTime(content: string) {
  const keywords = content.split(' ').length // get all keywords
  const readingRateInSeconds = (keywords / AVG_READING_TIME) * ONE_MINUTE
  const readingRateInMinutes = secondsToMinutes(readingRateInSeconds)

  const suffix = 'de leitura'

  if (readingRateInMinutes) {
    return `${readingRateInMinutes} min ${suffix}`
  }

  return `${readingRateInSeconds.toFixed(0)}s ${suffix}`
}
