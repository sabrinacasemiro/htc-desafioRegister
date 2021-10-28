const $form = document.querySelector(".container");
const $inputAll = document.querySelectorAll(".input-all");
const $inputName = document.querySelector(".input-full-name");
const $inputEmail = document.querySelector(".input-email");
const $inputPassword = document.querySelector(".input-password");
const $inputConfirmPassword = document.querySelector(".input-confirm-password");
const $inputPasswordWrapperList = document.querySelectorAll(
  ".input-password-wrapper"
);
const $inputEyePassword = document.querySelector(".fa-eye-slash-passowrd");
const $inputEyeConfirmPassword = document.querySelector(
  ".fa-eye-slash-confirm-passowrd"
);
const $inputTermsOfUse = document.querySelector(".input-terms-of-use");
const $buttonRegister = document.querySelector(".button-registers");
const $warnning = document.querySelector(".warnning");
const $done = document.querySelector('.done-wrapper')

let checked = false;

const comparePassword = () => {
  let password = $inputPassword.value;
  let confirmPassword = $inputConfirmPassword.value;
    console.log($inputPasswordWrapperList)
  if (password != confirmPassword) {
    $inputPasswordWrapperList.forEach((inputPassword) => {
      inputPassword.classList.add("incorrect-password");
      setTimeout(function () {
        inputPassword.classList.remove("incorrect-password");
      }, 700);
    });
  }
};

const verifyField = () => {
  let error = false;
  for (const $input of $inputAll) {
    const value = $input.value;
    console.log(value);
    if (!value) {
      $input.classList.add("error");
      error = true;

      setTimeout(function () {
        $input.classList.remove("error");
      }, 1500);
    }
  }
  if (error) {
    $warnning.classList.add("show");
  } else {
    $warnning.classList.remove("show");
  }
};

const verifyPasswordField = () => {
    const $wrapperList = document.querySelectorAll('.input-password-wrapper')

    $wrapperList.forEach(($wrapper) => {
        const $input = $wrapper.querySelector('input')
    
        if (!$input.value) {
            $wrapper.classList.add('error')

            setTimeout(() => $wrapper.classList.remove('error'),1500)
        }
    })
}

const counterLetter = () => {
  if ($inputName.value.length < 3) {
    $inputName.classList.add("error");

    setTimeout(function () {
      $inputName.classList.remove("error");
    }, 1500);
  }
};

const errorTermsOfUse = () => {
    console.log(checked)
  if (!checked) {
    $inputTermsOfUse.classList.add("no-checked");

    setTimeout(function () {
      $inputTermsOfUse.classList.remove("no-checked");
    }, 1500);
  }
};

$inputTermsOfUse.addEventListener("click", function () {
  checked = !checked;

  if (checked) {
    $inputTermsOfUse.innerHTML = '<i class="fas fa-check"></i>';
  } else {
    $inputTermsOfUse.innerHTML = "";
  }
});

$form.addEventListener("submit", function (e) {
  e.preventDefault();
  verifyField();
  comparePassword();
  counterLetter();
  errorTermsOfUse()
  verifyPasswordField()
});

$buttonRegister.addEventListener("click", function () {
  comparePassword();
  counterLetter();
  errorTermsOfUse()
});

$inputEyePassword.addEventListener("click", function () {
  let password = $inputPassword;

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

$inputEyeConfirmPassword.addEventListener("click", function () {
  let confirmPassword = $inputConfirmPassword;

  if (confirmPassword.getAttribute("type") == "password") {
    confirmPassword.setAttribute("type", "text");
  } else {
    confirmPassword.setAttribute("type", "password");
  }
});
