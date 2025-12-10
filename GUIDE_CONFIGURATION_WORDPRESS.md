# 📘 Guide Complet : Configuration WordPress Headless pour EPS

Ce guide vous explique **étape par étape** comment configurer WordPress pour gérer tous les contenus du site EPS.

---

## 📋 Table des matières

1. [Installation des plugins requis](#1-installation-des-plugins-requis)
2. [Configuration du Custom Post Type "Carrières"](#2-configuration-du-custom-post-type-carrières)
3. [Configuration des champs ACF pour les carrières](#3-configuration-des-champs-acf-pour-les-carrières)
4. [Configuration des Posts (Actualités)](#4-configuration-des-posts-actualités)
5. [Configuration de la médiathèque (Galerie)](#5-configuration-de-la-médiathèque-galerie)
6. [Test de l'intégration](#6-test-de-lintégration)

---

## 1. Installation des plugins requis

### Étape 1.1 : Installer Advanced Custom Fields (ACF)

1. Connectez-vous à votre WordPress : `https://votre-wordpress.com/wp-admin`
2. Allez dans **Extensions → Ajouter**
3. Recherchez "**Advanced Custom Fields**"
4. Installez et activez le plugin
5. **Important** : Pour les fonctionnalités avancées, vous pouvez utiliser ACF PRO (payant) ou ACF (gratuit)

### Étape 1.2 : Installer Custom Post Type UI

1. Dans **Extensions → Ajouter**
2. Recherchez "**Custom Post Type UI**"
3. Installez et activez le plugin

### Étape 1.3 : Installer ACF to REST API (Recommandé)

1. Dans **Extensions → Ajouter**
2. Recherchez "**ACF to REST API**"
3. Installez et activez le plugin
4. **Pourquoi** : Ce plugin expose les champs ACF dans l'API REST WordPress

---

## 2. Configuration du Custom Post Type "Carrières"

### Étape 2.1 : Créer le Custom Post Type

1. Allez dans **CPT UI → Add/Edit Post Types**
2. Cliquez sur "**Add New Post Type**"
3. Remplissez les champs suivants :

#### Informations de base

```
Slug: eps_job
Plural Label: Offres d'emploi
Singular Label: Offre d'emploi
```

#### Options d'affichage

- ✅ **Public** : Cochez cette case
- ✅ **Show UI** : Cochez cette case
- ✅ **Show in Menu** : Cochez cette case
- **Menu Position** : `25`
- **Menu Icon** : `dashicons-businessman` ou `dashicons-groups`

#### Supports

Cochez :
- ✅ **Title**
- ✅ **Editor**
- ✅ **Thumbnail** (Image mise en avant)

#### REST API

- ✅ **Show in REST API** : **Cochez OBLIGATOIREMENT**
- **REST API base slug** : `eps_job`

#### Autres options

- **Has Archive** : Cochez si vous voulez une page d'archive
- **Hierarchical** : Ne pas cocher

4. Cliquez sur "**Add Post Type**" en bas de la page

### Étape 2.2 : Vérifier la création

1. Vous devriez voir "**Offres d'emploi**" dans le menu de gauche de WordPress
2. Cliquez dessus pour voir la liste (vide pour l'instant)
3. Testez l'API : Allez sur `https://votre-wordpress.com/wp-json/wp/v2/eps_job`
   - Vous devriez voir `[]` (tableau vide) si tout fonctionne

---

## 3. Configuration des champs ACF pour les carrières

### Étape 3.1 : Créer un groupe de champs

1. Allez dans **Champs personnalisés → Ajouter**
2. Donnez un nom au groupe : "**Champs Offre d'emploi**"
3. Dans "**Emplacement**", sélectionnez :
   - **Type de publication** est égal à **Offre d'emploi**

### Étape 3.2 : Ajouter les champs requis

Ajoutez les champs suivants un par un en cliquant sur "**+ Ajouter un champ**" :

#### Champ 1 : Département

```
Label: Département
Nom: department
Type: Texte
Requis: Oui
```

#### Champ 2 : Localisation

```
Label: Localisation
Nom: location
Type: Texte
Requis: Oui
```

#### Champ 3 : Type de contrat

```
Label: Type de contrat
Nom: type
Type: Liste de sélection
Choix:
  full-time : Temps plein
  part-time : Temps partiel
  contract : Contrat
  internship : Stage
Requis: Oui
```

#### Champ 4 : Date de publication

```
Label: Date de publication
Nom: posted_date
Type: Date
Format d'affichage: d/m/Y
Requis: Oui
```

#### Champ 5 : Date de clôture

```
Label: Date de clôture
Nom: closing_date
Type: Date
Format d'affichage: d/m/Y
Requis: Non
```

#### Champ 6 : Fourchette salariale

```
Label: Fourchette salariale
Nom: salary_range
Type: Texte
Requis: Non
```

#### Champ 7 : Offre active

```
Label: Offre active
Nom: is_active
Type: Vrai/Faux
Style d'affichage: Case à cocher
Requis: Non
Valeur par défaut: Oui
```

#### Champ 8 : Exigences (Repeater)

```
Label: Exigences
Nom: requirements
Type: Repeater
Sous-champs:
  - Label: Exigence
    Nom: requirement
    Type: Texte
    Requis: Oui
Requis: Non
```

#### Champ 9 : Responsabilités (Repeater)

```
Label: Responsabilités
Nom: responsibilities
Type: Repeater
Sous-champs:
  - Label: Responsabilité
    Nom: responsibility
    Type: Texte
    Requis: Oui
Requis: Non
```

#### Champ 10 : Avantages (Repeater) - Optionnel

```
Label: Avantages
Nom: benefits
Type: Repeater
Sous-champs:
  - Label: Avantage
    Nom: benefit
    Type: Texte
    Requis: Oui
Requis: Non
```

### Étape 3.3 : Sauvegarder

1. Cliquez sur "**Publier**" en haut à droite
2. Vérifiez que les champs apparaissent quand vous créez une nouvelle offre d'emploi

---

## 4. Configuration des Posts (Actualités)

Les actualités utilisent les **Posts WordPress standard**, donc pas de configuration spéciale nécessaire !

### Utilisation

1. Allez dans **Articles → Ajouter**
2. Rédigez votre article
3. **Important** : Ajoutez une **Image mise en avant** (Featured Image)
4. Sélectionnez une **Catégorie** pour organiser vos articles
5. Publiez

### Créer des catégories

1. Allez dans **Articles → Catégories**
2. Créez des catégories comme :
   - Récompenses
   - Certifications
   - Formation
   - Expansion
   - Partenariats
   - Responsabilité Sociale

---

## 5. Configuration de la médiathèque (Galerie)

La galerie utilise la **Médiathèque WordPress standard**, donc pas de configuration spéciale !

### Utilisation

1. Allez dans **Médias → Ajouter**
2. Uploader vos images
3. **Important** : Pour chaque image :
   - Ajoutez un **Texte alternatif** (Alt text) - utilisé comme description
   - Ajoutez une **Légende** (Caption) - utilisée comme titre
   - Ajoutez une **Description** - utilisée comme catégorie (optionnel)

### Astuce : Organiser les images

Vous pouvez créer des **dossiers** dans la médiathèque avec des plugins comme "FileBird" ou simplement utiliser les descriptions pour catégoriser.

---

## 6. Test de l'intégration

### Test 1 : Vérifier l'API WordPress

Ouvrez votre navigateur et testez ces URLs :

1. **Posts (Actualités)** :
   ```
   https://votre-wordpress.com/wp-json/wp/v2/posts?_embed
   ```

2. **Carrières** :
   ```
   https://votre-wordpress.com/wp-json/wp/v2/eps_job?acf_format=standard
   ```

3. **Médias (Galerie)** :
   ```
   https://votre-wordpress.com/wp-json/wp/v2/media?media_type=image
   ```

Vous devriez voir du JSON avec vos données.

### Test 2 : Vérifier les champs ACF dans l'API

Pour une offre d'emploi spécifique :
```
https://votre-wordpress.com/wp-json/wp/v2/eps_job/ID?acf_format=standard
```

Remplacez `ID` par l'ID d'une offre d'emploi. Vous devriez voir les champs ACF dans la réponse.

### Test 3 : Créer du contenu de test

#### Créer une actualité de test

1. **Articles → Ajouter**
2. Titre : "Test Actualité EPS"
3. Contenu : "Ceci est un test"
4. Image mise en avant : Uploader une image
5. Catégorie : Sélectionner une catégorie
6. **Publier**

#### Créer une offre d'emploi de test

1. **Offres d'emploi → Ajouter**
2. Titre : "Développeur Web"
3. Remplir tous les champs ACF :
   - Département : "IT"
   - Localisation : "Nouakchott"
   - Type de contrat : "Temps plein"
   - Date de publication : Aujourd'hui
   - Offre active : ✅
   - Ajouter quelques exigences et responsabilités
4. **Publier**

#### Uploader une image de test

1. **Médias → Ajouter**
2. Uploader une image
3. Ajouter un texte alternatif : "Image de test EPS"
4. **Enregistrer**

### Test 4 : Vérifier sur le site Next.js

1. Vérifiez que les actualités apparaissent sur la page d'accueil
2. Vérifiez que les offres d'emploi apparaissent sur `/careers`
3. Vérifiez que les images apparaissent dans la galerie

---

## 🔧 Configuration avancée (Optionnel)

### Activer le cache REST API

Pour améliorer les performances, installez le plugin "**WP REST Cache**" :

1. **Extensions → Ajouter**
2. Recherchez "**WP REST Cache**"
3. Installez et activez
4. Configurez le cache selon vos besoins

### Sécuriser l'API (Recommandé)

Pour sécuriser l'API WordPress, vous pouvez :

1. Installer "**JWT Authentication for WP REST API**"
2. Configurer les tokens d'authentification
3. Utiliser les credentials dans `.env.local`

---

## ❓ Problèmes courants et solutions

### Problème 1 : Les champs ACF n'apparaissent pas dans l'API

**Solution** :
- Vérifiez que "**ACF to REST API**" est installé et activé
- Vérifiez que vous utilisez `?acf_format=standard` dans l'URL
- Vérifiez que les champs sont bien assignés au bon Custom Post Type

### Problème 2 : Le Custom Post Type n'apparaît pas dans l'API

**Solution** :
- Vérifiez que "**Show in REST API**" est coché dans CPT UI
- Vérifiez que le slug REST API est correct (`eps_job`)
- Videz le cache WordPress si vous utilisez un plugin de cache

### Problème 3 : Les images ne s'affichent pas

**Solution** :
- Vérifiez que les images sont bien uploadées dans WordPress
- Vérifiez que les URLs des images sont accessibles
- Vérifiez que `_embed` est utilisé dans les requêtes pour les posts

### Problème 4 : Erreur CORS

**Solution** :
- Installez le plugin "**WP REST API - Filter Fields**" ou "**CORS Headers**"
- Configurez les en-têtes CORS dans votre `.htaccess` ou configuration serveur

---

## 📝 Checklist de configuration

Utilisez cette checklist pour vous assurer que tout est configuré :

- [ ] Plugins installés (ACF, CPT UI, ACF to REST API)
- [ ] Custom Post Type `eps_job` créé
- [ ] Custom Post Type visible dans l'API REST
- [ ] Tous les champs ACF créés pour les carrières
- [ ] Champs ACF visibles dans l'API (test avec `?acf_format=standard`)
- [ ] Catégories créées pour les articles
- [ ] Contenu de test créé (1 article, 1 offre, 1 image)
- [ ] API testée et fonctionnelle
- [ ] Site Next.js connecté et affichant les données

---

## 🎉 Félicitations !

Une fois cette configuration terminée, vous pouvez gérer **tous les contenus** du site EPS directement depuis WordPress, sans toucher au code !

---

## 📚 Ressources supplémentaires

- [Documentation ACF](https://www.advancedcustomfields.com/resources/)
- [Documentation CPT UI](https://github.com/WebDevStudios/custom-post-type-ui)
- [Documentation WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Documentation ACF to REST API](https://github.com/airesvsg/acf-to-rest-api)

---

**Besoin d'aide ?** Consultez les logs WordPress et Next.js pour identifier les erreurs.

