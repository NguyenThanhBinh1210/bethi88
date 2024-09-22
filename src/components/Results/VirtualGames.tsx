import { Link } from 'react-router-dom'

const VirtualGames = () => {
  return (
    <div>
      <Link
        target='_blank'
        className='text-blue-600 hover:underline text-sm'
        to={
          'https://rngkeno.garcade.net/Result/?Token=26d1d64128fc94fa225d6c704d5e2f1b39e7e8689de663272192a39223846efeb02894392fe96f7339fbff9d2da3af74&App=W&SiteId=3100100&LangCode=en-US&OffSetTime=0&EventDate=20240922&ReturnUrl=/site-results/'
        }
      >
        Click here to open Virtual Games results
      </Link>
    </div>
  )
}

export default VirtualGames
