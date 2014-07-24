
l3p3_dashboard_serv_node
========================

Jorge Ramírez Carrasco and Federico A. Fernández Moreno
* * *

Description
--------
Handles connections of both Computer Resources and ColorMap tabs.

How it works
--------
When a connection is established, no matter from what tab, the server starts sending data through that connection.

It also handles the messages received by the client:

* If a number is received, the server will take it as a timeout value, and will change its sending-data rate consequently.
* If a *Color Map Request* string is received (the client sends this when the ColorMap tag is entered), the server will send the desired resource to be represented, if there is one (remember that the user must have selected one before, otherwise the ColorMap will not work).
* Finally, if a different string is received, the server will take it as a resource id, and store it. The id will also be broadcast to all websockets
* * *

Input format
--------

Server requires the input data with these charactheristics.

    -Format: “.csv”.
    -First line: Headings ended with node number.
    -Separation: Backspace.

Headings ended with the same number may be interpreted by the client as the same chart.
Headings may be given in each order.
Headings not given in the first line may result in the client ignoring the data before the headings.

* * *

Required Libraries
--------

The following libraries have been added:

  **Server (npm libraries)**: 

      fs("filesystem")  
      ws("websocket")

  **Client**:

      sugar-1.4.1.min.js
      jquery-2.0.3.min.js
      chroma.min.js
      
Moreover to run graphics is necessary the following code available in his author repository.

      smoothie.js [link to the author's repo](https://github.com/joewalnes/smoothie.git)
      reconnecting-websocket.js [link to the author's repo](https://github.com/joewalnes/reconnecting-websocket.git)

Note that the version of *reconnecting-websocket.js* here is a modified version of the original.

* * *