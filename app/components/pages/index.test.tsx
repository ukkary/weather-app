import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import { Index } from "./index";

describe("Index Page Test", () => {
    
  test("都市のテスト", () => {
    render(<Index />)
    expect(screen.getByText("都市："))
  });

  test("気温のテスト", () => {
    render(<Index />)
    expect(screen.getByText("気温："))
  });

  test("ボタンのクリックテスト", () => {
    render(<Index />)
    expect(screen.getByText("0")).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("test-counter-button"))
    expect(screen.getByText("1")).toBeInTheDocument()
  });

});