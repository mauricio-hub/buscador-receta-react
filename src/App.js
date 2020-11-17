import React,{useEffect,useState} from 'react'
import Receta from './Receta'
import './App.css'
function App() {


const APP_ID='0bf55858';

const KEY ='00b1c148bf85e6d97d9528bb893bfa96'

// `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

 //creamos el estado y lo inicializamos vacio
const [recetas,setRecetas] =useState([])
const [buscar,setBuscar]= useState('')
const[query,setQuery]=useState('');



useEffect(() => {
  getReceta();
}, [query])


//fucion de obtener data
const getReceta = async ()=>{
  //se hace la consulta
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY}`)
//
const data = await response.json();

//console.log(data.hits)
//pasamos la data al estado
setRecetas(data.hits)
//console.log(data.hits)
}
//udate search
const buscarInput=(e)=>{
  setBuscar(e.target.value)
  //console.log(buscar)
}

const getSearch=(e)=>{
 e.preventDefault()
 setQuery(buscar)
 setBuscar('')
}


  return (

  <div className="row justify-content-center">
  <div className="col-12 col-md-10 col-lg-8">
             <h1>Bucador de Recetas</h1>
                            <form onSubmit={getSearch} className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                   
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless"
                                         type="search" placeholder="Search topics or keywords"
                                         value={buscar}
                                         onChange={buscarInput}
                                         />
                                    </div>
                                
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                   
                                </div>
                            </form>
                        </div>
                      {recetas.map(receta =>(
                        <Receta
                        key={receta.recipe.label} 
                        receta={receta.recipe.label}
                        calorias ={receta.recipe.calories}
                        descripcion={receta.recipe.ingredientLines}
                        img={receta.recipe.image}
                        />

                        ))}
                    </div>


  );
}

export default App;
