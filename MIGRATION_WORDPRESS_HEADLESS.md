# Migration vers WordPress Headless - Complète ✅

## 🎯 Objectif atteint

Le système de stockage local (fichiers JSON) a été **complètement remplacé** par **WordPress Headless**. Toutes les données sont maintenant gérées depuis WordPress.

---

## ✅ Ce qui a été modifié

### 1. Routes API remplacées

Toutes les routes API utilisent maintenant WordPress au lieu de `data-storage.ts` :

| Route | Ancien système | Nouveau système |
|-------|---------------|-----------------|
| `/api/news` | Fichiers JSON | Posts WordPress |
| `/api/careers` | Fichiers JSON | Custom Post Type `eps_job` |
| `/api/gallery` | Fichiers JSON | Médiathèque WordPress |

### 2. Fichiers modifiés

- ✅ `src/app/api/news/route.ts` - Utilise maintenant `fetchPosts()` depuis WordPress
- ✅ `src/app/api/careers/route.ts` - Utilise maintenant `fetchJobs()` depuis WordPress
- ✅ `src/app/api/gallery/route.ts` - Utilise maintenant `fetchAllMedia()` depuis WordPress

### 3. Fonctionnalités

**Actualités (News) :**
- Récupération depuis les Posts WordPress standard
- Support des catégories WordPress
- Images mises en avant automatiquement récupérées
- Tri par date (plus récents en premier)

**Carrières (Careers) :**
- Récupération depuis le Custom Post Type `eps_job`
- Filtrage des offres actives/inactives
- Tous les champs ACF supportés

**Galerie (Gallery) :**
- Récupération depuis la médiathèque WordPress
- Toutes les images uploadées dans WordPress sont disponibles
- Support du filtrage par catégorie

---

## 🚫 Opérations de modification

Les opérations **POST, PUT, DELETE** retournent maintenant une erreur 405 (Method Not Allowed) avec un message indiquant que les modifications doivent être effectuées directement dans WordPress.

**Pourquoi ?**
- WordPress est la source unique de vérité
- Toutes les modifications doivent passer par l'interface WordPress
- Cela garantit la cohérence des données et la sécurité

---

## 📋 Configuration WordPress requise

### 1. Custom Post Types à créer

#### Actualités (Posts standard)
- Utilisez les **Posts WordPress standard**
- Créez des catégories pour organiser les articles
- Ajoutez une image mise en avant pour chaque article

#### Carrières (`eps_job`)
- **Slug** : `eps_job`
- **Nom** : Offres d'emploi
- **REST API** : Activé
- **Champs ACF requis** :
  - `department` (texte)
  - `location` (texte)
  - `type` (select: full-time, part-time, contract, internship)
  - `requirements` (repeater)
  - `responsibilities` (repeater)
  - `benefits` (repeater, optionnel)
  - `salary_range` (texte, optionnel)
  - `posted_date` (date)
  - `closing_date` (date, optionnel)
  - `is_active` (true/false)

#### Galerie (Médiathèque)
- Utilisez la **Médiathèque WordPress standard**
- Uploader les images via **Médias → Ajouter**
- Ajoutez des descriptions et textes alternatifs

---

## 🔧 Configuration du site Next.js

### Variables d'environnement

Créez un fichier `.env.local` :

```env
# WordPress Headless
NEXT_PUBLIC_WORDPRESS_URL=https://votre-wordpress.com/wp-json/wp/v2
NEXT_PUBLIC_WORDPRESS_AUTH_URL=https://votre-wordpress.com/wp-json/jwt-auth/v1

# Optionnel (pour contenu privé)
WORDPRESS_USERNAME=votre_username
WORDPRESS_PASSWORD=votre_password

# Cache (en secondes)
REVALIDATE_TIME=3600
```

---

## 📖 Guide d'utilisation

### Pour ajouter une actualité

1. Connectez-vous à WordPress : `https://votre-wp.com/wp-admin`
2. Allez dans **Articles → Ajouter**
3. Rédigez votre article
4. Ajoutez une **image mise en avant**
5. Sélectionnez une **catégorie**
6. Publiez

L'article apparaîtra automatiquement sur le site !

### Pour ajouter une offre d'emploi

1. Connectez-vous à WordPress
2. Allez dans **Offres d'emploi → Ajouter** (après création du CPT)
3. Remplissez tous les champs ACF
4. Activez `is_active` pour publier
5. Publiez

L'offre apparaîtra automatiquement sur la page Carrières !

### Pour ajouter une image à la galerie

1. Connectez-vous à WordPress
2. Allez dans **Médias → Ajouter**
3. Uploader votre image
4. Ajoutez un **texte alternatif** et une **description**
5. L'image sera automatiquement disponible dans la galerie

---

## 🔄 Migration des données existantes

Si vous avez des données dans les fichiers JSON (`data/news.json`, `data/careers.json`, `data/gallery.json`), vous devez les migrer manuellement vers WordPress :

### Étapes de migration

1. **Actualités** : Créez un article WordPress pour chaque entrée dans `data/news.json`
2. **Carrières** : Créez une offre d'emploi WordPress pour chaque entrée dans `data/careers.json`
3. **Galerie** : Uploader chaque image depuis `data/gallery.json` dans la médiathèque WordPress

---

## ✨ Avantages de WordPress Headless

1. **Interface familière** : Utilisez l'interface WordPress que vous connaissez
2. **Gestion centralisée** : Tous les contenus au même endroit
3. **Sécurité** : WordPress gère l'authentification et les permissions
4. **Extensibilité** : Facile d'ajouter de nouveaux types de contenu
5. **Médiathèque intégrée** : Gestion des images simplifiée
6. **SEO** : WordPress gère les métadonnées et le SEO
7. **Multi-utilisateurs** : Plusieurs personnes peuvent gérer le contenu

---

## 🚀 Prochaines étapes

1. ✅ Configurez WordPress avec les Custom Post Types requis
   - 📖 **Guide détaillé** : Voir `GUIDE_CONFIGURATION_WORDPRESS.md`
2. ✅ Créez les champs ACF pour les carrières
   - 📖 **Guide détaillé** : Voir `GUIDE_CONFIGURATION_WORDPRESS.md` (Section 3)
3. ✅ Migrez vos données existantes (si nécessaire)
4. ✅ Testez les routes API
5. ✅ Vérifiez que tout fonctionne correctement

> **💡 Astuce** : Suivez le guide complet `GUIDE_CONFIGURATION_WORDPRESS.md` pour une configuration étape par étape avec captures d'écran et exemples.

---

## 📝 Notes importantes

- **Les fichiers JSON ne sont plus utilisés** - Vous pouvez les supprimer si vous le souhaitez
- **Toutes les modifications doivent être faites dans WordPress** - L'API Next.js est en lecture seule
- **Le cache est configuré à 1 heure** - Les modifications apparaîtront dans l'heure
- **Fallback automatique** - Si WordPress n'est pas accessible, le site utilisera des données de fallback

---

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que WordPress est accessible
2. Vérifiez que les Custom Post Types sont créés
3. Vérifiez que les champs ACF sont configurés
4. Vérifiez les variables d'environnement
5. Consultez les logs de la console pour les erreurs

---

**Migration terminée ! 🎉**

Tous les contenus sont maintenant gérés via WordPress Headless.

