/**
 * DesignRead — Environment Variable Helper
 * Reads env vars safely with clear errors on missing required values.
 * All access to process.env should go through this module.
 */

/**
 * Reads a required server-side environment variable.
 * Throws a descriptive error if the variable is not set.
 * Never expose this on the client side.
 */
export function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value || value.trim() === "") {
    throw new Error(
      `[DesignRead] Missing required environment variable: ${key}\n` +
        `Make sure it is set in .env.local (development) or your deployment config (production).`
    );
  }
  return value;
}

/**
 * Reads an optional environment variable with a fallback.
 */
export function getEnv(key: string, fallback: string = ""): string {
  return process.env[key] ?? fallback;
}

/**
 * Pre-resolved env values for server-side use.
 * Import these instead of reading process.env directly.
 */
export const env = {
  /** Anthropic API key — required for all analysis */
  anthropicApiKey: () => requireEnv("ANTHROPIC_API_KEY"),

  /** App base URL */
  appUrl: () => getEnv("NEXT_PUBLIC_APP_URL", "http://localhost:3000"),

  /** NODE_ENV shorthand */
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};
