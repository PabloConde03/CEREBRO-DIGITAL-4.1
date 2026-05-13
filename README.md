# CEREBRO-DIGITAL-4.1

Sistema PKM (Personal Knowledge Management) basado en la metodologia PARA, optimizado para ser gestionado por un agente de IA dentro de Obsidian. Estructura el conocimiento, automatiza la clasificacion y mantiene un ciclo de revision continuo.

## Arquitectura de la Boveda

```
CEREBRO-DIGITAL-4.1/
├── 00_INBOX/            # Bandeja de entrada: notas sin procesar
├── 01_PROYECTOS/        # Esfuerzos con fecha limite y objetivo definido
├── 02_AREAS/            # Esferas de responsabilidad continua (salud, finanzas, hogar, etc.)
├── 03_RECURSOS/         # Base de conocimiento: snippets, teoria, referencias
├── 04_ARCHIVO/          # Notas inactivas preservadas para consulta
├── 05_BITACORA/         # Notas diarias, trackers de habitos y rutinas
├── 10_SISTEMA/          # Motor del agente: plantillas, scripts y memoria
│   ├── Plantillas/      # 5 plantillas base (ver seccion abajo)
│   ├── Scripts/         # Scripts DataviewJS para el dashboard
│   └── .agent/          # Memoria persistente y convenciones del agente
├── 00_HOME.md           # Panel de mando central con vistas Dataview
└── README.md            # Esta documentacion
```

## Ontologia de Etiquetas

Taxonomia estricta y obligatoria para toda nota extraida:

| Jerarquia | Valores |
|---|---|
| `#estado/` | `borrador`, `proceso`, `completado`, `archivado` |
| `#tipo/` | `recurso`, `moc`, `proyecto`, `log` |
| `#tarea/` | `personal`, `profesional`, `mantenimiento` |

No usar etiquetas fuera de esta lista sin autorizacion explicita.

## Requisitos Previos (Plugins)

- **Dataview** — Necesario para las consultas y vistas del sistema. Tras instalar, activar *"Enable JavaScript Queries"* en la configuracion del plugin.
- **Templater** — Necesario para las variables dinamicas en plantillas (fechas, titulos).

## El Motor del Agente (10_SISTEMA)

### Plantillas incluidas

| Plantilla | Proposito |
|---|---|
| `Plantilla_Nota_Diaria.md` | Registro diario con YAML de rutinas y bandeja de entrada |
| `Plantilla_Nota_Recurso.md` | Extraccion de conocimiento: snippets, teoria, conceptos |
| `Plantilla_Proyecto.md` | Gestion de proyectos con estado, tareas y log de decisiones |
| `Plantilla_MOC.md` | Mapa de Contenido con bloque Dataview para notas huerfanas |
| `Plantilla_Revision_Semanal.md` | Ciclo de revision semanal con barrido de tareas |

### Memoria del agente (.agent/)

- `.agent/memory/MEMORY.md` — Registro de sesiones, reglas de oro y diccionario de entidades.
- `.agent/02_CONVENCIONES_TAGS.md` — Documentacion oficial de la taxonomia.
- El agente utiliza esta carpeta para persistir contexto entre sesiones y mantener coherencia en las decisiones de enrutamiento.

### Scripts

- `10_SISTEMA/Scripts/view_tareas_pendientes.js` — Lista tareas activas agrupadas por contexto.
- `10_SISTEMA/Scripts/check_enlaces_huerfanos.js` — Detecta notas aisladas sin enlaces entrantes.

## Guia de Instalacion Rapida

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/CEREBRO-DIGITAL-4.1.git
   ```
2. Abrir Obsidian y seleccionar *"Abrir carpeta como boveda"* apuntando al directorio clonado.
3. Instalar los plugins comunitarios **Dataview** y **Templater** desde la configuracion de Obsidian.
4. En Dataview, activar *"Enable JavaScript Queries"* en los ajustes del plugin.
5. Abrir `00_HOME.md` para visualizar el panel de mando central.

> Este proyecto es un boilerplate publico. Puedes adaptar las areas, proyectos y taxonomia a tu contexto personal sin modificar la arquitectura base.
