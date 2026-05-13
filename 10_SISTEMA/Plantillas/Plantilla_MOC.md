---
aliases: []
tags:
  - moc
---

# MOC: {{title}}

## Indice Principal
> *Añade aquí enlaces manuales y estructurados a tus notas más importantes.*
-

---

## Bandeja de Entrada del MOC (Notas Huerfanas)
> *Notas que tienen el tag de este tema pero aún no han sido ubicadas en el índice de arriba.*

```dataview
LIST
FROM #pon_aqui_el_tag_del_tema
WHERE !contains(file.inlinks, this.file.link) AND file.name != this.file.name
```
