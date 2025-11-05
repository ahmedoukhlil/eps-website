# Script PowerShell pour compresser votre vidéo de 36MB
# Utilise FFmpeg (à installer d'abord)

param(
    [string]$InputVideo = "1080-original.mp4",
    [string]$OutputVideo = "public/videos/1080.mp4"
)

Write-Host "🎬 Compression de vidéo : $InputVideo → $OutputVideo" -ForegroundColor Cyan
Write-Host "📊 Objectif : Réduire de 36MB à ~5MB" -ForegroundColor Yellow

# Vérifier si FFmpeg est installé
try {
    $ffmpegVersion = & ffmpeg -version 2>$null
    Write-Host "✅ FFmpeg détecté" -ForegroundColor Green
} catch {
    Write-Host "❌ FFmpeg non trouvé. Installez-le d'abord :" -ForegroundColor Red
    Write-Host "   1. Téléchargez : https://ffmpeg.org/download.html" -ForegroundColor White
    Write-Host "   2. Ou utilisez : winget install FFmpeg" -ForegroundColor White
    Write-Host "   3. Ou utilisez HandBrake (plus simple) : https://handbrake.fr/" -ForegroundColor White
    exit 1
}

# Créer le dossier de destination
$outputDir = Split-Path $OutputVideo -Parent
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
    Write-Host "📁 Dossier créé : $outputDir" -ForegroundColor Green
}

# Vérifier si le fichier source existe
if (!(Test-Path $InputVideo)) {
    Write-Host "❌ Fichier source non trouvé : $InputVideo" -ForegroundColor Red
    Write-Host "💡 Placez votre vidéo dans le dossier et renommez-la '$InputVideo'" -ForegroundColor Yellow
    exit 1
}

# Obtenir la taille du fichier original
$originalSize = (Get-Item $InputVideo).Length / 1MB
Write-Host "📏 Taille originale : $([math]::Round($originalSize, 2)) MB" -ForegroundColor White

Write-Host "🔄 Compression en cours..." -ForegroundColor Yellow
Write-Host "⏱️  Cela peut prendre 2-5 minutes selon votre PC" -ForegroundColor Gray

# Commande FFmpeg optimisée pour le web
$ffmpegArgs = @(
    "-i", $InputVideo,
    "-c:v", "libx264",
    "-crf", "28",
    "-preset", "slow",
    "-c:a", "aac",
    "-b:a", "128k",
    "-movflags", "+faststart",
    "-vf", "scale=1920:1080",
    "-y",
    $OutputVideo
)

try {
    & ffmpeg @ffmpegArgs 2>$null
    
    if (Test-Path $OutputVideo) {
        $compressedSize = (Get-Item $OutputVideo).Length / 1MB
        $reduction = [math]::Round((($originalSize - $compressedSize) / $originalSize) * 100, 1)
        
        Write-Host "✅ Compression terminée !" -ForegroundColor Green
        Write-Host "📏 Nouvelle taille : $([math]::Round($compressedSize, 2)) MB" -ForegroundColor Green
        Write-Host "📉 Réduction : $reduction%" -ForegroundColor Green
        
        if ($compressedSize -gt 10) {
            Write-Host "⚠️  Encore un peu lourd. Essayez avec CRF 32 pour plus de compression :" -ForegroundColor Yellow
            Write-Host "   ffmpeg -i $InputVideo -c:v libx264 -crf 32 -preset slow -c:a aac -b:a 96k -movflags +faststart -vf 'scale=1280:720' $OutputVideo" -ForegroundColor Gray
        } else {
            Write-Host "🎉 Parfait ! Votre vidéo est maintenant optimisée pour le web." -ForegroundColor Green
        }
        
        Write-Host "`n🚀 Prochaines étapes :" -ForegroundColor Cyan
        Write-Host "   1. Testez votre site : npm run dev" -ForegroundColor White
        Write-Host "   2. Vérifiez la qualité de la vidéo" -ForegroundColor White
        Write-Host "   3. Testez sur mobile" -ForegroundColor White
        
    } else {
        Write-Host "❌ Erreur lors de la compression" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ Erreur FFmpeg : $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Essayez HandBrake pour une interface graphique : https://handbrake.fr/" -ForegroundColor Yellow
}

Write-Host "`nAppuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
