import './index.css'

const Words = props => {
  const {wordsList} = props
  return (
    <ul className="un-ol-list">
      {wordsList.map(eachWord => (
        <li className="list-item">{eachWord}</li>
      ))}
    </ul>
  )
}

export default Words
