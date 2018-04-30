import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notifications: [],
      token: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let token = '';
    let headers = {Authorization: `token ${token}`}
    fetch("https://api.github.com/notifications?all=true",{headers})
    .then(res => res.json())
    .then(notifications => {
      this.setState({notifications: notifications})
      console.log(this.state, 'this is the state after the fetch call')
    })
    .catch(console.error) 
  }


  render() {
    let notifications = this.state.notifications;
    return (
      <div className="App">
        <header>
            <h2 class="navbar"><strong>git Status</strong></h2>
        </header>
        {notifications.length ? null : <div>
            <a id="token-link" href="https://github.com/settings/tokens/new" target="_blank">Create Token Api Token</a>
            <p>Check box for notification permissions.</p>
            <form class="pure-form">
                <input id="name" type="text" placeholder="Github Api Token Here" />
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </form>
        </div>}
        {
          notifications.length ? notifications.map(notification => {
            return (
              <div className="notification">
                <h5>Repository: {notification.repository.name}</h5>
                <h5>Subject: {notification.subject.title}</h5>
                <h5>Type: {notification.subject.type}</h5>
                <a href={`${notification.repository.html_url}`} target="_blank"><h5>Go To Notification</h5></a>
                <hr/>
             </div>)
          }) : null
        }
      </div>
    );
  }
}

export default App;
