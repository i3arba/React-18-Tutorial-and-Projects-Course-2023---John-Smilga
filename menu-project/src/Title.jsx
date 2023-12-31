function Title({text}) {
  return (
  <div className="title">
    <h2>{text || 'Default Title'} </h2>
    <div className="underline"></div>
  </div>);
}
export default Title;
