import './index.css'

const Selected = props => {
  const {selectDetails, toggleIsFavorite} = props
  const {text, isFavorite, id} = selectDetails
  const onClickFavoriteNum = () => {
    console.log(onClickFavoriteNum.type)
    toggleIsFavorite(id)
  }
  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'
  return (
    <li>
      <div className="list-container">
        <p>{text}</p>
        <button
          className="btn-styles"
          type="button"
          onClick={onClickFavoriteNum}
        >
          <img className="star-styles" alt="startImage" src={starImgUrl} />
        </button>
      </div>
    </li>
  )
}

export default Selected
