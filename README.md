
 # Proyecto Noc

 El objetivo es crear una serie de tareas usando 
 Arquitectura Limpia con TypeScript


 # Dev
 1. Clonar el archivo .env.template  a .env
 2. Configurar las varibales de entorno

```
PORT = 3000

MAILER_EMAIL = soporte@gmail.com
MAILER_SECRET_KEY =123456

PROD=false
3. Ejecutar el comando  ```npm install```
```
4. levantar la base de datos con el comando
  ```
   docker compose up -d
  ```
5. Ejecutar el comando
 ```
 migrate dev
 ```
6. Ejecutar el comando ```npm run dev```