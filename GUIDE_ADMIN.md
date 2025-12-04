# 📋 Guide d'utilisation de l'interface d'administration

Ce guide vous explique comment utiliser l'interface d'administration pour gérer le contenu dynamique du site EPS.

## 🚀 Accès à l'interface

1. Accédez à `/admin` sur votre site
2. Connectez-vous avec le mot de passe par défaut : `admin`
3. ⚠️ **IMPORTANT** : Changez ce mot de passe en production !

## 🔐 Sécurité

### Changer le mot de passe

Pour l'instant, l'authentification est basique. Pour la production, vous devriez :

1. Modifier le fichier `src/app/admin/page.tsx`
2. Remplacer le mot de passe hardcodé par une vérification sécurisée
3. Utiliser une authentification plus robuste (JWT, sessions, etc.)

**Exemple de modification :**

```typescript
// Dans src/app/admin/page.tsx
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'votre-mot-de-passe-securise';

if (password === ADMIN_PASSWORD) {
  // ...
}
```

Puis ajoutez dans votre `.env.local` :
```
ADMIN_PASSWORD=votre-mot-de-passe-securise
```

## 📝 Gestion des Carrières

### Accéder à la gestion des carrières

1. Connectez-vous à `/admin`
2. Cliquez sur la carte "Carrières"

### Créer une nouvelle offre d'emploi

1. Cliquez sur "+ Nouvelle carrière"
2. Remplissez les champs :
   - **Titre** : Titre du poste (ex: "Technicien de Nettoyage")
   - **Département** : Service concerné (ex: "Opérations")
   - **Localisation** : Ville (ex: "Nouakchott")
   - **Type** : CDI, CDD, Stage, Freelance
   - **Expérience** : Niveau requis (ex: "2-3 ans")
   - **Salaire** : Fourchette ou "Selon expérience"
   - **Description** : Description du poste
   - **Exigences** : Cliquez sur "+ Ajouter une exigence" pour chaque point
   - **Responsabilités** : Cliquez sur "+ Ajouter une responsabilité"
   - **Avantages** : Cliquez sur "+ Ajouter un avantage"
   - **Urgent** : Cochez si l'offre est urgente
   - **Active** : Décochez pour désactiver l'offre sans la supprimer

3. Cliquez sur "Créer"

### Modifier une offre

1. Cliquez sur "Modifier" à côté de l'offre
2. Modifiez les champs souhaités
3. Cliquez sur "Mettre à jour"

### Supprimer une offre

1. Cliquez sur "Supprimer" à côté de l'offre
2. Confirmez la suppression

## 📰 Gestion des Actualités

### Créer un nouvel article

1. Accédez à `/admin/news`
2. Cliquez sur "+ Nouvel article"
3. Remplissez les champs :
   - **Titre** : Titre de l'article
   - **Catégorie** : Catégorie (ex: "Actualités", "Récompenses")
   - **Auteur** : Nom de l'auteur
   - **Date** : Date de publication
   - **Temps de lecture** : Durée estimée (ex: "3 min")
   - **Image** : URL de l'image (ex: "/images/news/article.jpg")
   - **Résumé** : Extrait de l'article
   - **Contenu** : Contenu complet de l'article
   - **Tags** : Mots-clés séparés par des virgules
   - **Article à la une** : Cochez pour mettre en avant
   - **Publié** : Décochez pour sauvegarder en brouillon

4. Cliquez sur "Créer"

> **Note** : Le slug (URL) est généré automatiquement à partir du titre

## 🖼️ Gestion de la Galerie

### Ajouter une image

1. Accédez à `/admin/gallery`
2. Cliquez sur "+ Ajouter une image"
3. **Étape 1** : Placez votre image dans `public/images/gallery/`
4. **Étape 2** : Remplissez le formulaire :
   - **URL de l'image** : Chemin relatif (ex: "/images/gallery/mon-image.jpg")
   - **Catégorie** : Catégorie de l'image (ex: "Bureaux", "Santé")
   - **Texte alternatif** : Description pour l'accessibilité
   - **Titre** : Titre optionnel
   - **Description** : Description détaillée optionnelle

5. Cliquez sur "Ajouter"

### Conseils pour les images

- **Format recommandé** : JPG ou PNG
- **Taille optimale** : 800x800px (carré) ou 800x1000px (portrait)
- **Poids** : < 300 KB par image
- **Optimisation** : Utilisez [TinyPNG](https://tinypng.com/) avant l'upload

## 📂 Structure des données

Les données sont stockées dans des fichiers JSON dans le dossier `data/` :

- `data/careers.json` : Offres d'emploi
- `data/news.json` : Articles d'actualité
- `data/gallery.json` : Images de la galerie

Ces fichiers sont créés automatiquement lors de la première utilisation.

## 🔄 Utilisation dans les pages publiques

### Carrières

Les pages publiques récupèrent automatiquement les carrières actives via l'API :

```typescript
// Dans src/app/careers/page.tsx
const response = await fetch('/api/careers?activeOnly=true');
const careers = await response.json();
```

### Actualités

```typescript
// Dans src/app/news/page.tsx
const response = await fetch('/api/news?publishedOnly=true');
const articles = await response.json();
```

### Galerie

```typescript
// Dans src/components/sections/PhotoGallery.tsx
const response = await fetch('/api/gallery');
const images = await response.json();
```

## 🐛 Dépannage

### Les données ne s'affichent pas

1. Vérifiez que les fichiers JSON existent dans `data/`
2. Vérifiez la console du navigateur pour les erreurs
3. Vérifiez que les API routes fonctionnent : `/api/careers`, `/api/news`, `/api/gallery`

### Erreur "Cannot read property"

1. Vérifiez que les fichiers JSON sont valides
2. Vérifiez que les champs requis sont remplis
3. Redémarrez le serveur de développement

### Les images ne s'affichent pas

1. Vérifiez que l'image existe dans `public/images/gallery/`
2. Vérifiez que le chemin dans l'URL est correct (commence par `/images/`)
3. Vérifiez les permissions du fichier

## 🔒 Sécurité en production

Avant de déployer en production :

1. ✅ Changez le mot de passe d'administration
2. ✅ Ajoutez une authentification robuste (JWT, sessions)
3. ✅ Protégez les routes API avec middleware d'authentification
4. ✅ Ajoutez une validation côté serveur pour toutes les entrées
5. ✅ Limitez le taux de requêtes (rate limiting)
6. ✅ Utilisez HTTPS
7. ✅ Sauvegardez régulièrement les fichiers JSON

## 📚 API Endpoints

### Carrières

- `GET /api/careers` - Liste toutes les carrières
- `GET /api/careers?id=1` - Récupère une carrière spécifique
- `GET /api/careers?activeOnly=true` - Liste uniquement les carrières actives
- `POST /api/careers` - Crée une nouvelle carrière
- `PUT /api/careers` - Met à jour une carrière
- `DELETE /api/careers?id=1` - Supprime une carrière

### Actualités

- `GET /api/news` - Liste tous les articles
- `GET /api/news?id=1` - Récupère un article spécifique
- `GET /api/news?slug=mon-article` - Récupère par slug
- `GET /api/news?publishedOnly=true` - Liste uniquement les articles publiés
- `POST /api/news` - Crée un nouvel article
- `PUT /api/news` - Met à jour un article
- `DELETE /api/news?id=1` - Supprime un article

### Galerie

- `GET /api/gallery` - Liste toutes les images
- `GET /api/gallery?id=1` - Récupère une image spécifique
- `GET /api/gallery?category=Bureaux` - Filtre par catégorie
- `POST /api/gallery` - Ajoute une nouvelle image
- `PUT /api/gallery` - Met à jour une image
- `DELETE /api/gallery?id=1` - Supprime une image

## 💡 Prochaines améliorations

- [ ] Upload d'images directement depuis l'interface
- [ ] Éditeur de texte riche (WYSIWYG) pour les articles
- [ ] Prévisualisation avant publication
- [ ] Historique des modifications
- [ ] Export/Import des données
- [ ] Authentification multi-utilisateurs
- [ ] Rôles et permissions

---

**Besoin d'aide ?** Consultez la documentation Next.js ou contactez le support technique.

