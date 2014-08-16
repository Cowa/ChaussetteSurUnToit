function love.load()
  -- Set up window
  Width, Height = 800, 600
  love.window.setMode(Width, Height)
  love.window.setTitle('Chaussette sur un toit')

  -- Load background
  Night = love.graphics.newImage('assets/night.png')

  -- Set up physics
  World = love.physics.newWorld(0, 1250, true)

  -- Here we go, Box2D verbosity \o/
  Roof = {}
  Roof.image   = love.graphics.newImage('assets/roof.png');
  Roof.body    = love.physics.newBody(World, Width / 2, Height + (Roof.image:getHeight() / 2) - 144)
  Roof.shape   = love.physics.newRectangleShape(Roof.image:getWidth(), Roof.image:getHeight())
  Roof.fixture = love.physics.newFixture(Roof.body, Roof.shape)

  Fire = {}
  Fire.image   = love.graphics.newImage('assets/fire.png');
  Fire.body    = love.physics.newBody(World, Width - 130, Height + (Fire.image:getHeight() / 2) - 330)
  Fire.shape   = love.physics.newRectangleShape(Fire.image:getWidth(), Fire.image:getHeight())
  Fire.fixture = love.physics.newFixture(Fire.body, Fire.shape)

  Socket         = {}
  Socket.image   = love.graphics.newImage('assets/socket.png')
  Socket.body    = love.physics.newBody(World, 150, 50, 'dynamic')
  Socket.shape   = love.physics.newRectangleShape(Socket.image:getWidth() - 5, Socket.image:getHeight() - 5)
  Socket.fixture = love.physics.newFixture(Socket.body, Socket.shape)

  -- World limits (avoid leaving screen)
  local top, left, right = {}, {}, {}

  top.body      = love.physics.newBody(World, Width / 2, 0)
  top.shape     = love.physics.newRectangleShape(Width, 1)
  top.fixture   = love.physics.newFixture(top.body, top.shape)
  left.body     = love.physics.newBody(World, 0, 0)
  left.shape    = love.physics.newRectangleShape(0, Height*2)
  left.fixture  = love.physics.newFixture(left.body, left.shape)
  right.body    = love.physics.newBody(World, Width, 0)
  right.shape   = love.physics.newRectangleShape(0, Height*2)
  right.fixture = love.physics.newFixture(right.body, right.shape)
end

function love.update(dt)
  World:update(dt)

  -- Get current velocity
  local velocityX, velocityY = Socket.body:getLinearVelocity()

  -- Input events
  if love.keyboard.isDown('right') then
    Socket.body:setLinearVelocity(300, velocityY)
  elseif love.keyboard.isDown('left') then
    Socket.body:setLinearVelocity(-300, velocityY)
  end

  if love.keyboard.isDown('up') then
    Socket.body:setLinearVelocity(velocityX, -500)
  end
end

function love.draw()
  love.graphics.draw(Night, 0, 0)
  love.graphics.draw(Roof.image, Roof.body:getX(), Roof.body:getY(), Roof.body:getAngle(),  1, 1, Roof.image:getWidth() / 2, Roof.image:getHeight() / 2)
  love.graphics.draw(Fire.image, Fire.body:getX(), Fire.body:getY(), Fire.body:getAngle(),  1, 1, Fire.image:getWidth() / 2, Fire.image:getHeight() / 2)
  love.graphics.draw(Socket.image, Socket.body:getX(), Socket.body:getY(), Socket.body:getAngle(),  1, 1, Socket.image:getWidth() / 2, Socket.image:getHeight() / 2)
end
