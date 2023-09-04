export const withAuth = (Component) => {
  
    const EnhancedComponent = (props) => {
    return <Component {...props} />;
  };

  return EnhancedComponent;
};
