import React, { useState, useEffect, useRef} from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

function ContentRowTop() {



	// 1) Identificador del elemento en el estado
	// 2) Método para actualizarlo
	const [name, setName] = useState('Rodolfo');
	const [count, setCount] = useState(0);

	// useRef == querySelector()
	// Seleccionar elementos del Virtual DOM

	const divConDatos = useRef();

	useEffect(
		() => {
			// Actualiza el título del documento usando la API del navegador
			console.log(`You clicked ${count} times`);
			// Lo que retorne == componentWillUnmount
		},
		// Dependencias: Cambios en el valor de elementos del estado que van a disparar el useEffect
		// Si dependencias == array vacío, es igual a componentDidMount()
		[
			name
		]
	);



	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">

				<div
				
				className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 ref={divConDatos} className="h3 mb-0 text-gray-800">
						
						 {count} - {name} 
						 
						 </h1>

					<button onClick={() => divConDatos.current.style.color}>
						Click me
     				</button>

					<button onClick={() => setName('Jorge')}>
						Cambiar nombre
     				</button>

				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				<ContentRowCenter />
				<Chart />

			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;