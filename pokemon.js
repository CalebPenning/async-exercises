class Pokemon {
    constructor(id) {
        this.id = id
    }
    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(res)
    }
}