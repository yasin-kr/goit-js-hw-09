const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch {
    localStorage.removeItem(localStorageKey);
  }
}

form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (!name) return;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const { email, message } = formData;
  if (!email || !message) return;

  console.log({ email, message });

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: '', message: '' };
});
