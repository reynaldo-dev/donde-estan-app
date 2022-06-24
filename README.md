## Información primaria  

Se está usando redux-toolkit, ya está configurado con su respectivo store. De momento solo se creó un slice, el cual es para manejar  el array de personas desaparecidas.  
El archivo desaparecidos.thunk.js en la carpeta thunks, es el encargado de hacer las peticiones a nivel de redux.  
Para mas info, ver la documentacion de redux <a href="https://redux-toolkit.js.org/tutorials/quick-start"> Redux Toolkit</a>

Posterior a eso, se está usando styled-components para el diseño, ya hay un tema definido y tambien ya está configurado el provider de dicho tema.  
En el archivo HomeScreen hay un ejemplo de como se usa el tema a la hora de estilizar.  
Dejo la documentacion y un video de muestra  
* <a href="https://styled-components.com/docs"> Documentación styled-components</a>
* <a href="https://www.youtube.com/watch?v=WvZvzKbPreM&t=1324s">Video de muestra</a>


### Navegación  
Para la navegación se usará un bottomTab, si desea agregar una ruta principal, dirigirse al archivo Navigation.

### API  
* Tambien se ha creado un cliente axios listo para usarse, de ser necesario cambie la url de la api.
* Tambien se creó un servicio listo para llenar las peticiones a la api.


### Instalación
    ``` bash
        npm install 
        npm run android
    ```



