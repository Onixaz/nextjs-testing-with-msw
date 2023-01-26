import HomePageContainer from ".";
import { screen, render, fireEvent, waitFor } from "@test";

describe("Home Page Tests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Correctly renders pokemon", async () => {
    render(<HomePageContainer />);
    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeDefined();
      expect(screen.getByAltText("bulbasaur")).toBeDefined();
    });
  });
});
