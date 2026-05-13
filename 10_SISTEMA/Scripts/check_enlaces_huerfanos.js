/**
 * Detector de Notas Huérfanas (sin enlaces entrantes)
 */
const huerfanos = dv.pages()
    .where(p => 
        p.file.inlinks.length === 0 && 
        !p.file.path.includes("10_SISTEMA") && // Ignoramos la carpeta de sistema
        !p.file.path.includes("00_INBOX") &&   // Ignoramos el inbox (es normal que sean huérfanas)
        p.file.name !== "Dashboard"            // Ignoramos la nota principal
    )
    .sort(p => p.file.mday, 'desc');

if (huerfanos.length > 0) {
    dv.table(["Nota Aislada", "Última Modificación"], 
        huerfanos.map(p => [p.file.link, p.file.mday]));
} else {
    dv.paragraph("✨ **Cerebro bien conectado.** No hay notas huérfanas fuera del sistema.");
}
