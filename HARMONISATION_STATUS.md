# État de l'Harmonisation Visuelle - Site EPS

## ✅ Pages Harmonisées (3/8)

### 1. Page d'accueil (`src/app/page.tsx`)
- ✅ Style de référence (vidéo background)
- ✅ Gradient bleu unifié
- ✅ Boutons style cohérent

### 2. À Propos (`src/app/about/page.tsx`)
- ✅ Hero harmonisé avec gradient bleu `from-blue-600 via-blue-700 to-blue-900`
- ✅ Badge noir/transparent avec bordure blanche
- ✅ Texte blanc avec drop-shadow
- ✅ Wave separator ajouté
- ✅ Boutons CTA harmonisés (blanc + transparent)
- ✅ Particules blanches (30, opacité 0.4)

### 3. Services (`src/app/services/page.tsx`)
- ✅ Hero harmonisé avec gradient bleu
- ✅ Badge et texte cohérents
- ✅ Wave separator ajouté
- ✅ Boutons CTA harmonisés
- ✅ Particules blanches

### 4. Projets (`src/app/projects/page.tsx`)
- ✅ Hero harmonisé avec gradient bleu
- ✅ Badge et texte cohérents
- ✅ Wave separator ajouté
- ✅ Particules blanches

## 🔄 Pages À Harmoniser (4/8)

### 5. Carrières (`src/app/careers/page.tsx`)
- ❌ Gradient actuel: `from-indigo-600 via-blue-700 to-cyan-800`
- ❌ Badge: `bg-white/10` (à remplacer par `bg-black/40`)
- ❌ Titre: `text-5xl md:text-7xl` avec `bg-clip-text`
- ❌ Boutons: gradients verts et indigo
- ❌ Pas de wave separator

**Changements nécessaires:**
- Gradient Hero → `from-blue-600 via-blue-700 to-blue-900`
- Badge → style noir/transparent
- Titre → texte blanc simple avec drop-shadow
- Boutons → blanc + transparent
- Ajouter wave separator

### 6. Contact (`src/app/contact/page.tsx`)
- ❌ Gradient actuel: `from-emerald-600 via-blue-700 to-indigo-800`
- ❌ Similar issues que Carrières

### 7. Actualités (`src/app/news/page.tsx`)
- ❌ Gradient actuel: `from-rose-600 via-pink-700 to-purple-800`
- ❌ Similar issues

### 8. Zones (`src/app/zone/page.tsx`)
- ❌ Gradient actuel: `from-teal-600 via-cyan-700 to-blue-800`
- ❌ Similar issues

## 🎨 Guide de Style Unifié

### Hero Section (Toutes pages sauf accueil)

```tsx
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-32 overflow-hidden">
  <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />

  {/* Decorative blobs - TOUJOURS BLANCS */}
  <div className="absolute inset-0 opacity-10">
    <div className="... bg-white rounded-full blur-3xl ..."></div>
    <div className="... bg-white rounded-full blur-3xl ..."></div>
  </div>

  {/* Grid pattern */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml...')] opacity-30"></div>

  <div className="container-custom relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-2xl">
      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
      <span className="text-white text-xs font-medium drop-shadow-lg">[CATEGORIE]</span>
    </div>

    {/* Titre - PAS DE GRADIENT DE TEXTE */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
      <span className="drop-shadow-2xl text-shadow-lg">[TITRE]</span>
    </h1>

    {/* Description */}
    <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-3xl mx-auto border border-white/20">
      <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
        [DESCRIPTION] <span className="text-yellow-400 font-semibold">[MOT CLÉ]</span>
      </p>
    </div>

    {/* Boutons CTA */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      {/* Bouton principal blanc */}
      <Link className="... bg-white text-blue-600 hover:bg-blue-50 ...">
        <span className="drop-shadow-sm">[TEXTE]</span>
        <svg>{/* Flèche */}</svg>
      </Link>
      {/* Bouton secondaire transparent */}
      <Link className="... border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 ...">
        <span className="drop-shadow-lg">[TEXTE]</span>
        <svg>{/* Flèche */}</svg>
      </Link>
    </div>
  </div>

  {/* Wave separator - OBLIGATOIRE */}
  <div className="absolute bottom-0 left-0 right-0 z-20">
    <svg viewBox="0 0 1440 120">...</svg>
  </div>
</section>
```

## 🔧 Actions Recommandées

1. **Option A**: Harmoniser manuellement les 4 pages restantes (Careers, Contact, News, Zone)
2. **Option B**: Créer un composant `<PageHero />` réutilisable pour éviter la duplication
3. **Option C**: Utiliser un script de recherche/remplacement pour les modifications en masse

## 📊 Résumé des Changements

- **Couleur principale**: Bleu unifié (`from-blue-600 via-blue-700 to-blue-900`)
- **Particules**: Blanches, 30 count, opacité 0.4
- **Badge**: Noir transparent avec bordure blanche
- **Texte**: Blanc simple (pas de gradient de texte)
- **Accent**: Jaune (`text-yellow-400`) pour mots clés
- **Boutons**: Blanc (principal) + Transparent (secondaire)
- **Wave**: Obligatoire en bas du Hero
- **Blobs**: Toujours blancs (pas de couleurs variables)

## Build Status
✅ Build réussi avec warnings mineurs seulement
