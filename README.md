# Aquariusm
Proyecto TEL-335 Diseño de Aplicaciones Web y Moviles

## Descripción

Esta proyecto se especializa en ofrecer recomendaciones personalizadas de peces para acuarios. Los usuarios pueden ingresar los parámetros de su acuario, como el tamaño del tanque, el pH del agua, la temperatura y la dureza del agua. A partir de esta información, la página web utiliza una base de datos de peces y su compatibilidad con diferentes parámetros del agua para recomendar peces que puedan vivir en ese entorno. 
La página web puede proporcionar información detallada sobre cada especie de pez recomendada, incluyendo sus requisitos de alimentación, tamaño, hábitos y comportamiento.

## Video Avances
Video 1 ([Avance 1](https://usmcl-my.sharepoint.com/:v:/g/personal/ignacio_munozm_usm_cl/ESbZuBU9QhVHtXDVkSiwqEYBCygsZyEVuDY7zunX_MUMgA?e=Vp26Yd))
## integrantes
- Oscar Martin Carrasco Reyez
- Eduardo Blas Gomez
- Ignacio Muñoz Martinez
- José Tomás Tapia

## Prerrequisitos
- Install node.js ([Node](https://nodejs.org/en/))
- Install Code editor ([VS code](https://code.visualstudio.com/))
- Create Atlas cluster ([Get started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.60427181.186721350.1682018286-1256642793.1682018286))

>The React application works with Node.js 16 and below.
## Cómo correr
Cree un parámetro de conexión URI de Atlas en 'server/config.env' con su URI de Atlas (obténgalo de su propio clúster creado), debería verse así:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```
