# Contributing to Spider React

Thank you for your interest in contributing to Spider React! This document provides guidelines and information for contributors.

## 🎯 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/kathalysth/spider-react.git
   cd spider-react
   ```
3. Install dependencies:

```bash
npm install
```

4. Create a branch for your feature:

```bash
git checkout -b feature/your-feature-name
```

## 📋 Development Guidelines

### Code Standards

**TypeScript**: All code must be properly typed with strict mode
**Testing**: Maintain >95% test coverage for new code
**File Naming**: Use kebab-case for all files and directories
**No TODO Comments**: All implementations must be complete

### Commit Messages

Follow conventional commit format:

```bash
type(scope): description

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

Examples:

```bash
feat(hooks): implement useState hook
fix(fiber): resolve reconciliation bug in concurrent mode
docs(readme): update installation instructions
```

Testing Requirements

- Write tests for all new functionality
- Ensure all existing tests pass
- Maintain test coverage above 95%

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## Code Quality

Before submitting:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix

# Build to ensure no errors
npm run build
```

### 🔄 Pull Request Process

- **Create an Issue**: For significant changes, create an issue first to discuss
- **Branch**: Create a feature branch from `main`
- **Implement**: Make your changes following our guidelines
- **Test**: Ensure all tests pass and coverage is maintained
- **Document**: Update documentation if needed
- **Pull Request**: Submit a PR with:
  - Clear description of changes
  - Link to related issues
  - Screenshots/examples if applicable

**PR Review Process**

All PRs require review from maintainers
Automated checks must pass (CI, tests, linting)
Address review feedback promptly
Squash commits before merging

## 🏗️ Architecture Guidelines

### Project Structure

```bash
packages/
├── spider/ # Core React implementation
│ ├── src/
│ │ ├── types/ # Type definitions
│ │ ├── core/ # Core functionality
│ │ ├── fiber/ # Fiber implementation
│ │ ├── hooks/ # Hooks system
│ │ └── utils/ # Utilities
│ └── **tests**/ # Tests
└── spider-dom/ # DOM renderer
    ├── src/
    │ ├── renderer/ # Rendering logic
    │ ├── events/ # Event handling
    │ └── dom/ # DOM utilities
    └── **tests**/ # Tests
```

### Design Principles

**Modularity**: Keep components focused and reusable
**Performance**: Optimize for speed and memory usage
**Type Safety**: Leverage TypeScript's strict typing
**Testability**: Write code that's easy to test
**Documentation**: Document public APIs thoroughly

## 🐛 Bug Reports

When reporting bugs:

- Use the bug report template
- Provide minimal reproduction case
- Include environment details
- Describe expected vs actual behavior

## 💡 Feature Requests

For new features:

- Use the feature request template
- Explain the use case and benefits
- Consider implementation complexity
- Discuss alternatives

## 📚 Documentation

- Update documentation for API changes
- Include code examples
- Keep README.md current
- Document design decisions

## ❓ Getting Help

- Check existing issues and discussions
- Join our community discussions
- Reach out to maintainers

## 🎉 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for significant contributions
- GitHub contributor stats

Thank you for contributing to Spider React! 🕷️
