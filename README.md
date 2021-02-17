# Sobre este proyecto en React

Gracias a un gran profesor he podido hacer esta genial (a mi gusto) pagina que vende cerveza, una bebida bastante interesante (?

## Aspectos clave de este proyecto :

Componentes de la página que generan un SPA

Un Cart que maneja lógica con context para mostrar los productos agregados (y un button que los elimina), su precio y cantidad

Uso de react-router-dom para moverse a través de la página

Integración de Firebase como base da datos de los productos, al cual le solicitamos los productos disponibles en nuestra list-container y luego segun el id le solicitamos un producto determinado segun el id

## Aspectos que faltaron (pero se tenian en cuenta) :

El order-container, un componente que ordenaba la lista de productos segun precio, cantidad, etc y también filtraba productos segun el tipo de cerveza (rubia, roja, negra)

Mejor uso de efectos para hacer la página mas comfortable

Agregar mas productos a la base de datos

Generar una buena seccion de contacto para que los mensajes del mismo se imprimieran en la base de datos de Firebase

Hacer del index una seccion que mostrara las ofertas del dia escogiendo productos al azar