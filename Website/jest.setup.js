// Jest setup file for global configuration and polyfills

// Mock environment variables if not set
if (!process.env.ANTHROPIC_API_KEY) {
  process.env.ANTHROPIC_API_KEY = 'test-key'
}
