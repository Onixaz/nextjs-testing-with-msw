import "whatwg-fetch";
import nock from "nock";
import dotenv from "dotenv";

import { server } from "../mocks/server";

dotenv.config({ path: ".env.test" });

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => {
  nock.cleanAll();
  nock.restore();
  server.close();
});

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();
