const SocialMedia = ({ children, href }) => (
  <a className="text-lg hover:underline" href={href}>
    {children}
  </a>
);

export default SocialMedia;
