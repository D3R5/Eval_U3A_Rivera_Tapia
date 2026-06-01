# Centro de Negocios Santiago - Landing Page

## Descripción

Landing page desarrollada con Vite+React para el Centro de Desarrollo de Negocios Santiago de SERCOTEC.

La aplicación permite visualizar información institucional, servicios, testimonios y preguntas frecuentes obtenidas dinámicamente desde una API simulada mediante JSON Server. Además, incorpora un panel administrativo para la gestión de servicios mediante operaciones CRUD.

---

## Tecnologías Utilizadas

* React
* Vite
* JavaScript ES6+
* Axios
* Tailwind CSS
* JSON Server
* Swiper.js
* Git y GitHub

---

## Funcionalidades

### Sitio Público

* Sección Hero informativa.
* Sección Nosotros consumida desde API.
* Listado dinámico de servicios.
* Tarjetas reutilizables para servicios.
* Selección automática de servicio en formulario de contacto.
* Carrusel responsive de testimonios.
* Preguntas frecuentes dinámicas.
* Formulario de contacto con validaciones.
* Navegación mediante anclas internas.

### Panel de Administración

Permite administrar servicios mediante:

* Crear servicios.
* Editar servicios.
* Eliminar servicios.
* Actualizar contenido dinámicamente.

---

## Estructura del Proyecto

```text
public
│
├── file.svg
src/
│
├── assets/
│   └── Logo_Sercotec.png
│
├── components/
│   ├── About.jsx
│   ├── AdminPanel.jsx
│   ├── ContactForm.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ServiceCard.jsx
│   ├── Services.jsx
│   └── Testimonials.jsx
│
├── services/
│   └── api.js
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx


db.json
eslint.config.js
index.html
package-lock-json
package.json
README.md
vite.config.js
```

---

## Instalación

### 1. Clonar repositorio

```bash
git clone enlace del repositorio

### 2. Entrar al proyecto

```bash
cd nombre-del-proyecto
```

### 3. Instalar dependencias

```bash
npm install
```

---

## Ejecución

### Iniciar Frontend

```bash
npm run dev
```

Aplicación disponible en:

```text
http://localhost:5173
```

### Iniciar API

En una segunda terminal:

```bash
npm run server
```

API disponible en:

```text
http://localhost:3000
```

---

## Endpoints Utilizados

### About

```http
GET /about
```

### Servicios

```http
GET    /services
POST   /services
PUT    /services/:id
DELETE /services/:id
```

### Testimonios

```http
GET /testimonials
```

### Preguntas Frecuentes

```http
GET /faq
```

---

## Ejemplo de Consumo de API

```jsx
useEffect(() => {
  api.get("/services")
    .then((res) => setServices(res.data))
    .catch(() => {
      alert("Error al cargar servicios");
    });
}, []);
```

---

## Componentes Reutilizables

### ServiceCard

Componente reutilizable encargado de mostrar:

* Imagen
* Título
* Descripción
* Botón de contacto

Ejemplo de uso:

```jsx
<ServiceCard
  title={service.title}
  description={service.description}
  image={service.image}
  setSelectedService={setSelectedService}
/>
```

---

## Seguridad Implementada

### Formulario de Contacto

* Validación de campos obligatorios.
* Validación de correo electrónico.
* Longitud mínima de texto.
* Protección anti-spam mediante honeypot.
* Prevención de envío de formularios vacíos.

---

## Accesibilidad y Usabilidad

* Diseño responsive para dispositivos móviles y escritorio.
* Navegación intuitiva mediante menú.
* Imágenes con atributo alt.
* Contraste adecuado entre texto y fondo.
* Componentes reutilizables para mantener consistencia visual.

---

## Optimización

* Carga diferida de imágenes mediante:

```jsx
loading="lazy"
```

* Componentes reutilizables.
* Consumo eficiente de API.
* Separación de responsabilidades.

---

## Control de Versiones

El proyecto fue gestionado utilizando Git y GitHub.

Flujo de trabajo recomendado:

```bash
git checkout -b feature/nueva-funcionalidad
git add .
git commit -m "feat: agrega nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

Posteriormente se realiza Pull Request para revisión e integración.

---

## Mejoras Futuras

* Sistema de autenticación para panel administrativo.
* Base de datos real.
* Envío de correos desde formulario.
* Dashboard de estadísticas.
* Pruebas unitarias y de integración.

---

## Autores

Integrantes:

* Diego Rivera S.
* Luis Tapia C.

Proyecto desarrollado para la Evaluación Sumativa Unidad 3.

Instituto Profesional San Sebastián.

## Imágen del sitio web

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/6020f09b-ef75-4a6e-b1b8-618706a2b1a9"
    alt="Captura del proyecto"
    width="700"
  />
</p>
