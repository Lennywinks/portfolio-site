<script setup>
import {ref} from 'vue';

const name = ref('')
const email = ref('');
const message = ref('')
const error = ref('')

const validateEmail = (email) => {
  return String(email)
      .toLowerCase()
      .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const sendEmail = (name, email, message) => {
  const data = {
    service_id: 'default_service',
    template_id: 'template_agulkrr',
    user_id: 'vlaWFShjvVl3XYJKk', // This cannot be used for other stuff, since the mails only get sent to validated recipients.
    template_params: {
      name: name,
      message: message,
      email: email,
    }
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw err });
        }
        alert('Your mail has been sent!');
      })
      .catch(error => {
        alert('Oops... ' + JSON.stringify(error));
      });
}

const onSubmit = () => {
  if (!validateEmail(email.value)) {
    error.value = 'Please enter a valid email address.'
  } else {
    error.value = ''
    console.log(name.value, email.value, message.value, error.value)
    sendEmail(name.value, email.value, message.value)
  }
}

</script>

<template>
  <div class='max-w-2xl flex flex-col gap-4 text-on-surface font-inter'>
    <div>
      <h1 class='text-3xl font-bold mb-1'>Contact me</h1>
      <p class="text-gray-400 mb-2">You can also get in touch with me through this form below.</p>
    </div>


    <div class='relative'>
      <label for='name' class='text-sm font-semibold rounded-xl absolute top-0 left-0 z-0 w-full p-3 cursor-text' onclick='document.getElementById("name").focus()'>Name</label>
      <input v-model='name' id='name' placeholder='Jon Doe' class='bg-surface rounded-xl w-2xl z-10 pt-8 pb-3 px-3 focus:outline-none hover:bg-surface-highest transition ease-in-out' type='text'>
    </div>

    <div class='relative'>
      <label for='email' class='text-sm font-semibold rounded-xl absolute top-0 left-0 z-0 w-full p-3 cursor-text' onclick='document.getElementById("email").focus()'>E-Mail</label>
      <input v-model='email' id='email' placeholder='john.doe@example.com' class='bg-surface rounded-xl w-2xl z-10 pt-8 pb-3 px-3 focus:outline-none hover:bg-surface-highest transition ease-in-out' type='email'>
    </div>

    <div class='relative'>
      <label for='message' class='text-sm font-semibold rounded-xl absolute top-0 left-0 z-0 w-full p-3 cursor-text' onclick='document.getElementById("message").focus()'>Message</label>
      <textarea v-model='message' id='message' placeholder='Enter your message here' class='bg-surface rounded-xl min-h-36 w-2xl z-10 pt-8 pb-3 px-3 focus:outline-none hover:bg-surface-highest transition ease-in-out' type='text'/>
    </div>

    <button :disabled='error.length' @click='onSubmit' :class='[error.length ? "cursor-not-allowed" : "cursor-pointer"]' class='w-full p-3 bg-primary text-on-primary rounded-xl hover:outline-gray-400 hover:opacity-80 active:opacity-70 transition ease-in-out'>Send Message</button>
    <p v-if='error.length' class='text-red-400 font-bold'>{{ error }}</p>
  </div>
</template>
