# MEMORIA DEL AGENTE - CEREBRO DIGITAL

## Reglas de Oro
- No extraer tareas simples como notas independientes.
- Las sugerencias de extracción deben incluir checkbox de aprobación (`- [ ] **APROBAR EXTRACCIÓN:**`).
- Validar metadatos YAML contra el cuerpo de la nota diaria (checkboxes de rutina).
- Directorio por defecto para conocimiento técnico: `03_RECURSOS/`.
- **Nunca** asumir `04_ARCHIVO` como destino.

## Estado de Proyectos
- *(Ninguno activo aún)*

## Diccionario de Entidades
- **Tecnologías:** OAuth2.0, JWT, refresh token, cookies HttpOnly, Raspberry Pi, Pi-hole, DNS.
- **Personas recurrentes:** *(ninguna aún)*
- **Lugares:** *(ninguno aún)*

## Historial de Sesiones

### Sesión 2026-05-13
- **Acción:** Procesamiento de nota diaria de prueba (2026-05-13).
- **Decisiones de estructura:**
  - Corregido YAML: `ejercicio: false → true`, `lectura: false → true`.
  - Extraídas 2 tareas pendientes.
  - Generadas 3 sugerencias de extracción con aprobación checkbox.
  - Destinos sugeridos: `03_RECURSOS/Desarrollo_Software/Seguridad/Autenticacion_OAuth2_JWT.md`, `01_PROYECTOS/Servidor_DNS_PiHole/Propuesta.md`, `02_AREAS/Hogar/Mantenimiento.md`.
- **Infraestructura creada:**
  - `10_SISTEMA/Plantillas/` — 3 plantillas (Nota_Recurso, Proyecto, MOC).
  - `10_SISTEMA/Scripts/` — 2 scripts DataviewJS (tareas pendientes, enlaces huérfanos).
  - `00_DASHBOARD.md` — Panel de control con vistas embebidas.
- **Estado:** Estructura base finalizada. Sesión concluida por el usuario.
