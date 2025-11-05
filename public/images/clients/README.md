# Logos des Clients - Instructions

## Format recommandé
- **Format** : PNG avec fond transparent
- **Taille** : 200x100px (ratio 2:1) ou 150x150px (carré)
- **Résolution** : 72-150 DPI
- **Poids** : < 50KB par logo

## Noms des fichiers
Utilisez les noms suivants pour vos logos :

### Gouvernement & Institutions
- `ministere-interieur.png`
- `universite-nouakchott.png`
- `chambre-commerce.png`

### Finance & Banques
- `bcm.png` (Banque Centrale de Mauritanie)
- `societe-generale.png`

### Hôtellerie & Tourisme
- `azalai.png`

### Commerce & Distribution
- `al-khaima.png` (Centre Commercial)

### Éducation
- `ecole-internationale.png`

### Santé
- `al-hayat.png` (Clinique)

### Télécommunications
- `mauritel.png`

### Industrie
- `snim.png`

### Transport
- `air-mauritanie.png`

## Optimisation
Pour optimiser vos logos :
1. Utilisez un outil comme TinyPNG pour réduire la taille
2. Assurez-vous que le logo reste lisible à petite taille
3. Privilégiez les versions monochromes ou avec peu de couleurs

## Remplacement automatique
Une fois vos logos ajoutés dans ce dossier, décommentez les lignes dans `ClientLogosSection.tsx` :

```tsx
// Remplacez cette section :
<div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
  </svg>
</div>

// Par cette section :
<Image
  src={client.logo}
  alt={client.name}
  fill
  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
/>
```
