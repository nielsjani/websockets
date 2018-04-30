import { WebsocketPage } from './app.po';

describe('websocket App', () => {
  let page: WebsocketPage;

  beforeEach(() => {
    page = new WebsocketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
