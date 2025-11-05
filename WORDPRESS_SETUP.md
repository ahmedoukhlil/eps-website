# Configuration WordPress Headless pour EPS

Ce guide vous explique comment configurer WordPress en tant que CMS Headless pour gérer tout le contenu du site EPS.

## Table des matières

1. [Installation WordPress](#installation-wordpress)
2. [Plugins requis](#plugins-requis)
3. [Configuration des Custom Post Types](#configuration-des-custom-post-types)
4. [Configuration des champs ACF](#configuration-des-champs-acf)
5. [Configuration du site Next.js](#configuration-du-site-nextjs)
6. [Test de l'intégration](#test-de-lintégration)

---

## Installation WordPress

### 1. Installer WordPress

Installez WordPress sur votre serveur (par exemple : `https://cms.eps-mauritanie.com`)

### 2. Configuration de base

- Activez les permaliens "Nom de l'article" dans **Réglages → Permaliens**
- Configurez HTTPS pour votre site WordPress

---

## Plugins requis

Installez et activez les plugins suivants :

### 1. Advanced Custom Fields (ACF) PRO
- **Plugin** : Advanced Custom Fields PRO
- **URL** : https://www.advancedcustomfields.com/
- **Pourquoi** : Permet de créer des champs personnalisés pour tous les contenus

### 2. Custom Post Type UI
- **Plugin** : Custom Post Type UI
- **URL** : https://wordpress.org/plugins/custom-post-type-ui/
- **Pourquoi** : Facilite la création des Custom Post Types

### 3. ACF to REST API (optionnel mais recommandé)
- **Plugin** : ACF to REST API
- **URL** : https://wordpress.org/plugins/acf-to-rest-api/
- **Pourquoi** : Expose les champs ACF dans l'API REST

### 4. WP REST API Cache (recommandé)
- **Plugin** : WP REST Cache
- **URL** : https://wordpress.org/plugins/wp-rest-cache/
- **Pourquoi** : Améliore les performances de l'API

---

## Configuration des Custom Post Types

Créez les Custom Post Types suivants via **CPT UI → Add/Edit Post Types** :

### 1. Témoignages (eps_testimonial)

```
Slug: eps_testimonial
Nom pluriel: Témoignages
Nom singulier: Témoignage
Icône menu: dashicons-star-filled

Supports:
- Title
- Editor

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_testimonial
```

### 2. Services (eps_service)

```
Slug: eps_service
Nom pluriel: Services
Nom singulier: Service
Icône menu: dashicons-admin-tools

Supports:
- Title
- Editor
- Featured Image

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_service
```

### 3. Projets (eps_project)

```
Slug: eps_project
Nom pluriel: Projets
Nom singulier: Projet
Icône menu: dashicons-portfolio

Supports:
- Title
- Editor
- Featured Image

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_project
```

### 4. Références Clients (eps_reference)

```
Slug: eps_reference
Nom pluriel: Références
Nom singulier: Référence
Icône menu: dashicons-groups

Supports:
- Title

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_reference
```

### 5. Engagements (eps_commitment)

```
Slug: eps_commitment
Nom pluriel: Engagements
Nom singulier: Engagement
Icône menu: dashicons-heart

Supports:
- Title
- Editor
- Page Attributes (pour l'ordre)

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_commitment
```

### 6. Équipe (eps_team_member)

```
Slug: eps_team_member
Nom pluriel: Membres d'équipe
Nom singulier: Membre d'équipe
Icône menu: dashicons-businessman

Supports:
- Title
- Editor
- Featured Image

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_team_member
```

### 7. Offres d'emploi (eps_job)

```
Slug: eps_job
Nom pluriel: Offres d'emploi
Nom singulier: Offre d'emploi
Icône menu: dashicons-clipboard

Supports:
- Title
- Editor

REST API:
- Afficher dans REST API: Oui
- Slug REST: eps_job
```

---

## Configuration des champs ACF

### 1. Témoignages (eps_testimonial)

Créez un groupe de champs ACF avec la localisation : **Type de contenu = eps_testimonial**

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Nom complet | Texte | `name` | Oui | Nom complet du client |
| Poste/Fonction | Texte | `position` | Oui | Titre ou fonction |
| Entreprise | Texte | `company` | Oui | Nom de l'entreprise/organisation |
| Témoignage | Zone de texte | `testimonial_text` | Oui | Le texte du témoignage |
| Note | Nombre | `rating` | Non | Note sur 5 (1-5) |
| Avatar | Image | `avatar` | Non | Photo du client (optionnel) |
| Date | Date Picker | `date` | Non | Date du témoignage |

**Paramètres du groupe** :
- Afficher dans REST API : Oui

### 2. Services (eps_service)

Créez un groupe de champs ACF avec la localisation : **Type de contenu = eps_service**

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Icône | Texte | `icon` | Oui | Emoji ou code icône |
| Description courte | Zone de texte | `description` | Oui | Description du service |
| Caractéristiques | Répéteur | `features` | Non | Liste des caractéristiques |
| → Caractéristique | Texte | `feature_item` | Oui | Une caractéristique |
| Processus | Répéteur | `process` | Non | Étapes du processus |
| → Étape | Nombre | `step` | Oui | Numéro de l'étape |
| → Titre | Texte | `title` | Oui | Titre de l'étape |
| → Description | Zone de texte | `description` | Oui | Description de l'étape |
| → Icône | Texte | `icon` | Oui | Emoji ou code icône |
| KPIs | Répéteur | `kpis` | Non | Indicateurs de performance |
| → Valeur | Texte | `value` | Oui | Valeur du KPI (ex: "99%") |
| → Label | Texte | `label` | Oui | Description du KPI |
| → Icône | Texte | `icon` | Oui | Emoji ou code icône |

### 3. Projets (eps_project)

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Description | Zone de texte | `description` | Oui | Description du projet |
| Catégorie | Texte | `category` | Oui | Catégorie du projet |
| Client | Texte | `client` | Oui | Nom du client |
| Date | Texte | `date` | Oui | Année ou date du projet |
| Localisation | Texte | `location` | Non | Lieu du projet |
| Résultats | Répéteur | `results` | Non | Résultats du projet |
| → Résultat | Texte | `result_item` | Oui | Un résultat |
| Galerie | Galerie | `images` | Non | Images supplémentaires |
| Projet vedette | Vrai/Faux | `featured` | Non | Afficher en vedette |

### 4. Références (eps_reference)

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Logo | Image | `logo` | Oui | Logo du client |
| Description | Zone de texte | `description` | Oui | Description du partenariat |
| Site web | URL | `website` | Non | URL du site web |
| Catégorie | Texte | `category` | Non | Type de client |

### 5. Engagements (eps_commitment)

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Icône | Texte | `icon` | Oui | Emoji ou code icône |
| Description | Zone de texte | `description` | Oui | Description de l'engagement |

**Note** : Utilisez le champ "Ordre" (menu_order) pour définir l'ordre d'affichage.

### 6. Équipe (eps_team_member)

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Nom complet | Texte | `name` | Oui | Nom du membre |
| Rôle | Texte | `role` | Oui | Rôle dans l'entreprise |
| Position | Texte | `position` | Oui | Poste occupé |
| Biographie | Éditeur WYSIWYG | `bio` | Non | Biographie courte |
| Email | Email | `email` | Non | Email professionnel |
| Téléphone | Texte | `phone` | Non | Téléphone professionnel |
| LinkedIn | URL | `linkedin` | Non | Profil LinkedIn |
| Twitter | URL | `twitter` | Non | Profil Twitter |
| Facebook | URL | `facebook` | Non | Profil Facebook |

### 7. Offres d'emploi (eps_job)

**Champs :**

| Nom du champ | Type | Clé | Requis | Instructions |
|-------------|------|-----|--------|--------------|
| Département | Texte | `department` | Oui | Département concerné |
| Localisation | Texte | `location` | Oui | Lieu de travail |
| Type de contrat | Sélection | `type` | Oui | full-time, part-time, contract, internship |
| Prérequis | Répéteur | `requirements` | Non | Liste des prérequis |
| → Prérequis | Texte | `requirement_item` | Oui | Un prérequis |
| Responsabilités | Répéteur | `responsibilities` | Non | Liste des responsabilités |
| → Responsabilité | Texte | `responsibility_item` | Oui | Une responsabilité |
| Avantages | Répéteur | `benefits` | Non | Liste des avantages |
| → Avantage | Texte | `benefit_item` | Oui | Un avantage |
| Fourchette salariale | Texte | `salary_range` | Non | Ex: "500 000 - 700 000 MRU" |
| Date de publication | Date Picker | `posted_date` | Oui | Date de publication |
| Date de clôture | Date Picker | `closing_date` | Non | Date limite de candidature |
| Offre active | Vrai/Faux | `is_active` | Oui | Afficher l'offre |

---

## Configuration du site Next.js

### 1. Configurer les variables d'environnement

Copiez `env.example` vers `.env.local` et configurez :

```env
NEXT_PUBLIC_WORDPRESS_URL=https://votre-site-wordpress.com/wp-json/wp/v2
REVALIDATE_TIME=3600
```

### 2. Vérifier la connexion

Testez que l'API WordPress est accessible :

```bash
curl https://votre-site-wordpress.com/wp-json/wp/v2/eps_testimonial
```

Vous devriez recevoir une réponse JSON avec vos témoignages.

---

## Test de l'intégration

### 1. Ajouter un témoignage de test

1. Allez dans **WordPress Admin → Témoignages → Ajouter**
2. Remplissez les champs :
   - Titre : "Test Témoignage"
   - Nom complet : "Jean Dupont"
   - Poste/Fonction : "Directeur"
   - Entreprise : "Test Company"
   - Témoignage : "Excellent service !"
   - Note : 5
3. Publiez

### 2. Vérifier sur le site Next.js

1. Redémarrez votre serveur de développement :
   ```bash
   npm run dev
   ```

2. Visitez la page d'accueil : `http://localhost:3000`

3. Scrollez jusqu'à la section "Témoignages"

4. Vous devriez voir votre nouveau témoignage apparaître !

### 3. Vérifier le cache

Le cache se revalide automatiquement toutes les heures (3600 secondes).

Pour forcer une revalidation immédiate en développement :
- Redémarrez le serveur
- Ou définissez `REVALIDATE_TIME=0` dans `.env.local`

---

## Structure des données WordPress

### Types de contenus gérés

Tous ces contenus sont maintenant gérables depuis WordPress :

- ✅ **Témoignages** - Section témoignages de la page d'accueil
- ✅ **Services** - Liste des services offerts
- ✅ **Projets** - Portfolio de projets réalisés
- ✅ **Références** - Logos et références clients
- ✅ **Engagements** - Valeurs et engagements de l'entreprise
- ✅ **Équipe** - Membres de l'équipe (page À propos)
- ✅ **Offres d'emploi** - Offres d'emploi actives (page Carrières)
- ✅ **Actualités** - Articles de blog (utilise les Posts WordPress standards)

### Fallback automatique

Si WordPress n'est pas accessible ou pas encore configuré, le site utilisera automatiquement des données de fallback définies dans le code. Cela garantit que le site fonctionne toujours.

---

## Conseils et bonnes pratiques

### Performance

1. **Optimiser les images** : Utilisez un plugin comme **Smush** ou **ShortPixel** pour optimiser automatiquement les images uploadées
2. **Cache** : Configurez un plugin de cache WordPress comme **WP Super Cache**
3. **CDN** : Utilisez un CDN pour servir les médias WordPress

### Sécurité

1. **HTTPS** : Utilisez toujours HTTPS pour votre WordPress
2. **Limitez l'accès** : Limitez l'accès à `/wp-admin` par IP si possible
3. **Mises à jour** : Gardez WordPress et tous les plugins à jour

### SEO

1. Les contenus ajoutés via WordPress sont automatiquement indexables
2. Ajoutez des descriptions et titres appropriés
3. Optimisez les images avec des attributs ALT pertinents

---

## Dépannage

### Les témoignages ne s'affichent pas

1. Vérifiez que WordPress est accessible : `curl https://votre-wp.com/wp-json/wp/v2`
2. Vérifiez que le CPT est activé dans REST API
3. Vérifiez que les témoignages sont publiés (pas en brouillon)
4. Vérifiez la configuration dans `.env.local`
5. Consultez les logs du navigateur et du serveur Next.js

### Erreur CORS

Si vous avez des erreurs CORS, ajoutez ce code dans `functions.php` de votre thème WordPress :

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

### Les champs ACF ne sont pas retournés

1. Vérifiez que **ACF to REST API** est installé et activé
2. Vérifiez que les groupes de champs ACF ont "Afficher dans REST API" activé
3. Ajoutez `?acf_format=standard` à vos requêtes API

---

## Support

Pour toute question sur l'intégration WordPress :
- Consultez la documentation ACF : https://www.advancedcustomfields.com/resources/
- WordPress REST API : https://developer.wordpress.org/rest-api/
- Next.js Data Fetching : https://nextjs.org/docs/app/building-your-application/data-fetching

---

## Prochaines étapes

Une fois WordPress configuré, vous pouvez :

1. Adapter les autres composants du site (Services, Projets, etc.) pour utiliser WordPress
2. Créer une interface d'administration personnalisée dans WordPress
3. Mettre en place un système de preview pour voir les modifications avant publication
4. Configurer des webhooks pour rebuild automatique du site lors de modifications

---

**Date de création** : 2024
**Dernière mise à jour** : 2024
**Version** : 1.0
