// Register Ionicons
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

addIcons({
  heart,
  'logo-ionic': logoIonic,
});

// Load Ionic
(async () => {
  const ionicPath = '/ionic.esm.js';
  await import(/* @vite-ignore */ ionicPath);
})();

// Core CSS required for Ionic components
import '@ionic/core/css/core.css';

// Basic CSS for Ionic apps
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

// Optional CSS utilities
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
