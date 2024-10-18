# Imagen Base
FROM node
 
# Crear el directorio donde va a vivir mi aplicacion
WORKDIR /app
 
# Copiar el package.json
COPY package*.json ./
 
# Instalar los Node Modules
RUN npm install
 
# Copiar archivos de mi local al contenedor
COPY . .
 
# Compilar aplicacion
RUN npm run build
 
# Comando de inicio de contenedor
CMD ["node","dist/src/index.js"]