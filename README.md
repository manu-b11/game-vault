# GameVault

## Estudiante
Manuela Bolivar Sanchez

## Descripción del proyecto
GameVault es una aplicación móvil para explorar y administrar juegos. Permite visualizar un catálogo de juegos por plataforma y género, ver detalles como precio, descripción y clasificación por edades, y agregar juegos a favoritos. La app está diseñada para brindar una experiencia limpia y rápida de navegación entre pantallas.

## Funcionalidades
- Visualizar un catálogo de juegos.  
- Ver detalles de cada juego (imagen, descripción, precio, clasificación por edades).  
- Agregar o quitar juegos de favoritos.  
- Navegación fluida entre pantallas con Stack Navigator.  
- Interfaz amigable y responsive con colores diferenciados por género y plataforma.

## Tecnologías utilizadas
- React Native  
- React Navigation (Stack & Tabs)  
- React Native Vector Icons  
- JavaScript (ES6+)  
- React Native Safe Area Context  
- React Native CLI  

## Instalación y ejecución
### 1. Clonar el repositorio:
- git clone https://github.com/manub-11/GameVault.git

### 2. Instalar dependencias:
- cd GameVault
- npm install

### 3. Ejecutar la app en Android:
- npx react-native run-android

### 4. Ejecutar la app en iOS (requiere Mac):
- npx react-native run-ios


## Uso
- Abrir la aplicación y explorar el catálogo de juegos.  
- Seleccionar un juego para ver sus detalles.  
- Presionar “Agregar a favoritos” para marcar tus juegos preferidos.  
- Usar el botón de “Volver” dentro de la pantalla de detalle para regresar al catálogo.  

## Flujo de navegación

| Pantalla          | Descripción                                           |
|------------------|-------------------------------------------------------|
| GameListScreen    | Muestra el catálogo completo de juegos.              |
| GameDetailScreen  | Detalles del juego seleccionado con botón de favoritos. |
| AddGameScreen     | (Futura) Permite agregar juegos al catálogo.        |
| GamingNewsScreen  | (Futura) Noticias sobre juegos.                     |

## Colores por plataforma y género

### Plataforma

| Plataforma | Color   |
|------------|---------|
| PS5        | #4B69FF |
| PC         | #27AE60 |
| Switch     | #E74C3C |
| Xbox       | #107C10 |

### Género

| Género     | Color   |
|------------|---------|
| Acción     | #FF6B6B |
| Aventura   | #FFA500 |
| Simulación | #3498DB |
| Terror     | #8E44AD |
| RPG        | #1ABC9C |
| Deportes   | #F1C40F |
| Estrategia | #E67E22 |

