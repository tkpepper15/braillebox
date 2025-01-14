import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preorder - Brailliant',
  description: 'Preorder your Brailliant text to braille display',
};

export default function PreorderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 