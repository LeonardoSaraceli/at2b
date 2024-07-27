import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useRef, useState } from 'react'

export default function WhatsApp() {
  const [popUp, setPopUp] = useState(false)
  const popUpRef = useRef()

  const useOutsideClick = (ref, callback) => {
    useEffect(() => {
      const handleClickOutside = (evt) => {
        if (
          ref.current &&
          !ref.current.contains(evt.target) &&
          evt.target !== document.querySelector('#whatsapp-figure') &&
          evt.target !== document.querySelector('#whatsapp-icon')
        ) {
          callback()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }

  useOutsideClick(popUpRef, () => setPopUp(false))

  const handleOpenPopUp = () => {
    if (popUp) {
      setPopUp(false)
    } else {
      setPopUp(true)
    }
  }

  return (
    <>
      <figure id="whatsapp-figure" onClick={handleOpenPopUp}>
        <FontAwesomeIcon icon={faWhatsapp} id="whatsapp-icon" />
      </figure>

      {popUp && (
        <article ref={popUpRef}>
          <p>Eu olhei o site, mas ainda tenho dúvidas</p>

          <a href="https://wa.me/+5521988112767/" target="_blank">
            <button>
              <FontAwesomeIcon icon={faComments} className="fa" />
              Converse conosco
            </button>
          </a>
        </article>
      )}
    </>
  )
}
