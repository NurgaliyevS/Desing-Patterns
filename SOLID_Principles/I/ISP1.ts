// Interface segregation principle
// Принцип разделения интерфейса

enum Route {
  ABOUT = "about_page",
  HOME = "home_page",
}

interface UrlParser {
  parseUrl: (url) => void;
  addQueryParams: (params: Record<string, string>) => void;
}

interface Router {
  navigate: (route: Route) => void;
  attachEventListeners: () => void;
}

interface UrlPreparer {
  prepareUrlForClient: (url: string) => void;
}

class ServerRouter implements UrlParser, UrlPreparer {
  parseUrl(url): void {}
  addQueryParams(params: Record<string, string>): void {}
  prepareUrlForClient(url: string): void {}
}

class ClientRouter implements Router, UrlParser {
  addQueryParams(params: Record<string, string>): void {}
  parseUrl(url): void {}
  attachEventListeners(): void {}
  navigate(route: Route): void {}
}
