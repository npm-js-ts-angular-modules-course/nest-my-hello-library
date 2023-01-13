import { MyHelloLibraryService } from '@mugan86/my-hello-library'; // <===
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly myHelloLibrary: MyHelloLibraryService) {}
  @Get()
  getHello(): string {
    this.myHelloLibrary.basic();
    return this.appService.getHello();
  }
}