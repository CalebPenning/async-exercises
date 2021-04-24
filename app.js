const deck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new')
        console.log(res.data.deck_id)
        this.deckId = res.data.deck_id
    },
    async shuffle() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
        console.log(res)
    },
    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        console.log(res)
    }
}

async function getSWFilms() {
    const res = await axios.get("https://swapi.dev/api/films/")
    console.log(res.data.results)
    let starWarsFilms = [res.data.results]
    return starWarsFilms
}
