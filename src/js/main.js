function toggleNav() {
    document.getElementById('header-nav').classList.toggle('header__nav--is-show');
}

document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault()
});

var EnviarEmail = function () {
    debugger;
    var form = $("#form-dados");
    form.validate();
    if (form.valid()) {
        //var dado = form.serialize();
        var dado = {};
        dado.name = $("#psfp-signup-name").val();
        dado.email = $("#psfp-signup-email").val();
        dado.senha = $("#psfp-signup-pass").val();
        dado = JSON.stringify(dado);
        $.ajax({
            url: "https://sementeapi.minimo.com.br/api/v0/pessoas/autoregister",
            type: 'POST',
            data: dado,
            //dataType: "json",
            success: function (data) {
                console.log("xklngsdlkgjdlk");
                // TODO Fazer aparecer o retorno de sucesso
                $("#sucesso").addClass("popover--is-show");
            },
            error: function (data) {
                if (data.status === 400)
                {
                    if (data.responseJSON.Message == "Email já cadastrado.")
                    {
                        $("#error-email").html("E-mail já cadastrado");
                        $("#error-email").removeClass("field-validation-valid");
                    }
                }
                else
                {
                    // TODO Erro desconhecido
                    $("#error-unknown").html("Houve um problema");
                }
            },
            contentType: "application/json",
        });
    } else {
        console.log("Form não válidado. Opa!");
    }
}

function toggleTerms() {
    $('.j-modal--terms').toggleClass('modal--is-show');
}
