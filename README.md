## Links:
Docs: https://docs.google.com/document/d/1jPaQhhFyzg3qxVTVQWVeyD5QeR0L8on03vv8mxnJSEk/edit?usp=sharing
Trello: https://trello.com/invite/b/698c608fbd8b8be18c810c17/ATTI9e3482b3bc4fc218e94e4f0418ba83c654DC4CD1/kryptontrade

# 🌐 Proyecto 2: Tu App

## 🧩 Descripción

Construirás una **aplicación React** que consuma una o varias **APIs externas** para mostrar datos dinámicos e interactuar con ellos.  

El objetivo es:

- Aprender a integrar APIs reales (fetch/axios, manejo de respuestas, errores, estados de carga, etc.).  
- Construir una UI atractiva usando React (componentes, hooks, estado, posiblemente contexto o store).  
- Organizar el proyecto con buenas prácticas: documentación previa, estructura clara, control de versiones, tareas bien definidas, etc.  
- Seguir un flujo profesional de desarrollo (Backlog → Doing → Pull Requests → Review → Done).  

### 💡 Ejemplos de Apps posibles

- Dashboard de videojuegos, películas, clima, criptomonedas, etc.  
- Buscador de recetas que use APIs para ingredientes, nutrición e imágenes.  
- App de noticias que combine varias fuentes y permita filtrado/búsqueda.  
- Comparador de productos usando APIs de precios y disponibilidad.  

---

## ✅ Requisitos iniciales / Pasos previos

1. **Elección del proyecto**  
   - Define qué hará la app: objetivo, funcionalidades y flujo de uso.  
   - Asegúrate de que sea factible con las APIs elegidas.  

2. **Documentación previa (OBLIGATORIA)**  
   - Usa un documento compartido (copiar plantilla) para definir:  
     - Descripción completa de la app  
     - Objetivo  
     - Funcionalidades y mecánicas  
     - Pantallas / vistas  
     - Flujo de la app  
     - APIs a usar y cómo consumirlas  

3. **Crear tablero de tareas (Trello)**  
   - Columnas recomendadas: Backlog, To Do, Doing, Review, Done  
   - Añade tareas para todas las funcionalidades, pantallas, fetch de APIs, manejo de errores, estilos, tests, etc.  

4. **Configurar repositorio (GitHub / GitLab / Bitbucket)**  
   - Crear el repo con el nombre del proyecto  
   - Añadir este README  
   - Crear estructura inicial de carpetas y primer commit  

---

## 🔧 Desarrollo & Flujo de trabajo

- Trabaja tarea por tarea, moviéndolas en el tablero.  
- Para cada tarea: crear rama nueva → implementar → testear → Pull Request → Review → Merge.  
- Mantén buena organización: carpetas claras, componentes bien estructurados, separación de lógica.  
- Configura variables de entorno para claves o datos sensibles.  

---

## 🖼️ Uso de IA / Recursos gráficos y multimedia

Puedes aprovechar herramientas de IA para generar assets que complementen tu app, ahorrar tiempo, y aprender una parte muy real del desarrollo moderno — diseño / estilo visual. Por ejemplo:

- Crear **logotipo**, iconos, **imágenes de cabecera**, **backgrounds**, ilustraciones, etc.  
- Generar **imágenes de muestra** para la interfaz (cards, banners, avatars, ilustraciones).  
- Crear assets gráficos (SVG, PNG, JPEG) o incluso assets animados / diseños UI.  

💡 Herramientas recomendadas:  
- IA generativa de imágenes: DALL·E, Midjourney, Adobe Firefly  
- Herramientas de diseño + IA: Canva, Adobe + plugins  

📂 Organización recomendada: crea una carpeta `/assets` o similar en el proyecto, para mantener todo ordenado.  

---

## 📡 Ejemplos de APIs sugeridas

Aquí tienes un listado con APIs públicas y relativamente fáciles de usar — ideales para proyectos de clase o primeros proyectos React con datos externos:  

| API / Servicio | Qué aporta / Para qué sirve |
|---------------|-----------------------------|
| **OpenWeatherMap** | Datos meteorológicos globales (clima, predicción, etc.) |
| **The Movie Database (TMDB) API** | Información sobre películas, series, actores, carátulas |
| **CoinGecko API** | Datos de criptomonedas: precios, cambios, historial |
| **Unsplash API** | Imágenes libres de alta calidad — backgrounds, portadas, ilustraciones |
| **PokeAPI** | Datos tipo juegos/entretenimiento — catálogos, mini-apps interactivas |
| **The Cocktail DB API** | Recetas de cócteles, ingredientes, imágenes |
| **The Cat API / The Dog API** | Imágenes de mascotas para diversión o pruebas de UI |
| **Agify.io** | Recibe un nombre y devuelve edad estimada — bueno para practicar fetch y JSON |


## 🚀 Deploy

Recomendado: **Vercel** (https://vercel.com/)  

Pasos:

1. Subir tu proyecto a GitHub.  
2. Ir al dashboard de Vercel → “New Project” → seleccionar tu repo.  
3. Vercel detectará que es React y configurará los comandos de build automáticamente (`npm run build`).  
4. Pulsar “Deploy” → obtendrás una URL tipo `https://tu-app.vercel.app`.  

**Alternativas:**  
- Netlify: fácil de usar para apps estáticas / JAMstack  
- Cloudflare Pages: CDN rápida y plan gratuito  

---

## 📁 Estructura sugerida del proyecto
