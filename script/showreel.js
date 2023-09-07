document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("progressive-video");

    // Definisci il numero di chunk in cui dividere il video (puoi regolare questa costante in base alle tue esigenze)
    const numberOfChunks = 5;

    // Memorizza i chunk caricati finora
    let loadedChunks = 0;

    // Carica il video in base alla posizione di visualizzazione corrente
    function loadNextChunk() {
        if (loadedChunks < numberOfChunks) {
            // Calcola la percentuale del video caricata finora
            const percentageLoaded = (loadedChunks / numberOfChunks) * 100;

            // Carica il prossimo chunk solo se il video è già stato caricato fino a quella percentuale
            if (video.buffered.end(0) >= percentageLoaded) {
                const chunkIndex = loadedChunks + 1;
                video.src = `video/chunk_${chunkIndex}.mp4`;

                // Incrementa il contatore dei chunk caricati
                loadedChunks++;

                // Ascolta l'evento di caricamento del prossimo chunk
                video.addEventListener("canplaythrough", loadNextChunk, { once: true });
            }
        }
    }

    // Inizia il caricamento del primo chunk
    loadNextChunk();
});