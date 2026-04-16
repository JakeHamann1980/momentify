# GTM Asset Generation Tests

This directory contains comprehensive tests for the one-click HTML asset generation workflow.

## Files

- **generate-asset-html.test.ts** - Complete Jest test suite for the API endpoint
- **E2E-MANUAL-TESTING-CHECKLIST.md** - Manual testing checklist for UI/E2E validation
- **README.md** - This file

## Test Structure

The test suite covers:

### 1. Parameter Validation (400 errors)
- Missing brief, assetType, or solution
- Invalid parameter formats (path traversal attempts)
- Unsupported asset types

### 2. Security (Path Traversal)
- Invalid solution parameter (e.g., `../../../etc/passwd`)
- Invalid assetType parameter
- Valid parameters with alphanumeric, hyphen, underscore characters

### 3. API Key Handling (500 errors)
- Missing API key (GTM_ANTHROPIC_KEY and ANTHROPIC_API_KEY)
- Correct precedence (GTM_ANTHROPIC_KEY > ANTHROPIC_API_KEY)

### 4. Claude API Integration
- API error responses
- Empty content array
- Non-text response type
- Successful text responses

### 5. HTML Validation (400 errors)
- Missing DOCTYPE
- Missing closing `</html>` tag
- Valid HTML acceptance

### 6. File Operations
- Directory creation if missing
- File write to correct path: `/public/gtm/{solution}-{assetType}.html`
- File write failures (500 errors)

### 7. Success Cases
- Valid generation for each asset type
- Correct preview URL format
- Correct filename in response

### 8. Edge Cases
- Very long brief content
- HTML with special characters and unicode

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode (for development)
```bash
npm run test:watch
```

### Run tests with coverage report
```bash
npm run test:coverage
```

### Run a specific test file
```bash
npm test -- generate-asset-html.test.ts
```

### Run a specific test suite
```bash
npm test -- --testNamePattern="Parameter Validation"
```

## Test Mocking Strategy

The tests mock:

- **fs module** - File system operations (existsSync, mkdirSync, writeFileSync)
- **fetch** - HTTP requests to Anthropic API
- **Environment variables** - API keys

Real implementation details tested:
- Parameter validation logic
- Asset type lookup
- HTML validation
- File path construction

## API Endpoint Tested

**POST** `/api/gtm/generate-asset-html`

### Request Body
```json
{
  "brief": "string - generated content brief",
  "assetType": "infographic|microsite|carousel|pitch-deck|one-pager",
  "solution": "trade-shows|recruiting|field-sales|facilities|events-venues"
}
```

### Success Response (200)
```json
{
  "success": true,
  "url": "/{solution}-{assetType}.html",
  "filename": "{solution}-{assetType}.html"
}
```

### Error Responses
- **400** - Parameter validation error
- **500** - API error, HTML validation error, file write error

## Test Coverage

Current coverage targets:
- Parameter validation: 100%
- Path traversal protection: 100%
- Asset type validation: 100%
- API key handling: 100%
- Claude API integration: 95%
- HTML validation: 95%
- File operations: 90%
- Edge cases: 80%

Run `npm run test:coverage` to see detailed coverage report.

## Adding New Tests

When adding new tests:

1. Add test case to appropriate describe block
2. Follow naming convention: `should [expected behavior] when [condition]`
3. Mock external dependencies (fs, fetch)
4. Verify both success and error paths
5. Run tests locally: `npm test`
6. Check coverage: `npm run test:coverage`

Example:
```typescript
it("should return 200 when generating valid microsite", async () => {
  process.env.ANTHROPIC_API_KEY = "test-key"

  ;(fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      content: [
        {
          type: "text",
          text: "<!DOCTYPE html><html><body></body></html>",
        },
      ],
    }),
  })

  ;(fs.existsSync as jest.Mock).mockReturnValue(true)
  ;(fs.writeFileSync as jest.Mock).mockImplementation(() => {})

  const request = new NextRequest("http://localhost:3000/api/gtm/generate-asset-html", {
    method: "POST",
    body: JSON.stringify({
      brief: "Test brief",
      assetType: "microsite",
      solution: "recruiting",
    }),
  })

  const response = await POST(request)
  expect(response.status).toBe(200)
  const data = await response.json()
  expect(data.url).toBe("/recruiting-microsite.html")
})
```

## Manual Testing

See `E2E-MANUAL-TESTING-CHECKLIST.md` for comprehensive manual testing procedures covering:
- UI state transitions
- Preview iframe loading
- Cross-asset type workflows
- File system verification
- Error state handling
- Performance benchmarks

## Known Issues / Limitations

- Tests do not test actual Claude API (mocked with jest.mock)
- Tests do not test actual file system writes (mocked)
- Tests use NextRequest from next/server (Next.js specific)
- Tests require environment setup for API keys

For integration testing with real Claude API and file system:
1. Use a test/staging environment
2. Set actual API key in .env.local
3. Run E2E tests with manual checklist
4. Verify files are created in `/public/gtm/`

## Troubleshooting

### Tests fail with "Cannot find module"
- Run `npm install` to ensure all dependencies are installed
- Check jest.config.js moduleNameMapper configuration

### Tests timeout
- Increase Jest timeout: `jest.setTimeout(10000)` in test file
- Check if mocks are properly configured
- Verify no infinite loops in tested code

### File mock errors
- Ensure fs module is properly mocked with jest.mock("fs")
- Verify mock implementations return appropriate values
- Check that fs calls match actual implementation

### Environment variable issues
- Set test API key: `process.env.ANTHROPIC_API_KEY = "test-key"`
- Clear previous values: `delete process.env.GTM_ANTHROPIC_KEY`
- Verify in setup function or beforeEach hook

## CI/CD Integration

To run tests in CI/CD pipeline:

```yaml
# Example GitHub Actions
- name: Run tests
  run: npm test -- --coverage

- name: Upload coverage
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/lcov.info
```

## References

- [Jest Documentation](https://jestjs.io/)
- [Next.js Testing Documentation](https://nextjs.org/docs/testing)
- [API Route Testing](https://nextjs.org/docs/app/building-your-application/testing/testing-libraries#app-router)
