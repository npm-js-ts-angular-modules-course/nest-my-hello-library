import { Module } from '@nestjs/common';
import { MyHelloLibraryService } from './my-hello-library.service';

@Module({
  providers: [MyHelloLibraryService],
  exports: [MyHelloLibraryService],
})
export class MyHelloLibraryModule {}
