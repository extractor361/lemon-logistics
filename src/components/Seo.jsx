import { useEffect } from "react";

const SITE_NAME = "Lemon Logistics";
const DEFAULT_OG_IMAGE = "/images/lemon-logistics-hero.png";

function upsertMeta(selector, attr, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({ title, description, image, path, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;
    upsertMeta('meta[name="robots"]', "content", noindex ? "noindex, follow" : "index, follow");

    if (description) {
      upsertMeta('meta[name="description"]', "content", description);
      upsertMeta('meta[property="og:description"]', "content", description);
      upsertMeta('meta[name="twitter:description"]', "content", description);
    }

    upsertMeta('meta[property="og:title"]', "content", title || SITE_NAME);
    upsertMeta('meta[name="twitter:title"]', "content", title || SITE_NAME);
    upsertMeta('meta[property="og:image"]', "content", image || DEFAULT_OG_IMAGE);
    upsertMeta('meta[property="og:type"]', "content", "website");

    if (path) {
      const origin = window.location.origin;
      const url = `${origin}${path}`;
      upsertLink("canonical", url);
      upsertMeta('meta[property="og:url"]', "content", url);
    }
  }, [title, description, image, path, noindex]);

  return null;
}
