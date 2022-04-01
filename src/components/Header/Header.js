import './Header.css'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  const handleClickLogo = () => {
    history.push('/')
  }

  return (
    <div className='imajin__headerContainer' onClick={() => handleClickLogo()}>
      <img
        src={'https://imajinapp.s3-ap-southeast-1.amazonaws.com/assets/images/logo-white.png'}
        className='imajin__headerImage'
      />
    </div>
  )
}