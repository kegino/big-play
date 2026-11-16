export const SITE_URL = "https://bigplay.online";
export const SITE_NAME = "Big Play";
export const SITE_TAGLINE = "Sua Central Gigante de Entretenimento IPTV em 4K com Máxima Estabilidade";
export const SITE_DESCRIPTION = "Big Play: reprodutor de IPTV em 4K e Full HD com alta performance, grade de canais completa, filmes, séries e esportes ao vivo sem travamentos.";
export const DEFAULT_OG_IMAGE = "https://bigplay.online/og-image.webp";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}
