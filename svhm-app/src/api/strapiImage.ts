export function strapiImage(url: string | undefined): string {
  if (!url) return "";

  if (url.startsWith("/")) {
    if (
      !import.meta.env.VITE_NEXT_PUBLIC_API_URL &&
      document?.location.host.endsWith(".strapidemo.com")
    ) {
      return `https://${document.location.host.replace("client-", "api-")}${url}`;
    }

    return import.meta.env.VITE_NEXT_PUBLIC_API_URL + url;
  }
  return url;
}
