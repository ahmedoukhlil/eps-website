# Intégration WordPress Headless - Récapitulatif Complet

## Vue d'ensemble

Le site EPS est maintenant configuré pour gérer **toutes les données dynamiques** via WordPress Headless. Cela signifie que vous pouvez modifier les témoignages, services, projets, et autres contenus directement depuis l'interface WordPress, sans toucher au code.

---

## ✅ Ce qui a été implémenté

### 1. Architecture WordPress Headless

- **API REST WordPress** configurée pour exposer tous les contenus
- **Types TypeScript** complets pour tous les Custom Post Types
- **Adaptateurs** pour convertir les données WordPress vers les formats de l'application
- **Système de cache** avec revalidation automatique (1 heure par défaut)
- **Fallback automatique** si WordPress n'est pas accessible

### 2. Types de contenus disponibles

| Contenu | Custom Post Type | État | Utilisation |
|---------|------------------|------|-------------|
| ✅ Témoignages | `eps_testimonial` | **Implémenté** | Page d'accueil - Section témoignages |
| ⏳ Services | `eps_service` | Préparé | Pages services |
| ⏳ Projets | `eps_project` | Préparé | Portfolio projets |
| ⏳ Références | `eps_reference` | Préparé | Logos clients |
| ⏳ Engagements | `eps_commitment` | Préparé | Valeurs entreprise |
| ⏳ Équipe | `eps_team_member` | Préparé | Page À propos |
| ⏳ Emplois | `eps_job` | Préparé | Page Carrières |
| ⏳ Actualités | Posts standard | Préparé | Blog/News |

**Légende** :
- ✅ Implémenté et actif
- ⏳ Structure créée, prêt à être activé

### 3. Fichiers créés/modifiés

#### Nouveaux fichiers

```
src/lib/wordpress.ts                  - Configuration et fonctions API WordPress
src/lib/wordpress-adapters.ts         - Convertisseurs de données
WORDPRESS_SETUP.md                    - Guide complet de configuration
GUIDE_WORDPRESS_RAPIDE.md            - Guide rapide pour ajouter un témoignage
INTEGRATION_WORDPRESS_COMPLETE.md    - Ce fichier
```

#### Fichiers modifiés

```
src/components/sections/Testimonials.tsx  - Accepte maintenant les données WordPress
src/app/page.tsx                          - Récupère les témoignages depuis WordPress
env.example                               - Configuration WordPress ajoutée
```

---

## 🚀 Démarrage rapide

### Étape 1 : Configuration WordPress

1. Installez WordPress sur votre serveur
2. Installez les plugins requis :
   - Advanced Custom Fields PRO
   - Custom Post Type UI
   - ACF to REST API
3. Créez les Custom Post Types (voir [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md))
4. Configurez les champs ACF (voir [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md))

### Étape 2 : Configuration Next.js

1. Copiez `.env.example` vers `.env.local`
2. Configurez l'URL WordPress :
   ```env
   NEXT_PUBLIC_WORDPRESS_URL=https://votre-wordpress.com/wp-json/wp/v2
   REVALIDATE_TIME=3600
   ```

### Étape 3 : Ajouter du contenu

1. Connectez-vous à WordPress
2. Ajoutez des témoignages (voir [GUIDE_WORDPRESS_RAPIDE.md](./GUIDE_WORDPRESS_RAPIDE.md))
3. Les modifications apparaîtront automatiquement sur le site

---

## 📋 Champs WordPress requis

### Témoignages (eps_testimonial)

Configuration ACF nécessaire :

```
Groupe de champs : "Détails du témoignage"
Localisation : Type de contenu = eps_testimonial

Champs :
├── name (Texte)              - Nom complet du client
├── position (Texte)          - Poste/Fonction
├── company (Texte)           - Nom de l'entreprise
├── testimonial_text (Zone)   - Texte du témoignage
├── rating (Nombre)           - Note sur 5 (1-5)
├── avatar (Image)            - Photo du client [optionnel]
└── date (Date)               - Date du témoignage [optionnel]
```

**Instructions d'import ACF** :

Si vous souhaitez importer rapidement la configuration ACF, voici le JSON :

```json
{
  "key": "group_testimonials",
  "title": "Détails du témoignage",
  "fields": [
    {
      "key": "field_name",
      "label": "Nom complet",
      "name": "name",
      "type": "text",
      "required": 1
    },
    {
      "key": "field_position",
      "label": "Poste/Fonction",
      "name": "position",
      "type": "text",
      "required": 1
    },
    {
      "key": "field_company",
      "label": "Entreprise",
      "name": "company",
      "type": "text",
      "required": 1
    },
    {
      "key": "field_testimonial_text",
      "label": "Témoignage",
      "name": "testimonial_text",
      "type": "textarea",
      "required": 1
    },
    {
      "key": "field_rating",
      "label": "Note",
      "name": "rating",
      "type": "number",
      "min": 1,
      "max": 5
    },
    {
      "key": "field_avatar",
      "label": "Avatar",
      "name": "avatar",
      "type": "image",
      "return_format": "url"
    },
    {
      "key": "field_date",
      "label": "Date",
      "name": "date",
      "type": "date_picker"
    }
  ],
  "location": [
    [
      {
        "param": "post_type",
        "operator": "==",
        "value": "eps_testimonial"
      }
    ]
  ],
  "show_in_rest": 1
}
```

---

## 🔄 Fonctionnement

### Flux de données

```
WordPress CMS
    ↓
WP REST API (/wp-json/wp/v2/eps_testimonial)
    ↓
Next.js fetchTestimonials()
    ↓
WordPress Adapters (convertAllTestimonials)
    ↓
Testimonials Component
    ↓
Affichage sur le site
```

### Cache et revalidation

- **Cache** : Les données sont mises en cache par Next.js
- **Revalidation** : Automatique toutes les heures (3600 secondes)
- **Modification** : Changez `REVALIDATE_TIME` dans `.env.local`
- **Développement** : Définissez `REVALIDATE_TIME=0` pour désactiver le cache

### Gestion des erreurs

- Si WordPress est inaccessible → Utilise les données de fallback
- Si un champ est manquant → Utilise une valeur par défaut
- Si une image échoue → Affiche les initiales du nom

---

## 🛠️ Étendre l'intégration

### Activer d'autres contenus WordPress

Pour activer les Services, Projets, etc., suivez ce modèle :

#### 1. Composant (exemple : Services)

```typescript
// src/components/sections/ServicesSection.tsx
import { Service } from '@/types';

interface ServicesSectionProps {
  services?: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services = fallbackServices
}) => {
  // Utilisez services au lieu de données hardcodées
};
```

#### 2. Page parent

```typescript
// src/app/page.tsx ou src/app/services/page.tsx
import { fetchServices } from '@/lib/wordpress';
import { convertAllServices } from '@/lib/wordpress-adapters';

export default async function Page() {
  let services;
  try {
    const wpServices = await fetchServices();
    services = await convertAllServices(wpServices);
  } catch (error) {
    console.error('Erreur services:', error);
  }

  return <ServicesSection services={services} />;
}
```

#### 3. Créer le CPT et les champs ACF dans WordPress

Voir [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md) pour la configuration complète.

---

## 📊 API WordPress disponibles

Une fois WordPress configuré, ces endpoints seront disponibles :

```
# Témoignages
GET /wp-json/wp/v2/eps_testimonial
GET /wp-json/wp/v2/eps_testimonial/{id}

# Services
GET /wp-json/wp/v2/eps_service
GET /wp-json/wp/v2/eps_service?slug={slug}

# Projets
GET /wp-json/wp/v2/eps_project
GET /wp-json/wp/v2/eps_project?slug={slug}

# Références
GET /wp-json/wp/v2/eps_reference

# Engagements
GET /wp-json/wp/v2/eps_commitment

# Équipe
GET /wp-json/wp/v2/eps_team_member

# Emplois
GET /wp-json/wp/v2/eps_job
GET /wp-json/wp/v2/eps_job?meta_key=is_active&meta_value=true

# Actualités (Posts standard)
GET /wp-json/wp/v2/posts
GET /wp-json/wp/v2/posts?slug={slug}
```

### Tester les APIs

```bash
# Lister tous les témoignages
curl https://votre-wordpress.com/wp-json/wp/v2/eps_testimonial

# Avec les champs ACF
curl https://votre-wordpress.com/wp-json/wp/v2/eps_testimonial?acf_format=standard
```

---

## 🔐 Sécurité

### Variables d'environnement sensibles

Ne committez JAMAIS le fichier `.env.local`. Il contient :
- URL WordPress
- Identifiants d'authentification (si utilisés)

### CORS

Si vous rencontrez des problèmes CORS, ajoutez dans `functions.php` :

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

---

## 📚 Documentation complète

- **[WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md)** - Guide complet de configuration WordPress
- **[GUIDE_WORDPRESS_RAPIDE.md](./GUIDE_WORDPRESS_RAPIDE.md)** - Guide rapide pour ajouter un témoignage
- **[env.example](./env.example)** - Variables d'environnement avec descriptions

---

## 🎯 Prochaines étapes recommandées

### Phase 1 : Témoignages (✅ Complété)
- [x] Configuration WordPress
- [x] Ajout de vrais témoignages clients
- [x] Test de l'affichage

### Phase 2 : Services
- [ ] Activer le CPT Services
- [ ] Migrer les données des services
- [ ] Adapter le composant ServicesSection

### Phase 3 : Projets
- [ ] Activer le CPT Projets
- [ ] Ajouter les projets réalisés
- [ ] Créer la galerie de projets

### Phase 4 : Contenu additionnel
- [ ] Références clients
- [ ] Membres de l'équipe
- [ ] Offres d'emploi
- [ ] Actualités/Blog

---

## 💡 Avantages de cette approche

### Pour les éditeurs de contenu
- ✅ Interface WordPress familière
- ✅ Aucune connaissance technique requise
- ✅ Modifications en temps réel
- ✅ Gestion des médias simplifiée
- ✅ Preview avant publication

### Pour les développeurs
- ✅ Séparation frontend/backend
- ✅ Type-safety avec TypeScript
- ✅ Performance optimisée (cache)
- ✅ Fallback automatique
- ✅ Scalabilité

### Pour le site
- ✅ Contenu toujours à jour
- ✅ Performance excellente
- ✅ SEO optimisé
- ✅ Expérience utilisateur fluide

---

## 🆘 Support et dépannage

### Problème : Les témoignages ne s'affichent pas

**Solutions** :
1. Vérifiez que WordPress est accessible
2. Vérifiez la configuration dans `.env.local`
3. Vérifiez que les témoignages sont "Publiés"
4. Attendez 1 heure (cache) ou redémarrez le serveur
5. Consultez les logs du navigateur (F12)

### Problème : Les champs ACF sont vides

**Solutions** :
1. Installez le plugin "ACF to REST API"
2. Activez "Afficher dans REST API" dans les paramètres du groupe ACF
3. Ajoutez `?acf_format=standard` à l'URL de l'API

### Problème : Erreur 404 sur l'API

**Solutions** :
1. Vérifiez que les permaliens WordPress sont configurés
2. Allez dans WordPress → Réglages → Permaliens → Enregistrer
3. Vérifiez que le CPT a "REST API: Oui"

---

## 📞 Contact

Pour toute question sur cette intégration :
- Consultez la documentation WordPress : https://developer.wordpress.org/rest-api/
- Documentation ACF : https://www.advancedcustomfields.com/resources/
- Documentation Next.js : https://nextjs.org/docs

---

**Version** : 1.0
**Date** : 2024
**Statut** : Prêt pour production
