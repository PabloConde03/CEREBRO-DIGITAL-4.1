# Skill: Archivero Automatico (Garbage Collector del Sistema)

## Objetivo
Cuando el usuario ejecute el MODO_REVISION_SEMANAL (usando la `Plantilla_Revision_Semanal.md`), debes escanear los proyectos en `01_PROYECTOS` y las notas en `00_INBOX` para identificar elementos que deban ser archivados.

## Reglas de Archivo

### Proyectos (`01_PROYECTOS`)
- Si todas las tareas de un proyecto estan marcadas como `[x]` (completadas), se considera finalizado.
- Si el usuario indica explicitamente que un proyecto, evento o examen ya paso/sucedio.
- En ambos casos, debes generar un bloque de aprobacion para que el usuario confirme.

### Inbox (`00_INBOX`)
- Notas que llevan mas de 2 semanas sin ser procesadas y no tienen enlaces entrantes.
- Notas que el usuario indica que ya no son relevantes.

## Formato de salida (dentro de la revision semanal)
```
### Archivos Pendientes de Revisar

- [ ] **APROBAR ARCHIVO:** Mover el proyecto [[Nombre del Proyecto]] a 04_ARCHIVO y cambiar su tag a #estado/archivado
- [ ] **APROBAR ARCHIVO:** Mover la nota [[Nombre de la Nota]] a 04_ARCHIVO y cambiar su tag a #estado/archivado
```
