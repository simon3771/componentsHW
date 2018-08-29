import React, { Component } from 'react';

class Contact extends React.Component {
 render() {
return (
  <div>
    <aside id="contact-me">
      <a href="#">Before</a>
        <header>
          <h1> Contact Me</h1>
          <p>Please feel free to drop a line with compliments</p>
        </header>
        <form action="#" method="post">
          <div class="form-field">
            <label for="user_name">Name</label>
            <br/>
            <input type="text" name="user_name" required/>
          </div>
          <div class="form-field">
            <label for="user_email">Email</label>
            <br/>
            <input type="email" name="user_email" required/>
          </div>
          <div class="form-field">
            <textarea name="message"></textarea>
          </div>
          <input type="submit" value="Contact me!"/>
        </form>
      </aside>
  </div>
)
  }
}
export default Contact;
