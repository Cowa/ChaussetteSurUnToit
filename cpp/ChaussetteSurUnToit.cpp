#include "ChaussetteSurUnToit.h"

ChaussetteSurUnToit::ChaussetteSurUnToit(PolycodeView *view) : EventHandler()
{
	// Set up application
	core_ = new POLYCODE_CORE(view, 800, 600, false, false, 0, 0, 90);
	CoreServices::getInstance()->getResourceManager()->addArchive("Resources/default.pak");
	CoreServices::getInstance()->getResourceManager()->addDirResource("default", false);

	// Set event listener
	core_->getInput()->addEventListener(this, InputEvent::EVENT_KEYDOWN);

	// Set physics scene
	PhysicsScene2D *scene = new PhysicsScene2D(2.0, 60);
	scene->setGravity(Vector2(0.0, -300.0));
	scene->getDefaultCamera()->setOrthoSize(800, 600);

	// Load level
	SceneEntity *level = new SceneEntityInstance(scene, "Resources/scene.entity");
	scene->addChild(level);

	// Get & create solid platforms
	vector<Entity*> solids = level->getEntitiesByTag("solid", false);

	for (int i = 0; i < solids.size(); i++) {
		scene->trackPhysicsChild(solids[i], PhysicsScene2DEntity::ENTITY_RECT, true);
	}

	// Get, create socket & set its body
	socket_     = level->getEntityById("socket", false);
	socketBody_ = scene->addPhysicsChild(socket_, PhysicsScene2DEntity::ENTITY_RECT, false);
	socketBody_->setFriction(1);
}

ChaussetteSurUnToit::~ChaussetteSurUnToit()
{

}

void ChaussetteSurUnToit::handleEvent(Event *e)
{
	if(e->getDispatcher() == core_->getInput()) {
		InputEvent *inputEvent = (InputEvent*) e;
		switch(e->getEventCode()) {
			case InputEvent::EVENT_KEYDOWN:
				switch (inputEvent->key) {
					case KEY_LEFT:
						socketBody_->setVelocityX(-300);
					break;
					case KEY_RIGHT:
						socketBody_->setVelocityX(+300);
					break;
					case KEY_UP:
						socketBody_->setVelocityY(+600);
					break;
				}
			break;
		}	
	}
}

bool ChaussetteSurUnToit::Update()
{

	return core_->updateAndRender();
}
