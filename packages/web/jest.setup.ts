import "@testing-library/jest-dom";

jest.mock("react-chartjs-2", () => ({
  Line: jest.fn(),
}));

jest.mock("utils/contexts", () => ({
  useDBPatient: jest.fn(() => ({
    addDoc: jest.fn(),
    delDoc: jest.fn(),
    getDocs: jest.fn(() => []),
    getUser: jest.fn(() => {}),
    updateUser: jest.fn(),
  })),
}));
