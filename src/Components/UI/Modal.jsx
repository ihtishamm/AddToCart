/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

 import ReactDOM from "react-dom" 
 import  './Modal.css';

 const BackDrop = ({onClose}) => {
    return <div className='backdrop' onClick={onClose}></div>
 }

  const ModalOverlay = (props) => {
    return(
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
  }

    const portalElement = document.getElementById('overlays')

export default function Modal(props) {
  return (
      <>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
       </>
  )
}
