const ime = document.getElementById("ime")
const prezime = document.getElementById("prezime")
const polMuski = document.getElementById("muski")
const polZenski = document.getElementById("zenski")
const godina = document.getElementById("godina")
const adresa = document.getElementById("adresa")
const grad = document.getElementById("grad")
const dugme = document.getElementById("submitBtn")
const errorDiv = document.getElementById("error")
const form = document.getElementById("form")

dugme.addEventListener('click', function (e) {
    let messages = []
    errorDiv.style.display = "none";
    if (ime.value.length <= 2) {
        messages.push('Ime je prekratko!')
    } else if (ime.value.length > 20) {
        messages.push('Ime je predugacko!')
    }

    if (prezime.value.length <= 3) {
        messages.push('Prezime je prekratko!')
    } else if (prezime.value.length > 25) {
        messages.push('Prezime je predugacko!')
    }

    if (!polMuski.checked && !polZenski.checked) {
        messages.push('Pol nije selektovan!')
    }

    var regGod = /^\d{4}$/

    if (!regGod.test(godina.value)) {
        messages.push('Godina redjenja nije cetvorocifreni broj!')
    } else if (parseInt(godina.value) <= 1900 || parseInt(godina.value) >= 2022) {
        messages.push('Godina redjenja ne moze biti manje od 1900 i veca od 2022!')
    }

    var regAdresa = /^\w{2,30}\s+\w{2,30}\s+[1-9/-a-z]{1,5}\s*$/

    if (adresa.value.length <= 7) {
        messages.push('Adresa je prekratka!')
    } else if (adresa.value.length > 75) {
        messages.push('Adresa je predugacka!')
    } else if (!regAdresa.test(adresa.value)) {
        messages.push('Adresa nije dobrog formata!')
    }

    if (grad.value === 'prazno') {
        messages.push('Grad nije selektovan!')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorDiv.innerText = messages.join('\n');
        errorDiv.style.display = "block";
    } else {
        var formData = {
            ime: ime.value,
            prezime: prezime.value,
            pol: (polMuski.checked ? "Muski" : (polZenski.checked ? "Zenski" : "Greska")),
            godine: godina.value,
            adresa: adresa.value,
            grad: grad.value
        }
        $.ajax({
            url: "https://localhost/zadaci/api/zadatak2.php", type: "POST", data: formData, success: function (response) {
                var res = JSON.parse(response)
                if (res.success) {
                    $("#response").html("<div class='col-md-5 alert alert-success text-center'>" +
                        "<h2 class='alert-heading'>Uspesno poslata forma!</h2>" +
                        "<h3>Detalji forme:</h3>" +
                        "<hr>" +
                        "<p> Ime : " + res.data.ime +
                        "<p> Prezime : " + res.data.prezime +
                        "<p> Pol : " + res.data.pol +
                        "<p> Godina rodjenja : " + res.data.godine +
                        "<p> Adresa : " + res.data.adresa +
                        "<p> Grad : " + res.data.grad +
                        "</div>");
                    form.style.display = "none";
                } else {
                    $("#response").html("<div class='col-md-5 alert alert-danger text-center'>" +
                        "<h1>Greska pri slanju forme!</h1>" +
                        "</div>")
                }
            }
        });
    }


})