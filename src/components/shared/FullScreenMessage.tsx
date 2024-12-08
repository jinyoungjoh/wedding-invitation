import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type FullScreenMessageProps = {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요. 잠시 후 다시 시도해주세요.
        </>
      )}
    </div>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
    </svg>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons">
        <g id="Icons_24_">
          <g>
            <path d="M23.99291,15.87187l1.0159-0.8889c1.3968-1.2275,3.118-1.8341,4.8535-1.8341     c2.0316,0,4.0351,0.8324,5.4883,2.4549c2.5961,2.9347,2.4127,7.3508-0.3386,10.0597l-9.8284,8.7357     c-0.6794,0.6026-1.7019,0.6026-2.3814,0l-9.8143-8.7357c-2.7512-2.6948-2.9346-7.125-0.3386-10.0597     c1.4532-1.6225,3.4567-2.4549,5.4884-2.4549c1.7213,0,3.4567,0.6066,4.8535,1.8341L23.99291,15.87187" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default FullScreenMessage
