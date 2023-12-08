function PageB(props) {
  return (
    <>
      <h2>This is Page B</h2>
      <h3>Variable from home page (parent) has value {props.theVar}</h3>
    </>
  );
}

export default PageB;
