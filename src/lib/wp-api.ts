const WP_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL ||
  'https://quanly.baohiem.online/graphql';

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://baohiem.online';

export async function fetchGraphQL(query: string, variables = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    const json = await res.json();
    if (json.errors) {
      console.error('GRAPHQL ERRORS:', JSON.stringify(json.errors, null, 2));
      throw new Error('GraphQL Error: ' + JSON.stringify(json.errors[0].message));
    }
    return json.data;
  } finally {
    clearTimeout(timeout);
  }
}

export async function getAllNodeUris() {
  try {
    const data = await fetchGraphQL(`
      query GetAllNodeUris {
        posts(first: 10000) { nodes { slug } }
        pages(first: 1000) { nodes { slug } }
      }
    `);
    return [...(data?.posts?.nodes || []), ...(data?.pages?.nodes || [])];
  } catch (err) {
    console.warn('[getAllNodeUris] WP API không khả dụng:', err);
    return [];
  }
}

export async function getNodeByUri(uri: string) {
  const trimSlash = /^\/+|\/+$/g;
  const formattedUri =
    uri === '' || uri === '/' ? '/' : `/${uri.replace(trimSlash, '')}/`;
  try {
    const data = await fetchGraphQL(
      `
      query GetNodeByUri($uri: String!) {
        nodeByUri(uri: $uri) {
          __typename
          ... on Post {
            title content slug date
            author { node { name } }
            categories { nodes { name slug } }
            featuredImage { node { mediaItemUrl altText } }
            seo {
              title description canonicalUrl
              openGraph { title description image { url } }
            }
          }
          ... on Page {
            title content slug
            featuredImage { node { mediaItemUrl altText } }
            seo {
              title description canonicalUrl
              openGraph { title description image { url } }
            }
          }
          ... on Category {
            name description slug
            seo {
              title description canonicalUrl
              openGraph { title description image { url } }
            }
          }
        }
      }
    `,
      { uri: formattedUri }
    );
    return data?.nodeByUri || null;
  } catch (err) {
    console.warn(`[getNodeByUri] Không lấy được "${uri}":`, err);
    return null;
  }
}

export async function getHomePosts() {
  try {
    const data = await fetchGraphQL(`
      query GetHomePosts {
        posts(first: 6) {
          nodes {
            id title slug date excerpt
            categories { nodes { name slug } }
            featuredImage { node { mediaItemUrl altText } }
          }
        }
      }
    `);
    return data?.posts?.nodes || [];
  } catch {
    return [];
  }
}

export async function getAllBlogPosts(first = 100) {
  try {
    const data = await fetchGraphQL(`
      query GetAllBlogPosts {
        posts(first: ${first}) {
          nodes {
            id title slug date excerpt
            categories { nodes { name slug } }
            featuredImage { node { mediaItemUrl altText } }
          }
        }
      }
    `);
    return data?.posts?.nodes || [];
  } catch {
    return [];
  }
}

export async function searchPosts(keyword: string) {
  try {
    const data = await fetchGraphQL(
      `
      query SearchPosts($search: String!) {
        posts(where: { search: $search }, first: 20) {
          nodes {
            id title slug date
            excerpt
            featuredImage { node { mediaItemUrl altText } }
          }
        }
      }
    `,
      { search: keyword }
    );
    return data?.posts?.nodes || [];
  } catch {
    return [];
  }
}

export async function getPostsByCategory(categoryName: string, limit = 20) {
  try {
    const data = await fetchGraphQL(
      `
      query GetPostsByCat($categoryName: String!) {
        posts(where: { categoryName: $categoryName }, first: ${limit}) {
          nodes {
            id title slug date excerpt
            featuredImage { node { mediaItemUrl altText } }
            categories { nodes { name slug } }
          }
        }
      }
    `,
      { categoryName }
    );
    return data?.posts?.nodes || [];
  } catch {
    return [];
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const data = await fetchGraphQL(
      `
      query GetCategoryBySlug($slug: String!) {
        categories(where: { slug: [$slug] }, first: 1) {
          nodes {
            __typename name description slug uri
            seo {
              title description canonicalUrl
              openGraph { title description image { url } }
            }
          }
        }
      }
    `,
      { slug }
    );
    return data?.categories?.nodes?.[0] || null;
  } catch {
    return null;
  }
}

export async function getSitemapData() {
  try {
    const data = await fetchGraphQL(`
      query GetSitemapData {
        posts(first: 10000) { nodes { slug modified } }
        pages(first: 1000) { nodes { slug modified } }
        categories(first: 1000) { nodes { slug } }
      }
    `);
    return {
      posts: data?.posts?.nodes || [],
      pages: data?.pages?.nodes || [],
      categories: data?.categories?.nodes || [],
    };
  } catch {
    return { posts: [], pages: [], categories: [] };
  }
}
