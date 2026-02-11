import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("health")
@Controller()
export class HealthController {
  @ApiOkResponse({ description: "Service is healthy" })
  @Get("/health")
  health() {
    return { status: "ok" };
  }
}