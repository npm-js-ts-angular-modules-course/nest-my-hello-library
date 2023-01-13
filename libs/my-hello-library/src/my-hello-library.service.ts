import { Injectable } from '@nestjs/common';

@Injectable()
export class MyHelloLibraryService {
    basic = () => console.log('Basic hello');
}