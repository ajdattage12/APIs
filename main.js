const getButton = document.querySelector('#getres')

const buttonClicked = () =>{
    console.log("button clicked")
}


const infoAlderaan = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(res =>{
        console.log("is working")
        res.data.results[0].residents.forEach(element => {
            console.log(element)
            axios.get(element)
            .then(res =>{
                let newH2 = document.createElement('h2')
                newH2.textContent = res.data.name
                document.body.appendChild(newH2)
            })
        })
    })
}


getButton.addEventListener("click", infoAlderaan);