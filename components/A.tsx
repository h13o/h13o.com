export const A = ({ children, href }) => {
  return (
    <a className="text-lg hover:underline" href={href}>
      {children}
    </a>
  );
};
