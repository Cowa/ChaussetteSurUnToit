#include <iostream>
#include <Polycode.h>
#include "PolycodeView.h"
#include "Polycode2DPhysics.h"

using namespace Polycode;

class ChaussetteSurUnToit : public EventHandler
{
	public:
		ChaussetteSurUnToit(PolycodeView *view);
		~ChaussetteSurUnToit();
		void handleEvent(Event *e);
		bool Update();

	private:
		Core *core_;
		SceneEntity *socket_;
		PhysicsScene2DEntity *socketBody_;
};
