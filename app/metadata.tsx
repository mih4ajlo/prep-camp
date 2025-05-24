
import Head from 'next/head'

interface Props {
  seoTitle: string,
  seoDescription: string
  }

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Li Ang camp',
};


export default function Metadata1({ seoTitle , seoDescription }: Props) {
    return (
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>
    );
  }
  