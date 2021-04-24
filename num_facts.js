// Below is part 1: Number Facts

const baseUrl = "http://numbersapi.com/"
let favNum = 13

// 1. Call this on a single number
async function getNumJSON(num) {
    if (typeof num == 'number') {
        let res = await axios.get(`${baseUrl}${num}?json`)
        console.log(res.data.text)
    }
    else if (typeof num == 'object') {
        for (n in num) {
            let res = await axios.get(`${baseUrl}${n}?json`)
              .then(data => {
                  console.log(data.data.text)
              })
        }
    }
}

// 2. Call above function on array of numbers


// 3. Creates an array of four promises, then once they are resolved, appends to our html list

Promise.all(
    Array.from({ length: 4 }, () => {
        return axios.get(`${baseUrl}${favNum}?json`)
    })
).then(facts => {
    facts.forEach(data => $(".list").append(`<li>${data.data.text}</li>`))
})