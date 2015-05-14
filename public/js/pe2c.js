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

    <textarea class="write"></textarea>
    <a class="send"></a>
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
      height: 250px;
      background-color: #161616;
      overflow-y: auto;
    }

    .write {
      background: black;
      color: white;
      font-family: monospace;
      text-align: left;
      width: 265px;
      max-width: 265px;
      height: 33px;

      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 5px;
    }

    .send:after {
      background: black;
      color: #fff;
      content: ">";
      float: right;
      font: bold 18px monospace;
      line-height: 37px;
      margin-right: 10px;
      margin-bottom: 15px;
      text-align: center;
      width: 35px;
      height: 35px;

      border-style: solid;
      border-color: white;
      border-width: 2px;

      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
    }

    .send:hover {
      cursor: pointer;
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
