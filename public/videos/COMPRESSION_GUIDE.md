# 🎬 Guide de Compression Vidéo - 36MB → 5MB

Votre vidéo de **36MB** est trop lourde pour le web. Voici comment la compresser efficacement :

## 🎯 **Objectif : Réduire de 36MB à 3-5MB**

### ⚡ **Solution Rapide - HandBrake (Recommandé)**

1. **Téléchargez HandBrake** : https://handbrake.fr/
2. **Ouvrez votre vidéo** dans HandBrake
3. **Sélectionnez le preset** : "Web" → "Gmail Small 25 MB 5 Minutes 480p30"
4. **Modifiez les paramètres** :
   - **Résolution** : 1920x1080 (ou 1280x720 si encore trop lourd)
   - **Framerate** : 24 FPS
   - **Quality** : RF 28-32 (plus élevé = plus compressé)
   - **Audio** : AAC 128 kbps ou supprimez l'audio
5. **Encodez** et testez le résultat

### 💻 **Solution Pro - FFmpeg (Ligne de commande)**

```bash
# Compression optimale pour le web
ffmpeg -i votre-video.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart -vf "scale=1920:1080" 1080.mp4

# Si encore trop lourd, essayez :
ffmpeg -i votre-video.mp4 -c:v libx264 -crf 32 -preset slow -c:a aac -b:a 96k -movflags +faststart -vf "scale=1280:720" 1080.mp4

# Version ultra-compressée :
ffmpeg -i votre-video.mp4 -c:v libx264 -crf 35 -preset slow -an -movflags +faststart -vf "scale=1280:720" 1080.mp4
```

### 🌐 **Solutions en Ligne (Plus Simple)**

1. **CloudConvert** : https://cloudconvert.com/mp4-converter
   - Uploadez votre vidéo
   - Choisissez "MP4" en sortie
   - Options avancées : Bitrate 2000 kbps, Résolution 1280x720

2. **Online-Convert** : https://video.online-convert.com/compress-mp4
   - Téléchargez votre fichier
   - Réglez la qualité à "Medium" ou "Low"
   - Téléchargez le résultat

3. **Compress.com** : https://www.compress.com/compress-mp4/
   - Simple glisser-déposer
   - Compression automatique

## 📊 **Paramètres Recommandés**

| Paramètre | Valeur Recommandée | Alternative |
|-----------|-------------------|-------------|
| **Résolution** | 1920x1080 | 1280x720 |
| **Bitrate Vidéo** | 2-3 Mbps | 1-2 Mbps |
| **Framerate** | 24 FPS | 30 FPS |
| **Codec** | H.264 | H.265 (plus récent) |
| **Audio** | 128 kbps AAC | Pas d'audio |
| **Durée Max** | 15-20 secondes | 10 secondes |

## 🎨 **Optimisations Supplémentaires**

### 1. **Réduire la Durée**
- Coupez la vidéo à 10-15 secondes max
- Un loop court est plus efficace

### 2. **Réduire la Résolution**
- 1280x720 au lieu de 1920x1080
- Toujours bon sur mobile

### 3. **Supprimer l'Audio**
- L'audio est muté de toute façon
- Économise 20-30% de taille

### 4. **Ajuster la Qualité**
- CRF 28-35 (plus élevé = plus compressé)
- Testez différentes valeurs

## 🚀 **Solution Temporaire - Lazy Loading**

En attendant la compression, j'ai ajouté un système de lazy loading :

```typescript
// La vidéo ne se charge que quand elle devient visible
<video
  autoPlay
  muted
  loop
  playsInline
  loading="lazy"
  preload="metadata" // Au lieu de "auto"
  className="absolute inset-0 w-full h-full object-cover"
>
```

## 📱 **Test de Performance**

Après compression, testez :
1. **Temps de chargement** sur 3G/4G
2. **Qualité visuelle** acceptable
3. **Fluidité** de la lecture
4. **Taille finale** < 5MB

## ⚠️ **Important**

- **Sauvegardez l'original** avant compression
- **Testez sur mobile** après compression
- **Vérifiez la qualité** sur grand écran
- **Nommez le fichier final** `1080.mp4`

## 🎯 **Résultat Attendu**

- **Taille** : 3-5MB (au lieu de 36MB)
- **Qualité** : Très bonne pour le web
- **Chargement** : < 3 secondes sur 4G
- **Performance** : Fluide sur tous appareils
