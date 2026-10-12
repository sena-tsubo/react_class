import Navigation from './Navigation';
const Footer = ({ onFooterClick }) => {
  return(
    <footer>
      <Navigation />
      <button onClick={onFooterClick}>フッターをクリック</button>
      <p>&copy; 2026 React 学習サイト</p>
    </footer>
  )
}

export default Footer;