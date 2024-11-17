import { client } from ".";
import { components } from "./strapi";

export async function getGlobal() {
  const faqPage = await client.GET("/global", {
    cache: "no-cache",
  });
  return faqPage?.data?.data || undefined;
}

export async function getFaqs(start: number = 0, limit: number = 25) {
  const faqs = await client.GET("/faqs", {
    cache: "no-cache",
    params: {
      query: {
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });

  //await new Promise((f) => setTimeout(f, 1000));
  //throw new Error("Cannot calculate the square root of a negative number.");

  return faqs?.data?.data || [];
}

export async function getFaqPage() {
  const faqPage = await client.GET("/faq-page", {
    cache: "no-cache",
  });
  return faqPage?.data?.data || undefined;
}

export async function getArticles(
  search: string = "",
  start: number = 0,
  limit: number = 25
) {
  const articles = await client.GET("/articles", {
    cache: "no-cache",
    params: {
      query: {
        "filters[$or][0][title][$containsi]": search,
        "filters[$or][1][description][$containsi]": search,
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });
  return articles?.data;
}

export async function getBlogPage() {
  const blogPage = await client.GET("/blog-page", {
    cache: "no-cache",
  });
  return blogPage?.data?.data || undefined;
}

export async function getEvents(start: number = 0, limit: number = 25) {
  const events = await client.GET("/events", {
    cache: "no-cache",
    params: {
      query: {
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });

  //await new Promise((f) => setTimeout(f, 1000));
  //throw new Error("Cannot calculate the square root of a negative number.");

  return events?.data?.data || [];
}

export async function getMembers(start: number = 0, limit: number = 25) {
  const members = await client.GET("/members", {
    cache: "no-cache",
    params: {
      query: {
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });

  //await new Promise((f) => setTimeout(f, 1000));
  //throw new Error("Cannot calculate the square root of a negative number.");

  return members?.data?.data || [];
}

export async function getEventsPage() {
  const eventsPage = await client.GET("/event-page", {
    cache: "no-cache",
  });
  return eventsPage?.data?.data || undefined;
}

export async function getTeamPage() {
  const teamPage = await client.GET("/team-page", {
    cache: "no-cache",
  });
  return teamPage?.data?.data || undefined;
}

export async function getProtocols(start: number = 0, limit: number = 25) {
  const protocols = await client.GET("/protocols", {
    cache: "no-cache",
    params: {
      query: {
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });

  //await new Promise((f) => setTimeout(f, 1000));
  //throw new Error("Cannot calculate the square root of a negative number.");

  return protocols?.data?.data || [];
}

export async function getDownloads(start: number = 0, limit: number = 25) {
  const downloads = await client.GET("/downloads", {
    cache: "no-cache",
    params: {
      query: {
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });

  //await new Promise((f) => setTimeout(f, 1000));
  //throw new Error("Cannot calculate the square root of a negative number.");

  return downloads?.data?.data || [];
}

export async function getExternalLinks(start: number = 0, limit: number = 25) {
  const externalLinks = await client.GET("/external-links", {
    cache: "no-cache",
    params: {
      query: {
        "pagination[start]": start,
        "pagination[limit]": limit,
      },
    },
  });

  //await new Promise((f) => setTimeout(f, 1000));
  //throw new Error("Cannot calculate the square root of a negative number.");

  return externalLinks?.data?.data || [];
}

export async function getResourcesPage() {
  const resourcesPage = await client.GET("/resources-page", {
    cache: "no-cache",
  });
  return resourcesPage?.data?.data || undefined;
}

export async function addServiceRequest() {
  const payload: components["schemas"]["ServiceRequestRequest"] = {
    data: {
      message: "Hallo",
    },
  };
  const response = await client.POST("/service-requests", {
    body: payload,
  });

  return response?.data?.data;
}
