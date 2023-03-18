function Card(props) {
  const {icon, title, text, iconClassName} = props

  return (
    <div className='card'>
      <div className={`icon ${iconClassName}`}>
        <img src={icon} alt='icon' />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
