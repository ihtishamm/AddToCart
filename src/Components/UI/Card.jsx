import './Card.css'
export default function Card(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="card">{props.children}</div>
  )
}
