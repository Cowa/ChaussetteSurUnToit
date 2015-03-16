<pe2c>
  <div if={ !enterPressed } class="pe2c">
    <h4>PressEnter-to-Chat</h4>
    <img src="assets/pe2c-avatar.png"/>
  </div>

  <div if={ enterPressed } class="pe2c">
    <h4>PressEscape-to-QuitChat</h4>
    <div class="chat-history">
      <p each={ chat in history }>{ chat.socket }: "{ chat.msg }"</p>
    </div>

    <textarea></textarea>
  </div>

  <style>
    .pe2c {
      border: 2px solid white;
      background-color: #4b5493;
      position: fixed;
      bottom: 0;
      right: 0;
    }

    .chat-history {
      width: 340px;
      background-color: #161616;
    }
  </style>

  <script>
    var self = this;
    self.enterPressed = false;
    self.history = [
      {socket: '#5EAA63', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket of death!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'},
      {socket: '#5EAA67', msg: 'So wow socket!'}
    ];

    document.getElementsByTagName('body')[0].onkeyup = function(e) {
      if (e.keyCode == 13 && !self.enterPressed) {
        console.log(self.enterPressed)
        self.enterPressed = true;
        console.log(self.enterPressed)
      }
      else if (e.keyCode == 27 && self.enterPressed) {
        console.log(self.enterPressed)
        self.enterPressed = false;
        console.log(self.enterPressed)
      }
    };
  </script>
</pe2c>
