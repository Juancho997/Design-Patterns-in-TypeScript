import { JsonExportService } from './json-export-service';
import { MockPostService } from './mock-post-service';

let mockService = new MockPostService();
mockService.export(new JsonExportService()).then(result => console.log(result));