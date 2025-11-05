#!/bin/bash

# Script de build pour le site EPS
echo "🚀 Building EPS Website..."

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    exit 1
fi

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Linter
echo "🔍 Vérification du code..."
npm run lint

# Build
echo "🏗️ Construction du site..."
npm run build

# Vérifier que le build a réussi
if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    echo "📁 Fichiers générés dans le dossier .next/"
    echo "🚀 Prêt pour le déploiement !"
else
    echo "❌ Erreur lors du build"
    exit 1
fi
