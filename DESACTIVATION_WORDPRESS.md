# 🚫 Désactivation Temporaire de WordPress

WordPress a été **désactivé temporairement** pour afficher le site avec les données statiques au client.

---

## ✅ État Actuel

- **WordPress** : **DÉSACTIVÉ** ❌
- **Données utilisées** : **Statiques (fallback)** ✅
- **Site** : Fonctionne avec les données hardcodées dans `src/lib/data.ts`

---

## 🔄 Comment Réactiver WordPress

### Option 1 : Via Variable d'Environnement (Recommandé)

1. Créez ou modifiez le fichier `.env.local` à la racine du projet
2. Ajoutez cette ligne :
   ```env
   NEXT_PUBLIC_WORDPRESS_ENABLED=true
   ```
3. Ajoutez aussi l'URL de votre WordPress :
   ```env
   NEXT_PUBLIC_WORDPRESS_URL=http://eps-wp.local/wp-json/wp/v2
   # ou pour la production :
   # NEXT_PUBLIC_WORDPRESS_URL=https://cms.eps-mauritanie.com/wp-json/wp/v2
   ```
4. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```

### Option 2 : Via le Code (Temporaire)

Si vous voulez activer WordPress directement dans le code (pour tester rapidement) :

1. Ouvrez `src/lib/wordpress.ts`
2. Modifiez la ligne :
   ```typescript
   // Avant (désactivé)
   const WORDPRESS_ENABLED = process.env.NEXT_PUBLIC_WORDPRESS_ENABLED === 'true';
   
   // Après (activé)
   const WORDPRESS_ENABLED = true; // Force l'activation
   ```

**⚠️ Attention** : N'oubliez pas de remettre la ligne originale avant de commit !

---

## 📋 Vérification

### Vérifier que WordPress est désactivé

1. Ouvrez la console du navigateur (F12)
2. Allez sur la page d'accueil
3. Vous devriez voir des messages comme :
   ```
   [WordPress désactivé] Requête ignorée: eps_testimonial?_embed&acf_format=standard
   [WordPress désactivé] Requête ignorée: posts?_embed&per_page=3&orderby=date&order=desc
   ```

### Vérifier que WordPress est activé

1. Ouvrez la console du navigateur (F12)
2. Allez sur la page d'accueil
3. Vous ne devriez **PAS** voir les messages "[WordPress désactivé]"
4. Les données devraient venir de WordPress (si configuré)

---

## 🔍 Où sont les Données Statiques ?

Les données de fallback (statiques) sont définies dans :

- **Témoignages** : `src/lib/data.ts` → `testimonials`
- **Actualités** : `src/lib/data.ts` → `newsArticles`
- **Services** : `src/lib/data.ts` → `services`
- **Projets** : `src/lib/data.ts` → `projects`
- **Carrières** : `src/lib/data.ts` → `careers`
- **Galerie** : `src/lib/gallery-utils.ts` → utilise des images par défaut

---

## 📝 Notes Importantes

1. **Pas de modification du code nécessaire** : Le site fonctionne automatiquement avec les données statiques quand WordPress est désactivé
2. **Pas d'erreurs** : Tous les appels WordPress retournent `null` silencieusement, et les composants utilisent les données de fallback
3. **Performance** : Le site est plus rapide sans appels API WordPress
4. **Réactivation facile** : Il suffit de changer une variable d'environnement pour réactiver WordPress

---

## 🎯 Pour la Présentation au Client

Le site est maintenant **100% statique** et fonctionne sans WordPress. Vous pouvez :

- ✅ Présenter le site sans dépendance externe
- ✅ Montrer toutes les fonctionnalités avec les données de démonstration
- ✅ Déployer le site sans configuration WordPress
- ✅ Réactiver WordPress plus tard sans problème

---

## 🔄 Réactivation Après la Présentation

Une fois que vous voulez réactiver WordPress :

1. Suivez les étapes dans [GUIDE_INSTALLATION_WORDPRESS_LOCAL.md](./GUIDE_INSTALLATION_WORDPRESS_LOCAL.md)
2. Configurez WordPress localement ou en production
3. Activez WordPress via `.env.local` (voir ci-dessus)
4. Le site utilisera automatiquement les données WordPress

---

**Date de désactivation** : $(date)
**Raison** : Présentation au client avec données statiques

