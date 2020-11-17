import React from 'react'

const Receta = ({receta,calorias,descripcion,img}) => {
return (
		
		<div className="container">
			<div className="card mb-3"  style={{ width: '940px' }}>
  				<div className="row no-gutters">
    					<div className="col-md-4">
    						 <img src={img} alt=""/>
    					</div>
    						<div className="col-md-8">
      								<div className="card-body">
        									<h5 className="card-title">Titulo: {receta}</h5>
        									<p className="card-text">Calorias: {calorias}</p>
        									<p className="card-text">
        										<ol>
													{descripcion.map(des=>(
													<li>{des}</li>
															))}
												</ol>
											</p>
      								</div>
    						</div>
 				 </div>
			</div>
		</div>

	
	)
}

export default Receta