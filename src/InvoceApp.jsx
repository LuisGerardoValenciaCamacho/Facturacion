import React, { useEffect, useState } from 'react'
import { getInvoice } from './helpers/invoiceService'
import { InvoiceView } from './components/InvoiceView';
import { ClientView } from './components/ClientView';
import { CompanyView } from './components/CompanyView';
import { ListItemsView } from './components/ListItemsView';
import { TotalView } from './components/TotalView';
import { FormView } from './components/FormView';

const invoceInitial = {
  id: 1,
  name: "Componentes PC",
  client: {
      name: "Luis Gerardo",
      lastname: "Valencia Camacho",
      address: {
          country: "México",
          state: "Querétaro",
          city: "Querétaro",
          street: "Los Olivos",
          number: 16
      }
  },
  company: {
      name: "New Egg",
      fiscalNumber: "09042022"
  },
  items: [
      {
          id: 1,
          product: "Monitor 24 pulgadas",
          price: 1989,
          quantity: 3
      },
      {
          id: 2,
          product: "Teclado dell",
          price: 256,
          quantity: 2
      },
      {
          id: 3,
          product: "Ventilador",
          price: 500,
          quantity: 2
      },
      {
          id: 4,
          product: "Mousepad",
          price: 79.50,
          quantity: 1
      }
  ]
}

export const InvoceApp = () => {
  const [invoce, setInvoce] = useState(invoceInitial);

  const [items, setItems] = useState([])
  
  const { id, name, client, company } = invoce;

  const [invoceItems, setInvoceItems] = useState({ product: "", price: 0, quantity: 0});

  const { product, price, quantity } = invoceItems;

  const [counter, setCounter] = useState(5);

  const [total, setTotal] = useState(0);

  const [activeForm, setActiveForm] = useState(false);

  useEffect(() => {
    const data = getInvoice();
    setInvoce(data);
    setItems(data.items)
  }, [])

  useEffect(() => {
    const total = items.length == 0 ? 0 : items.map(item => item.price * item.quantity).reduce((acumulate, currentValue) => acumulate + currentValue);
    setTotal(total);
  }, [items])
  
  
  const onInputChange = (event) => {
    setInvoceItems({...invoceItems, [event.target.name]: event.target.type == "number" ? +event.target.value : event.target.value})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(isNaN(price) || isNaN(quantity) || product == "" || price == 0 || quantity == 0) {
      alert("Flata información");
      return;
    }
    setItems([...items, {id: counter, product, price, quantity}]);
    setInvoceItems({ product: "", price: 0, quantity: 0 });
    setCounter(counter + 1);
  }

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  }

  const deleteItem = (id) => {
    console.info(id);
    setItems(items.filter(item => item.id != id))
  }
  
  return (
    <div className='container'>
      <div className='card mt-5'>
        <div className='card-header'>
          <h1>Ejemplo Factura</h1>
        </div>
        <div className='card-body'>
          <InvoiceView id={ id } name={ name } />
          <div className='row mt-3 mb-3'>
            <div className='col'>
              <ClientView title={ "Datos del cliente:" } client={ client } />
            </div>
            <div className='col'>
              <CompanyView title={ "Datos de la empresa" } company={ company } />
            </div>
          </div>
          <ListItemsView title={ "Productos de la factura" } items={ items } deleteItem={ id => deleteItem(id) }/>
          <TotalView total={ total } />
          <button className='btn btn-secondary' onClick={ onActiveForm }>{ !activeForm ? "Agregar item" : "Ocultar formulario" }</button>
          { !activeForm || <FormView onSubmit={ onSubmit } onInputChange={ onInputChange } product={ product } price={ price } quantity={ quantity } />}
        </div>
      </div>
    </div>
  )
}