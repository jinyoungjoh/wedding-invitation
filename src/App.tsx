import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { useEffect, useState } from 'react'
import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from './components/sections/Heading'
import { Wedding } from '@models/wedding'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        console.log(data)
      })
      .catch((e) => {
        console.log('에러 발생', e)
        setLoading(false)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type={'loading'} />
  }
  if (error) {
    return <FullScreenMessage type={'error'} />
  }

  if (wedding === null) return null

  const { date } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
    </div>
  )
}

export default App
