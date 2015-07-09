var validateForm = (function() {

  // .js-validate-form
  // .js-validate-wrap
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
          debug: true,
          rules: myRules,
          messages: myMessages,
          errorPlacement:function(error, element) {
            error.addClass('form__label-error');
            var cont = element.closest('.js-validate-wrap');
            cont.append(error);
          },
          highlight: function(element, errorClass, validClass) {
            $(element).parent().addClass(errorClass).removeClass(validClass);
            $(element).addClass(errorClass).removeClass(validClass);
          },
          unhighlight: function(element, errorClass, validClass) {
            $(element).parent().addClass(validClass).removeClass(errorClass);
            $(element).addClass(validClass).removeClass(errorClass);
          },
          submitHandler: readyToSubmit
        });

      });
    }
  };

  function readyToSubmit(form) {
    if (!form) return;
    var name = $(form).find('input[name=name]').val();
    var phone = $(form).find('input[name=phone]').val();
    var url = encodeURIComponent(form.getAttribute('action'));
    // alert('Первая строка\nВторая строка');
    // TODO:
    // -  заменить GET на POST (ломается из-за browsersync)

    $.ajax({
      url: url,
      type: 'POST',
      dataType: "html",
      data:{"email": "<?php the_field('mail'); ?>","email_2": "<?php the_field('mail_2');?>","name": name,"phone": phone} ,
    })
    .done(function(data) {
      sendMessage("Заявка отправлена", "Благодарим, ваша заявка уже поступила к нам. В ближайшее время мы свяжемся с вами.");
    })
    .fail(function() {
      sendMessage("Произошла ошибка", "Пожалуйста, повторите отправку. В случае неудачи свяжитесь с нами по телефону.");
    })
    .always(function() {
      // console.log("complete");
    });

  }

  function sendMessage(title, message) {
    var $popup = $('[data-remodal-id=modal-response]'),
        popup = $popup.remodal(),
        $title = $popup.find('.js-response-title'),
        $message = $popup.find('.js-response-message'),
        out = '';
    if ($popup.length) {
        if (title) $title.html(title);
        if (message) $message.html(message);
        popup.open();
      } else {
        if (title) out += title;
        if (message) out += '\n' + message;
        alert(out);
      }
  }

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
    max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
  });

  return validateForm;
}());
