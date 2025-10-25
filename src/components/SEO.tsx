// src/components/SEO.tsx
import { siteConfig } from "@/config/siteConfig";
import React from "react";
import { Helmet } from "react-helmet-async";
import { favicons } from "@/assets";
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
}) => {
  const siteTitle = title
    ? `${title} - ${siteConfig.company.name}`
    : siteConfig.seo.title;
  const siteDescription = description || siteConfig.seo.description;
  const siteKeywords = [...siteConfig.seo.keywords, ...keywords].join(", ");
  const siteImage = image || siteConfig.company.logo;
  const siteUrl = url || window.location.href;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.company.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={favicons.apple_icon_114x114}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={favicons.apple_icon_120x120}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={favicons.apple_icon_144x144}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={favicons.apple_icon_152x152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={favicons.apple_icon_180x180}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={favicons.android_icon_192x192}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={favicons.favicon_32x32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={favicons.favicon_96x96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={favicons.favicon_16x16}
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};
