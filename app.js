function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_fb5zftq

// service_anh6rpd

// m3_Fz3VtNK_7faMRz

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");


  try {
     // Loading state
  loading.classList.remove("hidden");

  await emailjs.sendForm(
    "service_anh6rpd",
    "template_3bwkfjl",
    event.target,
  );

  //   success state
  form.reset();
  loading.classList.add("hidden");
  body.classList.add("success-open");
  setTimeout(() => {
    body.classList.remove("success-open");
  }, 5000);
  console.log("hey the email has been sent!");
} catch {
    loading.classList.add("hidden");
    alert('An error has occured. Please try again later.')
  }
}
