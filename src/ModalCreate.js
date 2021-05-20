import React, { useState } from 'react';
import './Modal.css';
import useOutsideClick from "./useOutsideClick";
import { POST_PRODUCT } from './api';
import { fetchGet } from './FetchRequest';

function ModalCreate({ setOpenCreacte, setDate }) {

  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  let domNode = useOutsideClick(() => {
    setOpenCreacte(false)
  });


  async function handleclick() {
    const { url, options } = POST_PRODUCT({
      codigo: codigo,
      name: name,
      description: description,
      price: price
    })
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.error) {
      alert(json)
      return;
    }
    alert('novo produto criado com sucesso')
    setOpenCreacte(false)
    const get = await fetchGet();
    setDate(get);
  }

  return (
    <div className='container'>
      <div ref={domNode} className='modal'>
        <label>codigo:</label>
        <input type="number" onChange={({ target }) => setCodigo(target.value)} value={codigo} />
        <label>nome:</label>
        <input type="text" onChange={({ target }) => setName(target.value)} value={name} />
        <label>price:</label>
        <input type="text" onChange={({ target }) => setPrice(target.value)} value={price} />
        <label>descrição:</label>
        <textarea style={{ height: '33%' }} onChange={({ target }) => setDescription(target.value)}>
          {description}
        </textarea>

        <button className="create" style={{marginBottom:'4%', marginTop:'4%', marginLeft:'auto', marginRight:'auto', width:'68%', backgroundColor:'#0063F8', color:'white', height:'13%', fontSize:'17px'}}  onClick={() => { handleclick() }}>Salvar</button>
      </div>
    </div>
  )
}


export default ModalCreate;