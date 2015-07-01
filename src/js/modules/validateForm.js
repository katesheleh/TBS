var validateForm = (function() {

  // .js-validate-form
  var validateForm = {
    init: function(){

      var myRules = {},
         myMessages = {};

      $('.js-validate-form').find('[data-validate-rule]').each(function() {
        var inp = this;
        if (inp.name.length) {
          myRules[String(inp.name)] = $(inp).data('validate-rule');
          myMessages[inp.name] = $(inp).data('validate-message');
        }
      });

      $('.js-validate-form').each(function(index, el) {
        $(el).validate({
          // debug: true,
          rules: myRules,
          messages: myMessages,
          errorPlacement:function(error, element) {
            // error.addClass('input__error');
            var cont = element.closest('.js-validate-wrap');
            cont.append(error)
          }
        });

      });
    }
  };

  // validator localization
  //
  // TODO:
  // - перетащить на бекенд
  $.extend($.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",
    url: "Пожалуйста, введите корректный URL.",
    date: "Пожалуйста, введите корректную дату.",
    dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    number: "Пожалуйста, введите число.",
    digits: "Пожалуйста, вводите только цифры.",
    creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
    equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    extension: "Пожалуйста, выберите файл с правильным расширением.",
    maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
  });

  return validateForm;
}());
