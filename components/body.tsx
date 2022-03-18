import { HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import parse from 'html-react-parser';
import Image from 'next/image';

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.name === 'img') {
      const { src, alt, width, height } = domNode.attribs;

      return (
        <Image
          src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
          width={`${width}px`}
          height={`${height}px`}
          alt={alt}
          layout="intrinsic"
          objectFit="cover"
        />
      );
    }
  },
};

export function Body({ value }: { value: string }) {
  return <>{parse(value, options)}</>;
}
