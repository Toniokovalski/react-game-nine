import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Game from "../Game/Game";

describe("Test game", () => {
  test("should be able to reset the game", () => {
    render (<Game/>);
    const numberForTest = screen.getByTestId("number-for-test-3")
    const resetBtn = screen.getByTestId("reset-button");
    const answerContainer = screen.getByTestId("answer-container")
    fireEvent.click(numberForTest);
    expect(answerContainer).not.toBeEmptyDOMElement();
    fireEvent.click(resetBtn);
    expect(answerContainer).toBeEmptyDOMElement();
  })
})