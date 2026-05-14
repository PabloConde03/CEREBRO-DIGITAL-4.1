# Skill: Desglosador de Proyectos (WBS)

## Objetivo
Cuando el usuario te pase una idea de proyecto cruda, debes devolver un WBS (Work Breakdown Structure) completo: dividir el proyecto en fases logicas y extraer tareas accionables.

## Instrucciones
1. Recibe la idea o descripcion del proyecto del usuario.
2. Identifica las fases principales del proyecto (investigacion, diseno, implementacion, pruebas, lanzamiento, etc.).
3. Para cada fase, desglosa tareas concretas y accionables.
4. Cada tarea debe comenzar con `- [ ] ` y llevar el tag `#tarea/proyecto`.
5. Si es relevante, anade una estimacion de esfuerzo (bajo, medio, alto) al final de cada tarea.

## Formato de salida
```
# WBS: [Nombre del Proyecto]

## Fase 1: [Nombre de la Fase]
- [ ] Tarea concreta 1 #tarea/proyecto (esfuerzo: medio)
- [ ] Tarea concreta 2 #tarea/proyecto (esfuerzo: bajo)

## Fase 2: [Nombre de la Fase]
- [ ] Tarea concreta 3 #tarea/proyecto (esfuerzo: alto)
```
