import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import agregar from "../imagenes/plus.png";
import agregar_disabled from '../imagenes/plus-disabled.png';
import quitar from "../imagenes/remove.png";
import eliminar from "../imagenes/trash-can.png";

const CartDetail = ({ juego }) => {

    const { sumarItem, restarItem, eliminarItem } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(juego.qty);
    const [stock, setStock] = useState(juego.item.stock);
    const [precio, setPrecio] = useState(0);

    const calcularPrecio = () => {

        let p = parseFloat(juego.item.precio) * cantidad;

        return Math.round((p + Number.EPSILON) * 100) / 100;
    }

    const handlerSumarItem = () => {
        if (sumarItem({ juego })) {
            setCantidad((cantidad) => { return cantidad + 1 });
        }        
    }

    const handlerRestarItem = () => {
        if (restarItem({ juego })) {
            setCantidad((cantidad) => { return cantidad - 1 });
        }        
    }

    const handlerEliminarItem = () => {
        setCantidad((cantidad) => { return 0 });
        eliminarItem({ juego });
    }

    const existeStock = () => {
        return (stock - cantidad <= 0 ? false : true);
    }

    const rutaEmpresa = '/' + juego.item.categoria;
    const rutaJuego = '/' + juego.item.categoria + '/' + juego.item.id;

    useEffect(() => {
        setPrecio(calcularPrecio());
    }, [cantidad])

    return (
        <>
            {(juego.item.cantidad > 0) &&
                <div className="bg-white w-3/4 shadow-md rounded m-3 mx-auto">
                    <div className="w-7/8 inline align-middle">
                        <div className="text-lg font-semibold uppercase p-2 flex  justify-between items-center">
                            <Link to={rutaJuego} className="w-10/12 text-left hover:text-blue-600">{juego.item.nombre}</Link>
                            <Link to={rutaEmpresa} className="w-4/12 hover:text-blue-600">{juego.item.tienda}</Link>
                            <div className="w-4/12 hover:text-blue-600">{precio} {juego.item.moneda}</div>
                            <div className="w-4/12 flex items-center">
                                <button onClick={handlerSumarItem}><img className="h-10" src={existeStock() ? agregar : agregar_disabled} alt="Agregar" /></button>
                                <span className="pl-5 pr-5">{cantidad}</span>
                                <button onClick={handlerRestarItem}><img className="h-10" src={quitar} alt="Quitar" /></button>
                                <button onClick={handlerEliminarItem}><img className="h-10 mx-5" src={eliminar} alt="Eliminar" /> </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
export default CartDetail