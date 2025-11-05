# Guide d'intégration des images

## Comment ajouter vos photos

### 1. Placer vos images dans ce dossier
Copiez vos photos dans le dossier `public/images/`

### 2. Images requises

#### A. Section ImageContentSection (texte + grande image)

Pour que cette section s'affiche correctement, ajoutez les images suivantes :

- **team-cleaning.png** : Photo de votre équipe en action (nettoyage professionnel)
  - Dimensions recommandées : 1200x1600px (portrait)
  - Format : PNG
  - Poids : < 500KB (optimisé pour le web)

- **team-work.heic** : Photo de votre personnel qualifié
  - Dimensions recommandées : 1200x1600px (portrait)
  - Format : HEIC (⚠️ Recommandé de convertir en JPG ou PNG pour meilleure compatibilité)
  - Poids : < 500KB

- **eco-cleaning.jpg** : Photo illustrant vos produits écologiques
  - Dimensions recommandées : 1200x1600px (portrait)
  - Format : JPG ou PNG
  - Poids : < 500KB

#### B. Section PhotoGallery (galerie en grille - optionnelle)

Pour afficher une galerie de vos réalisations, créez un dossier `gallery/` et ajoutez :

- **gallery/cleaning-office-1.jpg** : Nettoyage de bureaux
- **gallery/cleaning-hospital.jpg** : Nettoyage hospitalier
- **gallery/cleaning-restaurant.jpg** : Nettoyage de restaurant
- **gallery/cleaning-school.jpg** : Nettoyage d'école
- **gallery/cleaning-industrial.jpg** : Nettoyage industriel
- **gallery/cleaning-hotel.jpg** : Nettoyage d'hôtel

Dimensions recommandées : 800x800px (carré) ou 800x1000px (portrait)

### 3. Optimisation des images

Pour de meilleures performances, optimisez vos images :
- **Outils recommandés** : TinyPNG, Squoosh, ou ImageOptim
- **Format** : WebP recommandé (Next.js le génère automatiquement)
- **Résolution** : 72 DPI pour le web
- **Compression** : Qualité 80-85% pour un bon équilibre

### 4. Personnalisation

#### A. Modifier les images de ImageContentSection

Éditez le fichier : `src/components/sections/ImageContentSection.tsx`

```typescript
const contentBlocks: ContentBlock[] = [
  {
    // ... autres propriétés
    image: "/images/votre-nouvelle-image.jpg",
    imageAlt: "Description de votre image",
  },
];
```

#### B. Modifier les images de la galerie

Éditez le fichier : `src/components/sections/PhotoGallery.tsx`

```typescript
const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/votre-image.jpg",
    alt: "Description",
    category: "Catégorie",
  },
];
```

#### C. Activer la galerie sur la page d'accueil

Dans `src/app/page.tsx`, ajoutez :

```typescript
import { PhotoGallery } from '@/components/sections/PhotoGallery';

export default function Home() {
  return (
    <main>
      {/* ... autres sections ... */}
      <PhotoGallery />
      {/* ... */}
    </main>
  );
}
```

### 5. Structure recommandée

```
public/images/
  ├── team-cleaning.png           (Section ImageContent)
  ├── team-work.heic              (Section ImageContent - ⚠️ Convertir en JPG recommandé)
  ├── eco-cleaning.jpg            (Section ImageContent)
  └── gallery/                    (Galerie optionnelle)
      ├── cleaning-office-1.jpg
      ├── cleaning-hospital.jpg
      ├── cleaning-restaurant.jpg
      ├── cleaning-school.jpg
      ├── cleaning-industrial.jpg
      └── cleaning-hotel.jpg
```

## Notes importantes

- ✅ Next.js optimise automatiquement les images via le composant `Image`
- ✅ Les images sont chargées progressivement (lazy loading)
- ✅ Format WebP généré automatiquement pour les navigateurs compatibles
- ✅ Responsive : les images s'adaptent à toutes les tailles d'écran
- ✅ Les animations sont déclenchées au scroll

### ⚠️ Important : Format HEIC

Le format **HEIC** (High Efficiency Image Container) est un format propriétaire d'Apple qui peut ne pas être supporté par tous les navigateurs web. 

**Recommandation forte** : Convertissez vos fichiers HEIC en **JPG** ou **PNG** avant de les utiliser sur le web.

**Outils de conversion gratuits :**
- **En ligne** : https://heictojpg.com/ ou https://convertio.co/heic-jpg/
- **Mac** : Aperçu (Ouvrir > Exporter > Format JPG)
- **Windows** : CopyTrans HEIC (gratuit)

**Problèmes potentiels avec HEIC :**
- ❌ Non supporté sur Chrome/Firefox (anciennes versions)
- ❌ Problèmes d'affichage sur certains navigateurs
- ❌ Temps de chargement plus longs
- ❌ Incompatibilité avec certains outils d'optimisation

## Conseils pour vos photos

1. **Qualité professionnelle** : Utilisez des photos de haute qualité, bien éclairées
2. **Authenticité** : Privilégiez vos vraies photos d'équipe et de réalisations
3. **Variété** : Montrez différents types d'interventions et de secteurs
4. **Respect** : Assurez-vous d'avoir les droits et autorisations pour vos photos
5. **Cohérence** : Maintenez un style visuel cohérent (filtres, couleurs)

