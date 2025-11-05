# 📸 Guide d'intégration des photos - EPS Website

## Vue d'ensemble

Votre site dispose maintenant de **deux façons élégantes** d'intégrer vos photos :

### 1. ✅ Section "Texte + Grande Image" (ImageContentSection)
**Actuellement active sur la page d'accueil**

Cette section marie du contenu texte avec de grandes images professionnelles, inspirée du design d'Abdouly Holding.

**Design :**
- Alternance texte/image (gauche-droite)
- Grandes images en portrait (500-600px de hauteur)
- Effet hover avec zoom
- Animations au scroll
- Boutons d'action

**Localisation :** `src/components/sections/ImageContentSection.tsx`

### 2. ⭕ Galerie en grille (PhotoGallery)
**Optionnelle - à activer si vous le souhaitez**

Une galerie élégante en grille pour montrer vos réalisations.

**Design :**
- Grille responsive (1 col mobile, 2-3 cols desktop)
- Images carrées/portrait avec overlay
- Catégories affichées
- Effet hover avec zoom
- Animations au scroll

**Localisation :** `src/components/sections/PhotoGallery.tsx`

---

## 🚀 Étapes pour ajouter vos photos

### Étape 1 : Préparer vos images

#### Pour ImageContentSection (obligatoire) :
Vous avez besoin de **3 images** minimum :

1. **team-cleaning.png** - Votre équipe en action
2. **team-work.heic** - Personnel qualifié avec équipements (⚠️ **Recommandé de convertir en JPG**)
3. **eco-cleaning.jpg** - Produits écologiques ou équipements modernes

**Spécifications :**
- Format : JPG ou PNG
- Dimensions : 1200 x 1600 px (format portrait)
- Poids : < 500 KB
- Qualité : 80-85%

#### Pour PhotoGallery (optionnel) :
Ajoutez **6 images** minimum dans différentes catégories :

**Spécifications :**
- Format : JPG ou PNG
- Dimensions : 800 x 800 px (carré) ou 800 x 1000 px
- Poids : < 300 KB par image
- Qualité : 80-85%

### Étape 2 : Optimiser vos images

Avant de les ajouter, optimisez-les avec :

- **TinyPNG** : https://tinypng.com/ (en ligne, gratuit)
- **Squoosh** : https://squoosh.app/ (en ligne, gratuit)
- **ImageOptim** : https://imageoptim.com/ (Mac)

### Étape 3 : Ajouter les fichiers

#### A. Images pour ImageContentSection :

Copiez vos 3 images dans :
```
eps-website/public/images/
```

Noms exacts requis :
- `team-cleaning.png`
- `team-work.heic` (⚠️ **Voir note sur HEIC ci-dessous**)
- `eco-cleaning.jpg`

#### B. Images pour PhotoGallery (si vous l'activez) :

Copiez vos images dans :
```
eps-website/public/images/gallery/
```

Noms suggérés :
- `cleaning-office-1.jpg`
- `cleaning-hospital.jpg`
- `cleaning-restaurant.jpg`
- `cleaning-school.jpg`
- `cleaning-industrial.jpg`
- `cleaning-hotel.jpg`

### Étape 4 : Personnaliser les textes (optionnel)

#### A. Modifier les textes de ImageContentSection

Éditez : `eps-website/src/components/sections/ImageContentSection.tsx`

Lignes 17-55 : Modifiez le contenu de `contentBlocks` :

```typescript
const contentBlocks: ContentBlock[] = [
  {
    title: "Votre titre",
    highlight: "texte en surbrillance",
    description: "Votre sous-titre",
    details: "Description détaillée de votre service...",
    image: "/images/team-cleaning.jpg",
    imageAlt: "Description de l'image",
    buttonText: "Texte du bouton",
    buttonLink: "/services",
  },
  // ... autres blocs
];
```

#### B. Modifier les images de la galerie

Éditez : `eps-website/src/components/sections/PhotoGallery.tsx`

Lignes 11-41 : Modifiez le contenu de `galleryImages` :

```typescript
const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/votre-image.jpg",
    alt: "Description de votre image",
    category: "Catégorie",
  },
  // ... autres images
];
```

### Étape 5 : Activer la galerie (optionnel)

Si vous souhaitez afficher la galerie sur la page d'accueil :

Éditez : `eps-website/src/app/page.tsx`

```typescript
import { Hero } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ImageContentSection } from '@/components/sections/ImageContentSection';
import { PhotoGallery } from '@/components/sections/PhotoGallery';  // ← Ajoutez cette ligne
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Testimonials } from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ImageContentSection />
      <PhotoGallery />              {/* ← Ajoutez cette ligne */}
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
    </main>
  );
}
```

---

## 📂 Structure des fichiers

```
eps-website/
├── public/
│   └── images/
│       ├── team-cleaning.png          ← Vos 3 images principales
│       ├── team-work.heic             ← (⚠️ Convertir en JPG recommandé)
│       ├── eco-cleaning.jpg
│       ├── README.md                  ← Guide détaillé
│       └── gallery/                   ← Optionnel
│           ├── cleaning-office-1.jpg
│           ├── cleaning-hospital.jpg
│           ├── cleaning-restaurant.jpg
│           ├── cleaning-school.jpg
│           ├── cleaning-industrial.jpg
│           └── cleaning-hotel.jpg
│
└── src/
    └── components/
        └── sections/
            ├── ImageContentSection.tsx  ← Section texte + image (ACTIVE)
            └── PhotoGallery.tsx         ← Galerie (OPTIONNELLE)
```

---

## ✨ Fonctionnalités incluses

### ImageContentSection
- ✅ Alternance gauche/droite automatique
- ✅ Images responsive (s'adaptent à tous les écrans)
- ✅ Effet hover avec zoom élégant
- ✅ Animations au scroll
- ✅ Boutons d'action personnalisables
- ✅ Optimisation automatique par Next.js (WebP, lazy loading)

### PhotoGallery
- ✅ Grille responsive
- ✅ Overlay avec catégories
- ✅ Effet hover avec zoom
- ✅ Animations au scroll
- ✅ Optimisation automatique

---

## 🎨 Conseils pour vos photos

### Qualité
- Utilisez des photos nettes et bien éclairées
- Évitez les photos floues ou sous-exposées
- Préférez la lumière naturelle

### Authenticité
- Utilisez VOS vraies photos (équipes, réalisations)
- Montrez votre matériel et vos méthodes
- Capturez des moments authentiques

### Variété
- Montrez différents types de nettoyage
- Variez les secteurs d'activité
- Incluez des photos "avant/après" si possible

### Cohérence
- Maintenez un style visuel uniforme
- Utilisez des filtres similaires (si applicable)
- Respectez une palette de couleurs cohérente

### Droits
- Assurez-vous d'avoir les droits sur toutes les photos
- Obtenez l'autorisation de vos employés
- Respectez la vie privée de vos clients

---

## 🔄 Pour tester

1. Ajoutez vos 3 images dans `public/images/`
2. Lancez le serveur de développement :
   ```bash
   cd eps-website
   npm run dev
   ```
3. Ouvrez http://localhost:3000
4. Scrollez jusqu'à la section après "Services"
5. Vos images devraient apparaître avec les animations

---

## ⚠️ Important : Format HEIC

### Qu'est-ce que HEIC ?
Le format **HEIC** (High Efficiency Image Container) est utilisé par défaut sur iPhone/iPad depuis iOS 11.

### Problèmes avec HEIC sur le web
- ❌ **Non supporté** par tous les navigateurs (Chrome, Firefox anciennes versions)
- ❌ Problèmes d'affichage possibles
- ❌ Temps de chargement plus longs
- ❌ Incompatible avec certains outils

### ✅ Solution recommandée : Convertir en JPG

**Outils gratuits pour convertir HEIC → JPG :**

1. **En ligne** (le plus simple) :
   - https://heictojpg.com/ (gratuit, sans inscription)
   - https://convertio.co/heic-jpg/

2. **Sur Mac** :
   - Ouvrir l'image avec Aperçu
   - Fichier > Exporter
   - Format : JPEG
   - Qualité : 85%

3. **Sur Windows** :
   - Installer CopyTrans HEIC (gratuit)
   - Clic droit > Convertir en JPEG avec CopyTrans

4. **Sur iPhone** :
   - Réglages > Appareil photo > Formats
   - Choisir "Le plus compatible" (sauvegarde en JPG automatiquement)

### Si vous devez utiliser HEIC
Le code est configuré pour accepter `.heic`, mais **testez soigneusement** sur différents navigateurs.

---

## ❓ Problèmes courants

### "Les images ne s'affichent pas"
- Vérifiez que les noms de fichiers sont exacts (sensible à la casse)
- Vérifiez que les images sont dans `public/images/` (pas dans `src/`)
- **Si fichier HEIC** : Convertissez en JPG (voir section ci-dessus)
- Redémarrez le serveur de développement

### "Les images sont trop lourdes"
- Optimisez avec TinyPNG ou Squoosh
- Visez < 500 KB par image
- Next.js optimisera automatiquement, mais mieux vaut partir de fichiers légers

### "Je veux changer l'ordre des sections"
- Éditez `src/app/page.tsx`
- Réorganisez les imports de composants dans le `return`

---

## 📞 Support

Pour plus d'informations, consultez :
- Documentation Next.js Images : https://nextjs.org/docs/api-reference/next/image
- Guide complet : `public/images/README.md`

---

**Bon travail ! 🎉**

Vos photos vont donner vie à votre site et renforcer la confiance de vos clients.

