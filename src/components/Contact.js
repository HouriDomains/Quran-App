import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xjvqljaz");
  if (state.succeeded) {
    return <p>Thanks We will get back to you Shortly!</p>;
  }
  return (
    <>
      <h1>Contact</h1>
      <form class="form" onSubmit={handleSubmit}>
        <div class="input-box">
          <input
            type="text"
            class="text-input"
            name="name"
            placeholder="Name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div class="input-box">
          <input
            type="email"
            class="text-input"
            name="email"
            id="email"
            placeholder="Email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div class="input-box">
          <input
            type="subject"
            class="text-input"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors} />
        </div>
        <div class="input-box">
          <textarea
            name="text"
            id="message"
            class="message"
            placeholder="Message..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div class="input-box">
          <button type="submit" class="submit-btn" id="submit" disabled={state.submitting}>submit</button>
        </div>
      </form>
    </>
  );
}
export default Contact;