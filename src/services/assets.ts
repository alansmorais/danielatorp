/**
 * Returns the proper absolute URL for public assets, automatically adapting
 * whether running on custom domain (danielatorp.no) or GitHub Pages subpath (/danielatorp/).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const isGhSubdir = typeof window !== 'undefined' && window.location.pathname.startsWith('/danielatorp');
  return isGhSubdir ? `/danielatorp/${clean}` : `/${clean}`;
}
