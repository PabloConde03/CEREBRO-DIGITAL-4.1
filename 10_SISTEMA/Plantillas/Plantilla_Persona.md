---
aliases: []
tags:
  - tipo/contacto
relacion:
empresa:
---

# {{title}}

## Datos de Contacto
- **Telefono:**
- **Email:**
- **Redes / LinkedIn:**
- **Direccion:**

## Contexto / Como nos conocimos
> *Breve historia de como conociste a esta persona y el contexto de la relacion.*

## Notas donde aparece esta persona
```dataview
LIST
FROM "00_INBOX" OR "01_PROYECTOS" OR "02_AREAS" OR "03_RECURSOS"
WHERE contains(file.content, this.file.link) AND file.name != this.file.name
SORT file.ctime DESC
```
