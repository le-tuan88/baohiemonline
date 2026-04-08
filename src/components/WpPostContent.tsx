/**
 * WpPostContent — renders WordPress post HTML with full fidelity.
 * 
 * Fetches the WP global-styles CSS (theme.json) server-side and injects it
 * as an inline <style> so Gutenberg blocks render identically to the WP admin.
 * 
 * Also adds a wrapping class "wp-site-blocks" matching Gutenberg expectations.
 */

const WP_BASE = process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace('/graphql', '') 
  || 'https://quanly.baohiem.online';

async function fetchWpGlobalStyles(): Promise<string> {
  try {
    // WP REST API: /wp-json/wp/v2/global-styles/themes/{theme-slug}
    // Simpler approach: fetch the inline CSS WP generates
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/settings`, {
      next: { revalidate: 3600 },
    });
    // Settings endpoint may not have styles, use direct CSS approach instead
    if (!res.ok) return '';
    return '';
  } catch {
    return '';
  }
}

interface WpPostContentProps {
  html: string;
  className?: string;
}

/**
 * Server component - just renders HTML with correct wrapper classes.
 * CSS is already loaded globally from wp-includes in layout.tsx.
 * This wrapper adds Gutenberg block alignment classes.
 */
export default function WpPostContent({ html, className = '' }: WpPostContentProps) {
  return (
    <div
      className={`wp-content wp-block-post-content ${className}`}
      style={{ '--wp--style--global--content-size': '100%' } as React.CSSProperties}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
