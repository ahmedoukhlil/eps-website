# EPS - El Baraka Prestations de Service

Site web moderne et élégant pour la société "EPS – El Baraka Prestations de Service" développé avec Next.js et Tailwind CSS.

## 🚀 Fonctionnalités

### Pages Principales
- **Page d'accueil** - Hero section, services, engagements, références
- **À propos** - Mission, valeurs, objectifs institutionnels
- **Services** - 6 services détaillés avec processus et KPIs
- **Zone d'intervention** - Carte interactive, projet Nouakchott-Oumtounsy
- **Réalisations** - Galerie de projets avec filtres
- **Actualités/Blog** - Articles et conseils d'experts
- **Contact** - Formulaire multi-segmenté et informations
- **Carrières** - Offres d'emploi et candidature spontanée

### Services Disponibles
1. **Manutention Aéroportuaire** - Services de manutention professionnels
2. **Nettoyage & Hygiène** - Nettoyage avec produits écologiques
3. **Assistance PMR** - Services d'assistance aux personnes à mobilité réduite
4. **Lutte Antiparasitaire** - Méthodes écologiques et préventives
5. **Gestion de la Faune Sauvage** - Protection et gestion respectueuse
6. **Communication Institutionnelle** - Services de communication multilingues

## 🛠️ Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Headless UI** - Composants accessibles
- **Heroicons** - Icônes SVG

## 🎨 Design

### Palette de Couleurs
- **Bleu marine** (#1e293b) - Couleur principale
- **Bleu EPS** (#0ea5e9) - Couleur d'accent
- **Rouge** (#dc2626) - Couleur d'alerte
- **Blanc** (#ffffff) - Arrière-plan
- **Gris** (#64748b) - Texte secondaire

### Typographie
- **Police principale** : Montserrat
- **Police secondaire** : Lato
- **Responsive** : Mobile-first design

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]

# Aller dans le dossier
cd eps-website

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linter ESLint
```

## 📁 Structure du Projet

```
eps-website/
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   │   ├── about/          # Page À propos
│   │   ├── services/       # Page Services
│   │   ├── zone/           # Page Zone d'intervention
│   │   ├── projects/       # Page Réalisations
│   │   ├── news/           # Page Actualités
│   │   ├── contact/        # Page Contact
│   │   ├── careers/        # Page Carrières
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── components/         # Composants React
│   │   ├── ui/            # Composants UI réutilisables
│   │   └── sections/      # Sections de pages
│   ├── lib/               # Utilitaires et données
│   └── types/             # Types TypeScript
├── public/                # Assets statiques
│   └── images/           # Images du site
└── tailwind.config.ts    # Configuration Tailwind
```

## 🎯 Fonctionnalités Techniques

### SEO Optimisé
- Meta tags optimisés
- Structure sémantique HTML5
- Mots-clés ciblés pour l'industrie aéroportuaire
- Open Graph pour les réseaux sociaux

### Performance
- Images optimisées
- Lazy loading
- Animations performantes avec Framer Motion
- CSS optimisé avec Tailwind

### Accessibilité
- Navigation au clavier
- Contraste de couleurs respecté
- Structure sémantique
- Labels appropriés

## 🔧 Configuration

### Tailwind CSS
Le projet utilise une configuration personnalisée de Tailwind avec :
- Couleurs EPS personnalisées
- Animations personnalisées
- Composants utilitaires

### Framer Motion
Animations fluides pour :
- Scroll reveal
- Hover effects
- Page transitions
- Loading states

## 📝 Gestion du Contenu

### WordPress Headless CMS

Le site est configuré pour gérer le contenu via **WordPress Headless** :

- **Témoignages** - Gérez les témoignages clients depuis WordPress
- **Services** - Créez et modifiez les services offerts
- **Projets** - Portfolio de projets avec galeries
- **Actualités** - Articles de blog et news
- **Équipe** - Membres de l'équipe avec photos
- **Offres d'emploi** - Postes disponibles
- **Références** - Logos et références clients

📚 **Documentation complète** :
- [Guide de configuration WordPress](./WORDPRESS_SETUP.md)
- [Guide rapide - Ajouter un témoignage](./GUIDE_WORDPRESS_RAPIDE.md)
- [Intégration complète](./INTEGRATION_WORDPRESS_COMPLETE.md)

### Données de fallback

Si WordPress n'est pas configuré, le site utilise des données statiques dans `src/lib/data.ts`

### Images
Les images sont organisées dans `public/images/` ou gérées via WordPress :
- Hero images
- Service images
- Project images
- News images
- Logos clients

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Variables d'Environnement
Copiez `env.example` vers `.env.local` et configurez :
```env
# Site
NEXT_PUBLIC_SITE_URL=https://eps-mauritanie.com

# WordPress Headless (optionnel)
NEXT_PUBLIC_WORDPRESS_URL=https://cms.eps-mauritanie.com/wp-json/wp/v2
REVALIDATE_TIME=3600

# Autres configurations (email, analytics, etc.)
# Voir env.example pour la liste complète
```

## 📞 Support

Pour toute question ou support technique, contactez l'équipe de développement.

## 📄 Licence

Ce projet est développé pour EPS - El Baraka Prestations de Service.

---

**Développé avec ❤️ pour EPS - El Baraka Prestations de Service**