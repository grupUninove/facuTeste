import React, { useEffect, useState } from 'react';
import './Modal.css';
import useOutsideClick from "./useOutsideClick";
import { GET_PRODUCT_CODIGO, PUT_PRODUCT } from './api';
import {fetchGet} from './FetchRequest';

function Modal({ setOpenEditar, edit, setDate }) {

  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  let domNode = useOutsideClick(() => {
    setOpenEditar(false)
  });


  useEffect(async () => {
    const { url, options } = GET_PRODUCT_CODIGO(edit)
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.error) {
      alert(json)
      return;
    }
    alert(json)
    setCodigo(json.data[0].codigo)
    setName(json.data[0].name)
    setDescription(json.data[0].description)
    setPrice(json.data[0].price)
  }, []);
  //  console.log(edit)

  async function handleclick() {
    const { url, options } = PUT_PRODUCT({codigo: codigo, name: name, description: description, price: price})
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.error) {
      alert(json)
      console.log(json)
      return;
    }
    alert('alteração feita com sucesso');
    setOpenEditar(false)
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
        <label>preço:</label>
        <input type="text" onChange={({ target }) => setPrice(target.value)} value={price} />
        <label>descrição:</label>
        <textarea   onChange={({ target }) => setDescription(target.value)} value={description} > </textarea>
        <button className='create' style={{marginBottom:'4%', marginTop:'4%', marginLeft:'auto', marginRight:'auto', width:'68%',  color:'white', height:'13%', fontSize:'17px'}}  onClick={() => { handleclick() }}>Salvar</button>
      </div>
    </div>
  )
}

//style={{marginBottom:'4%', marginTop:'4%', marginLeft:'auto', marginRight:'auto', width:'68%', backgroundColor:'#0063F8', color:'white', height:'13%', fontSize:'17px'}}
export default Modal;
