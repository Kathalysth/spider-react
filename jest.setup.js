import '@testing-library/jest-dom';

// Global test setup
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock performance APIs
Object.defineProperty(window, 'performance', {
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByName: jest.fn(() => []),
    getEntriesByType: jest.fn(() => []),
  },
});

// Mock requestIdleCallback
global.requestIdleCallback = jest.fn(cb => setTimeout(cb, 1));
global.cancelIdleCallback = jest.fn(id => clearTimeout(id));

// Mock scheduler APIs for concurrent features
global.MessageChannel = class MessageChannel {
  port1 = {
    onmessage: null,
    postMessage: jest.fn(),
  };
  port2 = {
    onmessage: null,
    postMessage: jest.fn(),
  };
};