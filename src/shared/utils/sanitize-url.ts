export function sanitizeUrl(rawUrl: string): string {
  try {
    let url = rawUrl.trim();

    // Add https:// if no protocol is present
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    const parsed = new URL(url);

    // Allow only http or https
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString();
    }

    // Unsafe protocol fallback
    return 'https://example.com';
  } catch {
    // Invalid URL fallback
    return 'https://example.com';
  }
}
