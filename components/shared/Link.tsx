/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { useRouter } from 'next/router';

const Link = ({
  children,
  href,
  linkStyle,
}: {
  children: React.ReactNode;
  href: string;
  linkStyle?: SerializedStyles;
}): JSX.Element => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} css={linkStyle}>
      {children}
    </a>
  );
};

export default Link;
