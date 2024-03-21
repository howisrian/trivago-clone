$(document).ready(function () {
    $(".js-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  
  fetch(
    "https://raw.githubusercontent.com/howisrian/Projeto-Web/main/assets/data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        $(".js-slider").slick(
          "slickAdd",
          `
          <div class="card">
              <div class="like"></div>
              <img class="product"
                  src="${el.image}" alt="Foto de - ${el.name}" />
              <h4 class="title" title="${el.name}">${el.name}</h4>
              <div class="rating">
                  ${handleRating(el.rating)}
              </div>
              <div class="price">
                  <h5>${handlePrice(el.price)}</h5>
                  <h5>${handlePrice(el.price, true)}</h5>
              </div>
              <a class="button">Comprar passagem</a>
          </div>
        `
        );
      });
    });
  
  function handleRating(rating) {
    let htmlToReturn = "";
    const maximumRatingStars = 5;
  
    for (let i = 0; i < rating; i++) {
      htmlToReturn = htmlToReturn + "&#9733;";
    }
  
    for (let j = 0; j < maximumRatingStars - rating; j++) {
      htmlToReturn = htmlToReturn + "&#9734;";
    }
  
    return htmlToReturn;
  }
  
  function handlePrice(price, discount = false) {
    if (discount) {
      price *= 0.9;
    }
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }




// SEARCH

// get filter element
const filter = document.querySelector('.forms input');
// get cards elements
const cards = document.querySelectorAll('.card');

if (filter) {
	// add input event for the filter element
	filter.addEventListener('input', filterCards);
}

// filter function
function filterCards() {
	// if the filter is not empty
	if (filter.value !== '') {
		// for each card of cards
		for (let card of cards) {
			// get card heading (title)
			let title = card.querySelector('h1');
			// transform to lowercase
			title = title.textContent.toLowerCase();
			// transform filter text to lowercase
			let filterText = filter.value.toLowerCase();
			// if card title does not include the filter text
			if (!title.includes(filterText)) {
				// hide the card element
				card.style.display = 'none';
			} else {
				// unhide the card element
				card.style.display = 'grid';
			}
		}
	} else {
		// for each card of cards
		for (let card of cards) {
			// unhide the card element
			card.style.display = 'block';
		}
	}
}


//search test

flatpickr("#date-picker", {
    enableTime: false, // Desabilita a seleção de tempo
    dateFormat: "Y-m-d", // Formato da data
    altInput: true, // Usa uma entrada alternativa para exibir a data selecionada
    altFormat: "d/m/Y", // Formato da data alternativa
    locale: "pt", // Define o idioma para português
  });


