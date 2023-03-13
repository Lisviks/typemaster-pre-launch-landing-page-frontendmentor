function Card(props) {
  const {icon, title, text} = props

  return (
    <div className='card'>
      <div className='icon'>
        <img src={icon} alt='icon' />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
