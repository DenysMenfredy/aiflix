import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',

    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }
    
    
    function handleChange(infosDoEvento) {
      // const {getAttribute, value} = infosDoEvento.target;
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
      
    }

   

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais);
        }}>
          
            <FormField
              formType="input"
              label="Nome da Categoria"
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}
             />

            <FormField 
              formType="textarea"
              label="Descrição"
              type="text"
              value={values.descricao}
              onChange={handleChange}
             />

            <FormField
              formType="input"
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
             />          
          
          <button>Cadastrar</button>        


        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return  (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para Home 
        </Link>
      </PageDefault>
    )
  }


export default CadastroCategoria;