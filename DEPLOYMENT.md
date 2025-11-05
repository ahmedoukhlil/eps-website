# Guide de Déploiement - Site EPS

## 🚀 Déploiement sur Vercel (Recommandé)

### 1. Préparation
```bash
# Cloner le repository
git clone [url-du-repo]
cd eps-website

# Installer les dépendances
npm install

# Tester en local
npm run dev
```

### 2. Configuration Vercel
1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter le repository GitHub
3. Configurer les variables d'environnement dans Vercel Dashboard

### 3. Variables d'Environnement
```env
NEXT_PUBLIC_SITE_URL=https://eps-mauritanie.com
NEXT_PUBLIC_WORDPRESS_URL=https://cms.eps-mauritanie.com/wp-json/wp/v2
WORDPRESS_USERNAME=your_username
WORDPRESS_PASSWORD=your_password
```

### 4. Déploiement
```bash
# Déploiement automatique via Git
git push origin main

# Ou déploiement manuel
vercel --prod
```

## 🌐 Déploiement sur Serveur VPS

### 1. Préparation du Serveur
```bash
# Installer Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PM2 pour la gestion des processus
sudo npm install -g pm2
```

### 2. Configuration Nginx
```nginx
server {
    listen 80;
    server_name eps-mauritanie.com www.eps-mauritanie.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. Déploiement
```bash
# Cloner le projet
git clone [url-du-repo]
cd eps-website

# Installer les dépendances
npm install

# Build de production
npm run build

# Démarrer avec PM2
pm2 start npm --name "eps-website" -- start
pm2 save
pm2 startup
```

## 🔧 Configuration WordPress Headless

### 1. Installation WordPress
```bash
# Télécharger WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# Configurer la base de données
# Créer une base de données MySQL
# Configurer wp-config.php
```

### 2. Plugins Requis
- **JWT Authentication for WP REST API** - Pour l'authentification
- **Custom Post Type UI** - Pour les types de contenu personnalisés
- **Advanced Custom Fields** - Pour les champs personnalisés
- **WP REST API Controller** - Pour l'API REST

### 3. Configuration API
```php
// Dans wp-config.php
define('JWT_AUTH_SECRET_KEY', 'your-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);
```

## 📊 Monitoring et Analytics

### 1. Google Analytics
```javascript
// Ajouter dans _app.tsx
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId="G-XXXXXXXXXX" />
      <Component {...pageProps} />
    </>
  );
}
```

### 2. Monitoring avec Sentry
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  tracesSampleRate: 1.0,
});
```

## 🔒 Sécurité

### 1. HTTPS
```bash
# Installer Certbot pour Let's Encrypt
sudo apt install certbot python3-certbot-nginx

# Obtenir le certificat SSL
sudo certbot --nginx -d eps-mauritanie.com
```

### 2. Headers de Sécurité
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];
```

## 📱 Performance

### 1. Optimisation des Images
```bash
# Installer sharp pour l'optimisation
npm install sharp
```

### 2. Cache
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['cms.eps-mauritanie.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
};
```

## 🚀 Checklist de Déploiement

- [ ] Code testé en local
- [ ] Variables d'environnement configurées
- [ ] Base de données configurée
- [ ] SSL/HTTPS activé
- [ ] Monitoring configuré
- [ ] Backup configuré
- [ ] Tests de performance effectués
- [ ] Documentation mise à jour

## 📞 Support

Pour toute question sur le déploiement, contactez l'équipe de développement.

---

**Développé avec ❤️ pour EPS - El Baraka Prestations de Service**
