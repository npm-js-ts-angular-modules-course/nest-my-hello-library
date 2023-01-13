import { Test, TestingModule } from '@nestjs/testing';
import { MyHelloLibraryService } from './my-hello-library.service';

describe('MyHelloLibraryService', () => {
  let service: MyHelloLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyHelloLibraryService],
    }).compile();

    service = module.get<MyHelloLibraryService>(MyHelloLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
