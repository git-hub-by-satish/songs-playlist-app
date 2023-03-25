import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongDetails = props => {
  const {eachSong, removeSong} = props
  const onClickDelete = () => {
    removeSong(eachSong.id)
  }

  return (
    <li className="list-item">
      <div className="track-details">
        <div className="song-content">
          <img className="song-image" src={eachSong.imageUrl} alt="track" />
          <div className="song-details">
            <p className="song-name">{eachSong.name}</p>
            <p className="song-genre">{eachSong.genre}</p>
          </div>
        </div>
        <p className="duration">{eachSong.duration}</p>
      </div>
      <button
        data-testid="delete"
        onClick={onClickDelete}
        type="button"
        className="delete-btn"
      >
        <AiOutlineDelete />
      </button>
    </li>
  )
}

export default SongDetails
