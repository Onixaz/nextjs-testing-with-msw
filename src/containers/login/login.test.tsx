import { screen, render, fireEvent } from "@test";
import LoginPageContainer from "./index";
import { signIn } from "next-auth/client";

import * as nextRouter from "next/router";

//mock NextAuth signIn function
jest.mock("next-auth/client", () => ({
  signIn: jest.fn(),
}));

//mock Next.js router to avoid "NextRouter was not mounted." error
(nextRouter as any).useRouter = jest.fn();

describe("Login Page Tests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Renders login page", () => {
    (nextRouter as any).useRouter.mockImplementation(() => ({ route: "/login" }));
    render(<LoginPageContainer />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button");
    expect(usernameInput).toBeDefined();
    expect(passInput).toBeDefined();
    expect(submitBtn).toBeDefined();
  });

  it("Execute signin logic on submit button click", () => {
    (nextRouter as any).useRouter.mockImplementation(() => ({ route: "/login" }));
    render(<LoginPageContainer />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passInput = screen.getByLabelText(/password/i);
    fireEvent.change(usernameInput, { target: { value: "Myusername" } });
    fireEvent.change(passInput, { target: { value: "Mypassword" } });
    fireEvent.click(screen.getByRole("button"));
    expect(jest.isMockFunction(signIn)).toBeTruthy();
    expect(signIn).toHaveBeenCalledTimes(1);
  });
});
