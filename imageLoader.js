// Custom image loader for better performance
export default function customImageLoader({ src, width, quality }) {
  // For static imports, use the original src
  if (src.startsWith('/_next/')) {
    return src;
  }

  // For external images or custom optimization
  const params = new URLSearchParams();
  params.set('w', width.toString());
  params.set('q', (quality || 75).toString());

  return `${src}?${params.toString()}`;
}

