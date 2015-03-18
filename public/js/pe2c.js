<pe2c>
  <div if={ !showChat } class="pe2c">
    <h4>PressEnter-to-Chat</h4>
    <img src="assets/pe2c-avatar.png"/>
  </div>

  <div if={ showChat } class="pe2c">
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
    var self = this
    this.showChat = false
    this.history = [
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
    ]

    opts.on('keyPressed', function(e) {
      if (e.keyCode == 13 && !self.showChat) {
        self.showChat = true
        self.update()
      }
      else if (e.keyCode == 27 && self.showChat) {
        self.showChat = false
        self.update()
      }
    })
  </script>
</pe2c>
