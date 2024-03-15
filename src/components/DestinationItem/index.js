// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList

  return (
    <li className="list-container">
      <div className="item-container">
        <div className="img-container">
          <img className="image" src={imgUrl} alt={name} />
        </div>
        <p className="heading1">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
