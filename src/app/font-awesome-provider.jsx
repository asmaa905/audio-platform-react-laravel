// font-awesome-provider.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function FontAwesomeProvider({ children }) {
  return <>{children}</>;
}