#include "Polycode.h"
#include "PolycodeView.h"
#include "ChaussetteSurUnToit.h"

int main()
{
	PolycodeView *view       = new PolycodeView("ChaussetteSurUnToit");
	ChaussetteSurUnToit *app = new ChaussetteSurUnToit(view);

	while(app->Update())
	{
	}

	return 0;
}
