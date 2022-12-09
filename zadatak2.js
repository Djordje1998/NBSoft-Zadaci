const ime = document.getElementById("ime")
const prezime = document.getElementById("prezime")
const polMuski = document.getElementById("muski")
const polZenski = document.getElementById("zenski")
const godina = document.getElementById("godina")
const adresa = document.getElementById("adresa")
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

    if (polMuski.value !== 'M' && polZenski.value !== 'Z') {
        messages.push('Pol nije selektovan')
    }

    var reg = /^\d{4}$/

    if (!reg.test(godina.value)) {
        messages.push('Godina redjenja nije cetvorocifreni broj')
    } else if (parseInt(godina.value) <= 1900 || parseInt(godina.value) >= 2022) {
        messages.push('Godina redjenja ne moze biti manje od 1900 i veca od 2022')
    }

    if (adresa.value.length <= 10) {
        messages.push('Adresa je prekratka')
    } else if (adresa.value.length > 75) {
        messages.push('Adresa je predugacka')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorDiv.innerText = messages.join(', ')
    }

})