import { Controller, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get("/")
  getRootRoute() {
    return { data: "Hi There" };
  }
}

export default AppController;
