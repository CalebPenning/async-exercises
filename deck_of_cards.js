let baseUrl = 'https://deckofcardsapi.com/api/deck'

// 1. Draw a new card, and console.log the suit and value.


axios.get(`${baseUrl}/new/draw`)
  .then(data => {
      let { suit, value } = data.data.cards[0]
      console.log(data)
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
  })

// 2. Draw two cards from the same deck by chaining two requests/promises and plugging in the deckId to the baseUrl, then console.log both the value and the suit of the card 

let firstDraw

axios.get(`${baseUrl}/new/draw`)
  .then(data => {
      firstDraw = data.data.cards[0]
      let deckId = data.data.deck_id
      return axios.get(`${baseUrl}/${deckId}/draw/`)
  })
  .then(data => {
      let secondDraw = data.data.cards[0]
      console.log([firstDraw, secondDraw])
      for (let draw of [firstDraw, secondDraw]) {
          console.log(`${draw.value.toLowerCase()} of ${draw.suit.toLowerCase()}`)
      }
  })

// 3.

  let deckId = null;
  let $btn = $("#btn")
  let $cardDiv = $("#card-div")

  axios.get(`${baseUrl}/new/shuffle/`).then(data => {
      deckId = data.data.deck_id
      $btn.show();
  })

  $btn.on('click', function() {
      axios.get(`${baseUrl}/${deckId}/draw/`).then(data => {
          let cardSrc = data.data.cards[0].image
          let angle = Math.random() * 90 - 45
          let randomX = Math.random() * 40 - 20
          let randomY = Math.random() * 40 - 20
          console.log(cardSrc, angle, randomX, randomY)

          $cardDiv.append(
              $('<img>', {
                  src: cardSrc,
                  css: {
                      transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                  }
              })
          )
      })
  })

