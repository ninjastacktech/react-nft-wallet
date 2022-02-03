import * as React from 'react';

interface IIconSocialProps {
  href: string;
  children: React.ReactNode;
}

const IconSocial: React.FunctionComponent<IIconSocialProps> = ({ children, ...props }) => {
  return (
    <>
      <a href={props?.href} className="mx-3 block text-slate-600 hover:text-sky-500" target="_blank" rel="noreferrer">
        <span className="sr-only">GitHub</span>
        {React.Children.toArray(children)}
      </a>
    </>
  );
};

export default IconSocial;
