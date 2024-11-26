// Returns a fully qualified image URL for Strapi, handling both relative and absolute URLs.
export function strapiImage(url: string | undefined): string {
  // Return an empty string if no URL is provided.
  if (!url) return "";

  // Handle relative URLs (starting with "/").
  if (url.startsWith("/")) {
    // Check if running in a Strapi demo environment without a defined API URL.
    if (
      !import.meta.env.VITE_NEXT_PUBLIC_API_URL &&
      document?.location.host.endsWith(".strapidemo.com")
    ) {
      // Rewrite the host from "client-" to "api-" for demo environments.
      return `https://${document.location.host.replace("client-", "api-")}${url}`;
    }

    // Append the relative URL to the API base URL if it's defined.
    return import.meta.env.VITE_NEXT_PUBLIC_API_URL + url;
  }

  // Return absolute URLs unchanged.
  return url;
}

// Returns a fully qualified image URL for Strapi, handling both relative and absolute URLs.
export function strapiDocument(url: string | undefined): string {
  // Return an empty string if no URL is provided.
  if (!url) return "";

  // Handle relative URLs (starting with "/").
  if (url.startsWith("/")) {
    // Check if running in a Strapi demo environment without a defined API URL.
    if (
      !import.meta.env.VITE_NEXT_PUBLIC_API_URL &&
      document?.location.host.endsWith(".strapidemo.com")
    ) {
      // Rewrite the host from "client-" to "api-" for demo environments.
      return `https://${document.location.host.replace("client-", "api-")}${url}`;
    }

    // Append the relative URL to the API base URL if it's defined.
    return import.meta.env.VITE_NEXT_PUBLIC_API_URL + url;
  }

  // Return absolute URLs unchanged.
  return url;
}
