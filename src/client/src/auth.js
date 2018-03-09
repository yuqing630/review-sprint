import axios from 'axios';

const Auth = {
  isAuthenticated: false,
  username: '',
  password: '',
  authenticate(callback) {
    axios
      .post('/login', {username: this.username, password: this.password})
      .then(res => {
        this.username = res.data.username;
        this.password = res.data.password;
        this.isAuthenticated = res.data.authenticated;
        callback(this.isAuthenticated);
      });
  },
};

export default Auth;
