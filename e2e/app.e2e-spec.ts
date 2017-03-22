import { InvoiceIssuerPage } from './app.po';

describe('invoice-issuer App', () => {
  let page: InvoiceIssuerPage;

  beforeEach(() => {
    page = new InvoiceIssuerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
