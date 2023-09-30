# gorditosss
Gorditos proyect, developed by gorditos for gorditos

## Collaboration

Please, feel free to collaborate.
About server matters, talk to Gerardo.

## Endpoints

### /listAll

**GET** Devuelve una lista de los próximos cocineros ordenados por fecha. Sería conveniente limitar la cantidad a 5 ó 6 por temas de espacio en pantalla, para no tener que hacer paginación

### /nextGordito

**GET** Devuelve el próximo cocinero. En el mock que hice pongo datos muy básicos pero se pueden agregar los datos que parezca conveniente.

## Endpoints que ún no se prototiparon

### /skipGordito

**PUT** { name: string } Saltea el cocinero. El algoritmo debería hacer lo que sea necesario para colocarlo como siguiente en la lista.

### /confirmGordito

**PUT** { name: string } Confirma que el cocinero cumplió. El algoritmo debería hacer lo que sea necesario para que no le toque más durante el tiempo justo.