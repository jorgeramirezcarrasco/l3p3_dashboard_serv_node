
l3p3_dashboard_serv_node
========================

Jorge Ramírez Carrasco y Federico Fernández Moreno
* * *

Required Libraries
--------

The following libraries have been added:

  Server: 

       (Npm libraries)
      *fs(“filesystem)  
      *ws(“websocket)

Client:

In the client have been added these libraries:

      *sugar-1.4.1.min.js
      *jquery-2.0.3.min.js
      *chroma.min.js
      
Moreover to run graphics is necessary the following code available in his author repository.

*smoothie.js (https://github.com/joewalnes/smoothie.git)

*reconnecting-websocket.js
(https://github.com/joewalnes/reconnecting-websocket.git)
(Modified with new functions)

* * *

Input format
--------

Server requires the input data with these charactheristics.

Format: “.csv”.

First line: Headers finished with node number.

Separation: Backspace.

* * *
Data adaptation
--------

The “.csv” files have been adapted to send in each line information from all nodes and with that paint this data simultaneously. In addition the data have been modified and is showed in percentage respect all data of the same resource to visualize the information better. 
* * *
Funcionamiento

Cliente(Port:8000):

*Computer Resources: Al seleccionar su pestaña correspondiente se abre la conexión con el servidor el cual comienza a enviar los datos.

Se procesan los datos y se pintan las gráficas con sus recursos para cada uno de los nodos que, gracias a las cabeceras, haya identificado.

Por último parte con un TimeOut inicial de 500ms el cual gracias a un slider puede ser modificado para que el servidor varíe el tiempo de envío de los datos.

*Color Map: En la pestaña de Color Map tenemos un dibujo con svg el cual varía de color con respecto los datos que lleguen. 

Para que comience su funcionamiento en la pestaña de Computer Resources seleccionamos mediante su botón asociado el recurso que queremos que Color Map nos muestre.
Una vez recibe el recurso filtra los datos que tienen esa misma cabecera y los pinta según su valor en el mapa de color.

Servidor(Port:8080): 

Gestiona las conexiones de ambas pestañas. 
Cuando se abre la conexión comienza el envío de datos.
Reacciona a mensajes por parte del cliente de la siguiente forma:
*Si recibe un número lo interpretará como un nuevo valor para el TimeOut. Este mensaje por parte del cliente lo envía el slider con sus variaciones.
*Si recibe una string de “Color Map Request”(mensaje que se envía al entrar en la pestaña de Color Map). Buscará si hay algún recurso almacenado y lo envía si es así.
*Si recibe una string distinta del “Color Map Request” ya comentado almacena tal valor como el recurso a mostrar. Y lo notifica a todos los websockets conectados.




