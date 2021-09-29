# Proceso paso a paso 

1) Declarar el estado y el método para actualizarlo
movies = []
movies = [{peliculas}]

const [movies, setMovies] = useState([]);


2) Petición a la api
fetch() 
setMovies(respuesta de la api)

3) renderizarlo con map
movies.map((movie) => (<div key={movie.imdbID}> </div>))