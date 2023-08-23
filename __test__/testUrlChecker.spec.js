import { checkUrlFunc } from '../src/client/js/urlChecker';

describe('checkUrlFunc function', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should display "Valid URL" for a valid URL', () => {
    const validUrls = [
      'http://example.com',
      'https://www.example.com',
      'ftp://ftp.example.com'
    ];

    validUrls.forEach(url => {
      checkUrlFunc(url);
      expect(window.alert).toHaveBeenCalledWith('Valid URL');
    });
  });

  it('should display "Invalid URL" for an invalid URL', () => {
    const invalidUrls = [
      'example.com',
      'www.example.com',
      'ftp://ftp.example',
      'invalid',
      'http://'
    ];

    invalidUrls.forEach(url => {
      checkUrlFunc(url);
      expect(window.alert).toHaveBeenCalledWith('Invalid URL');
    });
  });
});
