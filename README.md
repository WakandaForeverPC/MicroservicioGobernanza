# Microservicio de Gobernanza

Este proyecto es un microservicio de votación de gobernanza desarrollado con Spring Boot, JavaScript y Thymeleaf.
Permite a los usuarios votar por diferentes partidos y visualizar los resultados en un gráfico.

## Tecnologías Utilizadas

- **Java**: Lenguaje de programación principal.
- **Spring Boot**: Framework para el desarrollo del microservicio.
- **Maven**: Herramienta de gestión de dependencias y construcción del proyecto.
- **Thymeleaf**: Motor de plantillas para la generación de vistas HTML.
- **JavaScript**: Lenguaje de programación para la lógica del lado del cliente.
- **Chart.js**: Librería para la visualización de datos en gráficos.
- **Font Awesome**: Librería de iconos para mejorar la interfaz de usuario.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `src/main/java/com/proyecto/microserviciogobernanza`: Contiene el código fuente del microservicio.
  - `controller`: Controladores de Spring MVC.
  - `MicroservicioGobernanzaApplication.java`: Clase principal para iniciar la aplicación.
- `src/main/resources`: Contiene los recursos estáticos y las plantillas.
  - `static/gobernanza`: Archivos estáticos como CSS y JavaScript.
  - `templates`: Plantillas Thymeleaf.
  - `application.properties`: Archivo de configuración de la aplicación.

## Configuración

Asegúrate de tener configurados los siguientes servicios antes de ejecutar la aplicación:

- **Servidor Eureka**: Para el registro y descubrimiento de servicios.
- **Servidor Configuracion**: Para la gestión centralizada de la configuración.
- **Api_Gateway**: Para la gestion de los puertos de cada microservicio.
