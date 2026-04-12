'use client';

import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';

interface Props {
  value: PortableTextBlock[];
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="article-body-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="article-body-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="article-body-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="article-body-h4">{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="article-body-quote">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="article-body-ul">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="article-body-ol">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="article-body-link"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.url) return null;
      return (
        <figure className="article-body-figure">
          <Image
            src={value.url}
            alt={value.alt || ''}
            width={740}
            height={440}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
          />
          {value.alt && (
            <figcaption className="article-body-figcaption">{value.alt}</figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextContent({ value }: Props) {
  if (!value || value.length === 0) return null;
  return <PortableText value={value} components={components} />;
}
