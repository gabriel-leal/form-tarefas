(function() {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")
    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]
    const chkAceito = document.getElementById("chkAceito")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    resta.textContent = maxima

    formCadastro.addEventListener("submit", function(e){
        console.log(txtTitulo.value)
        if(!txtTitulo.value){
            showFeedback("preencha todos os campos", function(){
                txtTitulo.focus()
            })
            e.preventDefault()
            
        }
    })

    function showFeedback(msg, cb) {
        //feedbackMessage.setAttribute("class", "show")
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage(){
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedkeyboard)

            if(typeof cb == "function"){
                cb()
            }
        }

        function pressedkeyboard(e) {
            if (e.keyCode == 27){
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

        feedbackMessageCloseBtn.addEventListener("keyup", pressedkeyboard)


    }

    //contadorContainer.removeAttribute("style")
    contadorContainer.style.display = "block"

    txtDescricao.addEventListener("input", function(){
        let numeroLetras = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetras)
        resta.textContent = caractersRestantes
    })

    btn.disabled = true
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    })












})()