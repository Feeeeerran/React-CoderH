import React from 'react'

export default function About() {
    return (
        <section id="about">
            <h3>Sobre este proyecto en React</h3>
            <span>
                Gracias a un gran profesor he podido hacer esta genial (a mi gusto) pagina que vende cerveza, una bebida bastante interesante (?
            </span>
            <span>
                Aspectos clave de este proyecto :
            </span>
            <ul>
                <li>Componentes de la página que generan un SPA</li>
                <li>Un Cart que maneja lógica con context para mostrar los productos agregados (y un button que los elimina), su precio y cantidad,</li>
                <li>Uso de react-router-dom para moverse a través de la página</li>
                <li>Integración de Firebase como base da datos de los productos, al cual le solicitamos los productos disponibles en nuestra list-container y luego segun el id le solicitamos un producto determinado segun el id</li>
            </ul>
            <span>
                Aspectos que faltaron (pero se tenian en cuenta)
            </span>
            <ul>
                <li>El order-container, un componente que ordenaba la lista de productos segun precio, cantidad, etc y también filtraba productos segun el tipo de cerveza (rubia, roja, negra)</li>
                <li>Mejor uso de efectos para hacer la página mas comfortable</li>
                <li>Agregar mas productos a la base de datos</li>
                <li>Generar una buena seccion de contacto para que los mensajes del mismo se imprimieran en la base de datos de Firebase</li>
                <li>Hacer del index una seccion que mostrara las ofertas del dia escogiendo productos al azar</li>
            </ul>
        </section>
    )
}