const api = {
    key: '95cd4f233ae9e6fc3e3c50aa1d461e33',
    url: 'https://api.openweathermap.org/data/2.5/weather',
}

async function search(query) {
    try {
        const response=await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log("Error");
        alert('hubo un error');
    }
}

function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
  }

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');
searchform.addEventListener('submit', onSubmit, true);