import { STORE } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <strong className="footer-brand">{STORE.legalName}</strong> &nbsp; © {new Date().getFullYear()}
      </span>
      <span>{STORE.tagline}</span>
    </footer>
  );
}
