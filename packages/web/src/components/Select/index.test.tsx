import { render, screen } from "@testing-library/react";
import React from "react";

import { Select } from ".";

describe("components/Select", () => {
  const options = [
    {
      id: "Ab2",
      name: "John Doe",
    },
    {
      id: "bC1",
      name: "Carl Johnson",
    },
  ];
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
    render(<Select onChange={onChange} options={options} />);
  });

  it("Show options", () => {
    expect.assertions(2);
    options.forEach((option) => {
      expect(screen.queryByText(option.name)).toBeInTheDocument();
    });
  });
});
