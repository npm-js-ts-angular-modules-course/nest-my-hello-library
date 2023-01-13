import { MyHelloLibraryModule } from '@mugan86/my-hello-library';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MyHelloLibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
