import trollFace from './../assets/Trollface.png';
function Header() {
  return (
    <header className="header">
      <img src={trollFace} />
      <h1>Meme Generator</h1>
    </header>
  );
}
export default Header;
