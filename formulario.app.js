$(document).ready(function() {
    $('#formulario').validate({
        rules: {
            txtValidarCaracteres: {
                required: true,
                character: true
            }
        },
        messages: {
            txtValidarCaracteres: {
                required: 'Se requiere este campo.',
                character: 'No se aceptan caracteres especiales.'
            }
        },
        onfocusout: false,
        errorElement: 'div',
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                validator.errorList[0].element.focus();
            }
        },
        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function(element) {
            element
                .closest('.form-group')
                .removeClass('has-error');
            element.remove();
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});