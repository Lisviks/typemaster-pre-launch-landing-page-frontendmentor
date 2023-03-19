function Images(props) {
  const {mobile, tablet, desktop, altText, class_name} = props

  return (
    <img
      className={class_name}
      src={mobile}
      srcSet={`${mobile} 450w, ${tablet} 800w, ${desktop} 1100w`}
      sizes='(max-width: 450px) 450px, (max-width: 800px) 800px, 1100px'
      alt={altText}
    />
  )
}

export default Images
