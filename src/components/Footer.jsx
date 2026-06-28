import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <hr className="footer__rule" />
        <p className="footer__text">
          LUNEX University of Applied Sciences&nbsp;&mdash;&nbsp;Content created to be used
          internally&nbsp;&mdash;&nbsp;
          <span className="footer__email">
            rbaptista (at) lunex lu
          </span>
        </p>
      </div>
    </footer>
  );
}
