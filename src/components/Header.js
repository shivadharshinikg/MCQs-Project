const Header = ({heading, subheading}) => {
  return <div className="Header" id="div1">
      <h1 className="heading">{heading}</h1>
      <h2 className="subheading">{subheading}</h2>
  </div>;
};

export default Header;
