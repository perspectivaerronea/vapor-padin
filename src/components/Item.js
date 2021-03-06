import { Link } from "react-router-dom";

const Item = ({ datoJuego }) => {

  const ruta = '/' + datoJuego.categoria + '/' + datoJuego.id;

  return (
    <Link to={ruta}>
      <div className="bg-white w-65 h-100 shadow-md rounded m-3"  style={{width: "1/9"}}>
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src={datoJuego.imagen} alt={datoJuego.nombre} />
        </div>
        <div className="w-full h-1/4 p-3">
          <span className="text-lg font-semibold uppercase tracking-wide ">{datoJuego.nombre}</span>
        </div>
      </div>
    </Link>
  )
}
export default Item