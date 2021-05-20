import './App.css';
import Modal from './Modal';
import React, { useEffect } from 'react';
import ModalDescription from './ModalDescription';
import ModalCreate from './ModalCreate';
import { GET_PRODUCT, DELETE_PRODUCT } from './api.js';
import { fetchGet } from './FetchRequest.js';
function App() {

  const [openEditar, setOpenEditar] = React.useState(false);
  const [openDescription, setOpenDescription] = React.useState(false);
  const [openCreate, setOpenCreacte] = React.useState(false);
  const [edit, setEdit] = React.useState();
  const [description, setDespriction] = React.useState();
  const [date, setDate] = React.useState(undefined);


  React.useEffect(async () => {
    const json = await fetchGet();
    console.log(json)
    setDate(json.data);
  }, []);


  function handleClick() {
    setOpenEditar(true)
  }

  function handleClickDescription(data) {
    setOpenDescription(true)
    setDespriction(data)
  }

  function handleClickCreate() {
    setOpenCreacte(true)
  }

  async function handleClickDelete(data) {
    const {url, options} = DELETE_PRODUCT({
      codigo: data
    })
    const response = await fetch(url,options);
    const json = await response.json();

    if(json.error){
      alert(json)
      return;
    }
    alert('delete feito com sucesso')
    const get = await fetchGet();
    setDate(get);
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '30%', background: '#C4C4C4', marginTop: '10%', height: '50%' }}>
      {openEditar == true && <Modal setOpenEditar={setOpenEditar} edit={edit} setDate={setDate} />}
      {openDescription == true && <ModalDescription setOpenDescription={setOpenDescription} description={description}/>}
      {openCreate == true && <ModalCreate setOpenCreacte={setOpenCreacte} setDate={setDate} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <p>GRENCIADOR DE PRODUTOS:</p>
        <button className="create" onClick={() => { handleClickCreate() }}>Novo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>codigo</th>
            <th>nome</th>
            <th>preço</th>
            <th></th>
            <th>opções</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {date!== undefined&& date.map((data) => (
            <tr key={data.codigo}>
              <td>{data.codigo}</td>
              <td>{data.name}</td>
              <td>R${data.price}</td>
              <td><button className="description" onClick={() => { handleClickDescription(data.description) }}>description</button></td>
              <td><button className="edit" onClick={() => {
                handleClick(data.codigo)
                setEdit(data.codigo)
              }}
              >editar</button></td>
              <td><button className="delete" onClick={() => { handleClickDelete(data.codigo) }}>apagar</button></td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
