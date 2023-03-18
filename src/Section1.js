import mobileImage from './assets/mobile/image-keyboard.jpg'
import tabletImage from './assets/tablet/image-keyboard.jpg'
import desktopImage from './assets/desktop/image-keyboard.jpg'
import patternSquare from './assets/shared/pattern-square.svg'
import Images from './shared/Image'

function Section1() {
  return (
    <section className='section-1'>
      <div className='content'>
        <h1>Typemaster keyboard</h1>
        <p>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
        <div>
          <button className='pre-order-btn'>Pre-order now</button>
          <button className='release-btn' disabled>Release on 5/27</button>
        </div>
      </div>
      <div className='images'>
        <Images
          mobile={mobileImage}
          tablet={tabletImage}
          desktop={desktopImage}
          altText='Keyboard image'
          class_name='keyboard-img'
        />
        <img
          className='pattern-square'
          src={patternSquare}
          alt='pattern square'
        />
      </div>
    </section>
  )
}

export default Section1
