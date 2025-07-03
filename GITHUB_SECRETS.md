# 🔐 Configuración de Variables de Entorno para GitHub Pages

## ⚠️ IMPORTANTE: Configurar antes del primer deploy

Para que el formulario de contacto funcione en GitHub Pages, necesitas configurar las variables de entorno de EmailJS como secretos en GitHub.

## 📋 Pasos para configurar:

### 1. Ve a tu repositorio en GitHub
- https://github.com/LuisCarlosP/portafolio-personal

### 2. Configurar secretos
- Ve a **Settings** (Configuración)
- En el menú lateral, haz clic en **Secrets and variables**
- Selecciona **Actions**
- Haz clic en **New repository secret**

### 3. Crear estos 3 secretos:

**Secreto 1:**
- Name: `VITE_EMAILJS_SERVICE_ID`
- Value: `service_dmlv0uf`

**Secreto 2:**
- Name: `VITE_EMAILJS_TEMPLATE_ID`
- Value: `template_gz844vp`

**Secreto 3:**
- Name: `VITE_EMAILJS_PUBLIC_KEY`
- Value: `KKgkIZBxQLEVEnu7P`

## ✅ Una vez configurado:

- ✅ Tus keys de EmailJS estarán **seguras y privadas**
- ✅ El formulario funcionará en GitHub Pages
- ✅ Nadie podrá ver tus credenciales
- ✅ El código seguirá funcionando en desarrollo (usando .env)

## 🚨 Seguridad:

- El archivo `.env` **NO se sube** a GitHub (está en .gitignore)
- Las variables solo las ve GitHub Actions durante el build
- Tu repositorio puede seguir siendo público sin riesgos

**¡Ahora tu portfolio es seguro y profesional!** 🔒
