import classNames from 'classnames/bind'
import styles from './Heading.module.scss'
import Section from '@shared/Section'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  const title = format(weddingDate, 'yy.MM.dd')
  const subTitle = DAYS[getDay(weddingDate)]

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{title}</div>
      <div className={cx('txt-day')}>{subTitle}</div>
    </Section>
  )
}

export default Heading
