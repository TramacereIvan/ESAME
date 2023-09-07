const categories = document.querySelectorAll('.briciola li[data-category]');
const videos = document.querySelectorAll('.card');

categories.forEach(category => {
  category.addEventListener('click', () => {
    const selectedCategory = category.dataset.category;
    
    // Controlla se la categoria è già selezionata
    const isAlreadySelected = category.querySelector('a').classList.contains('selected');
    
    // Rimuovi la classe 'selected' da tutte le parole di categoria
    categories.forEach(cat => cat.querySelector('a').classList.remove('selected'));
    
    if (isAlreadySelected) {
      // Se la categoria è già selezionata, mostra tutti i video (rimuovendo la proprietà display: none)
      videos.forEach(video => {
        video.style.display = 'block';
      });
    } else {
      // Se la categoria non è già selezionata, mostra solo i video corrispondenti a quella categoria
      videos.forEach(video => {
        const videoCategory = video.querySelector('a').dataset.category;

        if (selectedCategory === 'all' || selectedCategory === videoCategory) {
          video.style.display = 'block';
        } else {
          video.style.display = 'none';
        }
      });

      // Aggiungi la classe 'selected' al link della categoria selezionata
      category.querySelector('a').classList.add('selected');
    }
  });
});

function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function() {
    const selectedCategory = getUrlParameter('category');

    if (selectedCategory) {
        // Imposta la classe 'selected' sulla parola di categoria corrispondente
        const categories = document.querySelectorAll('.briciola li[data-category]');
        categories.forEach(category => {
            if (category.dataset.category === selectedCategory) {
                category.querySelector('a').classList.add('selected');
            }
        });

        // Filtra i video in base alla categoria selezionata
        const videos = document.querySelectorAll('.card');
        videos.forEach(video => {
            const videoCategory = video.querySelector('a').dataset.category;
            if (selectedCategory === 'all' || selectedCategory === videoCategory) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    }
});