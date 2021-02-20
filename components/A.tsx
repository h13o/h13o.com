const A = ({ children, href }) => (
  <a className="text-lg hover:underline" href={href}>
    {children}
  </a>
);

export default A;
