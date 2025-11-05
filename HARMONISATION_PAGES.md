# Guide d'Harmonisation des Pages - Site EPS

## 🎨 Charte Graphique Unifiée

### Couleurs Principales
- **Gradient Hero**: `from-blue-600 via-blue-700 to-blue-900`
- **Accent Jaune**: `text-yellow-400` (pour les mots importants)
- **Vert Indicateur**: `bg-green-400` (pour le badge "Disponible")

### Section Hero (Toutes les pages sauf accueil)

#### Structure Standard
```tsx
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-32 overflow-hidden">
  <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />

  {/* Decorative Elements */}
  {/* Subtle grid pattern */}

  <div className="container-custom relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-2xl">
      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
      <span className="text-white text-xs font-medium drop-shadow-lg">[CATEGORIE]</span>
    </div>

    {/* Titre */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
      <span className="drop-shadow-2xl text-shadow-lg">[TITRE]</span>
    </h1>

    {/* Description */}
    <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-3xl mx-auto border border-white/20">
      <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
        [DESCRIPTION]
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      {/* Bouton principal blanc */}
      {/* Bouton secondaire transparent */}
    </div>
  </div>

  {/* Wave separator */}
  <div className="absolute bottom-0 left-0 right-0 z-20">
    <svg viewBox="0 0 1440 120">...</svg>
  </div>
</section>
```

### Boutons CTA Standard

#### Bouton Principal (Blanc)
```tsx
<Link
  href="[URL]"
  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-sm"
>
  <span className="drop-shadow-sm">[TEXTE]</span>
  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300">
    {/* Flèche droite */}
  </svg>
</Link>
```

#### Bouton Secondaire (Transparent)
```tsx
<Link
  href="[URL]"
  className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm"
>
  <span className="drop-shadow-lg">[TEXTE]</span>
  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300">
    {/* Flèche droite */}
  </svg>
</Link>
```

## Pages Harmonisées

- ✅ Page d'accueil (référence)
- ✅ About
- ✅ Services
- ⏳ Projects (en cours)
- ⏳ Careers (en cours)
- ⏳ Contact (en cours)
- ⏳ News (en cours)
- ⏳ Zone (en cours)
