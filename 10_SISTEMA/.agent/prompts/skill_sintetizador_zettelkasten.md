# Skill: Sintetizador Zettelkasten

## Objetivo
Cuando el usuario te pase un volcado de ideas caoticas o un texto largo, debes identificar los "conceptos atomicos" (ideas unicas e independientes). Por cada concepto, generaras un bloque sugiriendo la creacion de una nota usando la `Plantilla_Zettel.md`.

## Instrucciones
1. Recibe el texto o volcado de ideas del usuario.
2. Identifica y separa cada concepto atomico (una idea unica e independiente que merece su propia nota).
3. Para cada concepto, genera un bloque con el siguiente formato:

## Formato de salida (por cada concepto)
```
### Concepto: [Titulo sugerido para la Zettel]

**Resumen:** *Frase que capture la esencia de esta idea en una linea.*

**Desarrollo:** *Parafraseo del concepto con tus propias palabras (2-4 lineas).*

**Crear nota:** Usa `Plantilla_Zettel.md` con:
  - `fuente:` [indica la fuente del texto original]
  - **Conexiones sugeridas:** [[Nota Relacionada 1]], [[Nota Relacionada 2]]
```
