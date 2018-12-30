import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
	let httpTestingController: HttpTestingController;
	let service: ApiService;
	const test_api = 'http://test.api/';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [ ApiService, { provide: 'API_URL', useValue: test_api } ]
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(ApiService);
	});

	it('should build url correctly', () => {
		const resourceMock = 'resource';
		const url: string = service.buildUrl(resourceMock);

		expect(url).toBe(`${test_api}/${resourceMock}`);
	});

	it('should make Http Get with the url correctly', () => {
		const resourceMock = 'resource';
		service.get(resourceMock).subscribe();

		httpTestingController.expectOne(`${test_api}/${resourceMock}`);

		httpTestingController.verify();
	});
});
