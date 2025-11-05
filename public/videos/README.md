# Vidéos - Instructions

## Placement de votre vidéo

Placez votre fichier `1080.mp4` dans ce dossier (`public/videos/`).

## Spécifications recommandées

### Format et Codec
- **Format** : MP4 (H.264)
- **Résolution** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Ratio** : 16:9 (paysage)
- **Durée** : 10-30 secondes (pour un loop fluide)

### Optimisation
- **Taille de fichier** : < 10MB (idéal < 5MB)
- **Framerate** : 24-30 FPS
- **Bitrate** : 2-5 Mbps

### Contenu recommandé
- Évitez les mouvements trop rapides
- Privilégiez les plans larges et stables
- Assurez-vous que le contenu reste professionnel
- Évitez les textes dans la vidéo (ils seront recouverts)

## Outils de compression

Pour optimiser votre vidéo :

1. **HandBrake** (gratuit)
   - Preset : "Web" > "Gmail Small 25 MB 5 Minutes 480p30"
   - Ajustez la résolution à 1080p

2. **FFmpeg** (ligne de commande)
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 128k -movflags +faststart 1080.mp4
   ```

3. **Services en ligne**
   - CloudConvert
   - Online-Convert
   - Compress.com

## Fallback

Si la vidéo ne se charge pas, le site affichera automatiquement le fond dégradé bleu par défaut.

## Test

Une fois votre vidéo ajoutée :
1. Rechargez la page
2. Vérifiez que la vidéo se lit automatiquement
3. Testez sur mobile (certains navigateurs peuvent bloquer l'autoplay)
4. Vérifiez que le texte reste lisible par-dessus la vidéo
