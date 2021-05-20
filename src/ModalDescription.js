import React from 'react';
import './ModalDescription.css';
import useOutsideClick from "./useOutsideClick";
import { GET_PRODUCT_CODIGO } from './api';


function ModalDescription({setOpenDescription, description}) {

  const [des, setDes]= React.useState('');

  React.useEffect(async () => {
  
    setDes(description)
  }, []);

  let domNode = useOutsideClick(() => {
    setOpenDescription(false)
  });

  return (
    <div className='container'>
      <div ref={domNode} className='modall'>
        <textarea style={{height:'100%', width:'100%', padding:0}} value={des} disabled></textarea>
      </div>
    </div>
  )
}


export default ModalDescription;