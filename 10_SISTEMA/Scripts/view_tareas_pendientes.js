/**
 * Vista de Tareas Pendientes agrupadas por contexto
 */
const tasks = dv.pages().file.tasks.where(t => !t.completed && t.text.includes("#tarea"));

if (tasks.length > 0) {
    // Agrupamos las tareas por su tag de contexto (ej: #tarea/hogar)
    const grouped = tasks.groupBy(t => {
        const match = t.text.match(/#tarea\/[^\s]+/);
        return match ? match[0].toUpperCase() : "#TAREA/GENERAL";
    });

    for (let group of grouped) {
        dv.header(3, group.key);
        dv.taskList(group.rows, false);
    }
} else {
    dv.paragraph("✅ **¡Todo al día!** No se han detectado tareas pendientes con el tag #tarea.");
}
