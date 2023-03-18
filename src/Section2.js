import mobilePhoneKeyboardImg from './assets/mobile/image-phone-and-keyboard.jpg'
import mobileGlassKeyboardImg from './assets/mobile/image-glass-and-keyboard.jpg'
import tabletPhoneKeyboardImg from './assets/tablet/image-phone-and-keyboard.jpg'
import tabletGlassKeyboardImg from './assets/tablet/image-glass-and-keyboard.jpg'
import desktopPhoneKeyboardImg from './assets/desktop/image-phone-and-keyboard.jpg'
import desktopGlassKeyboardImg from './assets/desktop/image-glass-and-keyboard.jpg'
import Images from './shared/Image'

function Section2() {
  return (
    <section className='section-2'>
      <div className='images'>
        <div className='phone-keyboard-img'>
          <Images
            mobile={mobilePhoneKeyboardImg}
            tablet={tabletPhoneKeyboardImg}
            desktop={desktopPhoneKeyboardImg}
            altText='Phone and keyboard image'
          />
        </div>
        <div className='glass-keyboard-img'>
          <Images
            mobile={mobileGlassKeyboardImg}
            tablet={tabletGlassKeyboardImg}
            desktop={desktopGlassKeyboardImg}
            altText='Phone and keyboard image'
          />
        </div>
      </div>
      <h2>Mechanical wireless keyboard</h2>
      <p>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
    </section>
  )
}

export default Section2
