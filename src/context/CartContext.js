import { createContext, useState } from "react";

export const CartContext = createContext({
    listaCarrito: [],
    totalElementos: 0,
    finCompra: false,
    hayStock: true,
    totalPrecio: 0,
    agregarAlCarrito: () => { },
    eliminarDelCarrito: () => { },
    sumarItem: () => { },
    restarItem: () => { },
    estaEnElCarrito: () => { },
    calcularTotal: () => { },
    enStock: () => { },
    limpiarCarrito: () => { },
    terminarCompra: () => { },
    calcularTotalPrecio: () => { },
    eliminarItem: () => { }
})

const CartContextProvider = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([]);
    const [totalElementos, setTotalElementos] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [finCompra, setFinalizar] = useState(false);
    const [hayStock, setHayStock] = useState(true);

    const estaEnElCarrito = ({ detalle }) => {

        if (detalle != undefined) {

            const itemNuevo = { item: {}, qty: 0 };

            itemNuevo.item = detalle;

            const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

            return encontrado;

        }
    }

    const limpiarCarrito = (() => {
        let lista = [];
        listaCarrito.forEach(item => { item.qty = 0; item.item.cantidad = 0 });
        setListaCarrito(lista);
        calcularTotal();
        setFinalizar(false);
        calcularTotalPrecio();
    })

    const agregarAlCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: 0 };

        itemNuevo.item = detalle;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        if (encontrado) {
            encontrado.item.cantidad++;
            encontrado.qty++;
        } else {

            itemNuevo.item.cantidad++;
            itemNuevo.qty++;

            setListaCarrito(listaCarrito => { return listaCarrito.concat(itemNuevo) });
        }

        setTotalElementos(currentTotal => currentTotal + 1);

        calcularTotalPrecio();

    }

    const eliminarDelCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: 0 };

        itemNuevo.item = detalle;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        if (encontrado) {

            encontrado.item.cantidad--;
            encontrado.qty--;

            if (encontrado.qty === 0) {

                var lista = listaCarrito;
                lista.splice(lista.indexOf(encontrado), 1);
                setListaCarrito(listaCarrito => { return listaCarrito.splice(listaCarrito.indexOf(encontrado), 1) });
            }
        }

        setTotalElementos(currentTotal => currentTotal - 1);

        calcularTotalPrecio();

    }

    const sumarItem = ({ juego }) => {

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);
        if (encontrado) {

            if ((encontrado.item.stock - (encontrado.item.cantidad+1)) >= 0) {
                encontrado.item.cantidad++;
                encontrado.qty++;

                setTotalElementos(currentTotal => currentTotal + 1);
                calcularTotalPrecio();

                return true;
            }
        }            
        return false;
    }


    const restarItem = ({ juego }) => {

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);

        if (encontrado) {
            if (encontrado.qty > 0) {
                encontrado.item.cantidad--;
                encontrado.qty--;
            }

            setTotalElementos(currentTotal => currentTotal - 1);

            calcularTotalPrecio();

            return true;
        }

        return false;
    }

    const eliminarItem = ({ juego }) => {

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);

        if (encontrado) {

            setTotalElementos(currentTotal => currentTotal - encontrado.item.cantidad);

            encontrado.item.cantidad = 0;
            encontrado.qty = 0;
        }


        calcularTotalPrecio();

    }

    const terminarCompra = () => {
        setFinalizar(true);
    }

    function calcularTotalPrecio() {
        var total = 0;

        listaCarrito.forEach(item => {
            total += parseFloat(item.item.precio) * parseInt(item.item.cantidad);
        });

        setTotalPrecio((totalPrecio) => { return Math.round((total + Number.EPSILON) * 100) / 100 });
    }

    function calcularTotal() {
        var total = 0;

        listaCarrito.forEach(item => total += item.qty);
        setTotalElementos((totalElementos) => { return total });

    }

    function enStock(stock, cantidad) {
        if ((stock - cantidad) <= 0) {
            setHayStock(false);
        } else {
            setHayStock(true);
        }
    }

    const context = {
        listaCarrito,
        totalElementos,
        finCompra,
        hayStock,
        totalPrecio,
        agregarAlCarrito,
        eliminarDelCarrito,
        sumarItem,
        restarItem,
        calcularTotal,
        estaEnElCarrito,
        limpiarCarrito,
        terminarCompra,
        enStock,
        calcularTotalPrecio,
        eliminarItem
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;