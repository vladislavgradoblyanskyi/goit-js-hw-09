const formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

function FormF() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  const parsed = JSON.parse(savedData);

  if (parsed.email) {
    form.elements.email.value = parsed.email;
    formData.email = parsed.email;
  }

  if (parsed.message) {
    form.elements.message.value = parsed.message;
    formData.message = parsed.message;
  }
}
FormF();
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name !== "email" && name !== "message") return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event)=>
 {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData.email = "";
  formData.message = "";

  form.reset();
}
);




