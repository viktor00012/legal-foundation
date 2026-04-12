/**
 * Sanity GROQ queries for all content types.
 * These are used with the Sanity client to fetch live CMS content.
 */

// ─── Lawyers ─────────────────────────────────────────────────
export const LAWYERS_QUERY = `*[_type == "lawyer"] | order(order asc, _createdAt asc) {
  "id": _id,
  name,
  "slug": slug.current,
  "photo": photo.asset->url,
  specialization,
  description,
  education,
  experience,
  order
}`;

export const LAWYER_BY_SLUG_QUERY = `*[_type == "lawyer" && slug.current == $slug][0] {
  "id": _id,
  name,
  "slug": slug.current,
  "photo": photo.asset->url,
  specialization,
  description,
  education,
  experience
}`;

// ─── Services ─────────────────────────────────────────────────
export const SERVICES_QUERY = `*[_type == "service"] | order(order asc, _createdAt asc) {
  "id": _id,
  title,
  "slug": slug.current,
  category,
  icon,
  description,
  content,
  details
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  category,
  icon,
  description,
  content[] {
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "alt": alt
    }
  },
  details
}`;


// ─── Articles ─────────────────────────────────────────────────
export const ARTICLES_QUERY = `*[_type == "article"] | order(date desc) {
  "id": _id,
  title,
  "slug": slug.current,
  date,
  excerpt
}`;

export const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  content[] {
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "alt": alt
    }
  }
}`;

// ─── Contact ──────────────────────────────────────────────────
export const CONTACT_QUERY = `*[_type == "contact"][0] {
  firmName,
  description,
  phone,
  email,
  address,
  hours,
  messengerUrl,
  telegramUrl,
  maxUrl,
  mapEmbedUrl,
  seo
}
`;

// ─── Home ─────────────────────────────────────────────────────
export const HOME_QUERY = `*[_type == "home"][0] {
  hero,
  advantages,
  lawyers,
  cta,
  contact
}`;
