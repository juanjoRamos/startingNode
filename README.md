# startingNode

Proyecto con el que he empezado a programar con NodeJS.
Para empezar he seguido los pasos recomendados por un libro de NodeJS

# Estructura del proyecto.

  - Paso 1: Crear la estructura que creo adecuada para mi proyecto. (El archivo principal va a ser el index.js)
  - Paso 2: Después de crear la estructura, implementamos las librerias de NodeJS al proyecto.
  
# Explicación del proyecto.

Como este proyecto no va a acceder a una base de datos, sino a un archivo JSON deberemos leer este archivo el cual contendrá información que no significa nada, información inventada para no comprometer datos de terceras personas ajenas a este proyecto.

# Estructura del archivo principal.

Cuando vamos a comenzar a programar debemos de saber que librerias vamos a necesitar para comenzar:

  - Paso 1: Llamar a las librerias http, fs, url y slugify. Para saber como funcionan dejo junto a su nombre su enlace en la web para consultar información.
          - http = https://nodejs.org/api/http.html
          - fs = https://nodejs.org/api/fs.html
          - url = https://nodejs.org/api/url.html
          - slugify = https://www.npmjs.com/package/slugify
  
  - Paso 2: Leeremos las plantillas HTML mediante la funcion readFileSync() que funciona de la siguiente forma, le pasamos la dirección en la que se encuentra el archivo, con la característica que se realizará de forma síncrona. 
 
  - Paso 3: Como sabemos, la información JSON debe ser parseada para poder tratar con ella.
 
  - Paso 4: Crearemos servidor para poder tratar el comportamiento de la pequeña web. 
 
Recibiremos peticiones las cuales deben ser respondidas. Por tanto lo primero que haremos será recoger la dirección url junto a sus querys. Estas son palabras reservadas que se usan en los Exploradores como son Chrome, Firefox, Opera, etc.

  - Paso 5: A la hora de comprobar las url crearemos una funcion checkAdress() que nos devolverá un número y dependiendo de éste número entraremos en una web u otra. 
  
  - Paso 6: Una forma de agilizar trabajo es crear funciones que nos ayuden a la hora de programar. Esto lo hacemos con las funciones captureHTML() y parseTemplate().
           - captureHTML() = Lo que hará seŕa obtener los datos del JSON convertidos en array y añadirlos en la web como objetos independientes.
           - parseTemplate() = Lo que hará será intercambiar variables incluidas en los HTML para ser sustituidas por información del JSON.
   
En el caso de querer ver la información reducida pero importante, es decir entrar en la api podremos hacerlo con sencillez.
Y si intentamos entrar a otra web distinta a las predeterminadas nos devolverá a la página 404.
