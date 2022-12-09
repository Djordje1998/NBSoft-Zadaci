const ime = document.getElementById("ime")
const prezime = document.getElementById("prezime")
const polMuski = document.getElementById("muski")
const polZenski = document.getElementById("zenski")
const godina = document.getElementById("godina")
const adresa = document.getElementById("adresa")
const grad = document.getElementById("grad")
const form = document.getElementById("form")
const errorDiv = document.getElementById("error")

form.addEventListener('submit', (e) => {
    let messages = []
    if (ime.value.length <= 2) {
        messages.push('Ime je prekratko')
    } else if (ime.value.length > 20) {
        messages.push('Ime je predugacko')
    }

    if (prezime.value.length <= 3) {
        messages.push('Prezime je prekratko')
    } else if (prezime.value.length > 25) {
        messages.push('Prezime je predugacko')
    }

    if (!polMuski.checked && !polZenski.checked) {
        messages.push('Pol nije selektovan')
    }

    var regGod = /^\d{4}$/

    if (!regGod.test(godina.value)) {
        messages.push('Godina redjenja nije cetvorocifreni broj')
    } else if (parseInt(godina.value) <= 1900 || parseInt(godina.value) >= 2022) {
        messages.push('Godina redjenja ne moze biti manje od 1900 i veca od 2022')
    }

    var regAdresa = /^\w{2,30}\s+\w{2,30}\s+[1-9/-a-z]{1,5}\s*$/

    if (adresa.value.length <= 10) {
        messages.push('Adresa je prekratka')
    } else if (adresa.value.length > 75) {
        messages.push('Adresa je predugacka')
    } else if(!regAdresa.test(adresa.value)){
        messages.push('Adresa nije dobrog formata')
    }

    if (grad.value === 'prazno') {
        messages.push('Grad nije selektovan')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorDiv.innerText = messages.join(', ')
    }

})