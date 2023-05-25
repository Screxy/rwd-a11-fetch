const form = document.querySelector(".form");
const submitButton = form.querySelector(".form__submit");

function handlerForm(e) {
  e.preventDefault();
  submitButton.disabled = true;

  let body = {
    class: form.querySelector(".form__class").value,
    temp: +form.querySelector(".form__temp").value,
  };
  sendRequest("POST", requestURL, body).then((response) => {
    submitButton.disabled = false;
    console.log(response);
  });
}

const requestURL = "http://194.67.93.117:80/temp";

function sendRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((responseJSON) => {
          showToasts(200, responseJSON);
          form.reset();
          return responseJSON;
        });
      }
      return response.json().then((error) => {
        const e = new Error("что-то пошло не так");
        e.data = error;
        showToasts(400, error);
        throw e;
      });
    })
    .catch((e) => {
      return e;
    });
}

form.addEventListener("submit", handlerForm);

// Toasts
const toasts = document.querySelector(".toasts");
const toastClose = document.querySelector(".toasts__close");

function showToasts(status, response) {
  toasts.classList.remove("toasts_hidden");
  toasts.classList.remove("toasts_error");
  toasts.classList.add("toasts_active");
  if (status == 400) {
    toasts.classList.add("toasts_error");
  }
  const toastDiv = document.querySelector(".toasts__body");
  toastDiv.innerHTML = `
    <p class="toasts__title">${response.status}</p>
    <p class="toasts__desc">${response.message}</p>
  `;
  toasts.appendChild(toastDiv);
}

function hideToasts(e) {
  if (e.target.closest(".toasts__close")) {
    toasts.classList.remove("toasts_active");
    toasts.classList.add("toasts_hidden");
  }
}

toasts.addEventListener("click", hideToasts);
