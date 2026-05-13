---
fecha_inicio: "<% tp.date.now("YYYY-MM-DD", "mo-6") %>"
fecha_fin: "<% tp.date.now("YYYY-MM-DD") %>"
tags:
  - tipo/log
  - revision/semanal
---

# Revision Semanal: <% tp.date.now("DD-MM-YYYY", 0) %>

## Reflexion General
> **Logros:** *¿Qué salio bien esta semana?*
>
> **Bloqueos:** *¿Que obstaculizo el progreso?*
>
> **Aprendizaje clave:** *Una leccion para llevar adelante.*

---

## Mantenimiento del Sistema
- [ ] Vaciar bandeja de entrada (00_INBOX)
- [ ] Procesar notas huerfanas desde 00_HOME.md
- [ ] Revisar estado de proyectos activos en 01_PROYECTOS
- [ ] Actualizar estados en notas segun taxonomia (#estado/*)

---

## Barrido de Tareas (Ultimos 7 dias)
```dataview
TASK
WHERE completed
  AND completion >= date(today) - dur(7 days)
  AND !contains(file.path, "10_SISTEMA")
SORT completion DESC
GROUP BY file.link
```

---

## Foco Proxima Semana
1. *Objetivo principal*
2. *Objetivo secundario*
3. *Objetivo terciario*
