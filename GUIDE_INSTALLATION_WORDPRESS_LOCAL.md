# 🚀 Guide d'Installation WordPress Local avec WAMP

Ce guide vous explique comment installer et configurer WordPress localement avec WAMP64 pour le développement du site EPS.

---

## 📋 Prérequis

- ✅ WAMP64 installé et fonctionnel
- ✅ WordPress téléchargé dans le dossier `eps-wp`
- ✅ PHP 7.4 ou supérieur (vérifié dans WAMP)
- ✅ MySQL/MariaDB actif dans WAMP
- ✅ Apache actif dans WAMP

---

## 🔧 Étape 1 : Vérifier WAMP

### 1.1 Démarrer WAMP

1. Lancez **WAMP64** depuis le menu Démarrer
2. Attendez que l'icône WAMP dans la barre des tâches soit **verte** (pas orange ni rouge)
3. Si l'icône est orange ou rouge, cliquez dessus et vérifiez les services

### 1.2 Vérifier les services

1. Cliquez sur l'icône WAMP → **Outils** → **Vérifier l'état des services**
2. Vérifiez que **Apache** et **MySQL** sont **actifs** (en vert)

---

## 🗄️ Étape 2 : Créer la base de données MySQL

### 2.1 Accéder à phpMyAdmin

1. Cliquez sur l'icône WAMP → **phpMyAdmin**
2. Ou ouvrez votre navigateur et allez sur : `http://localhost/phpmyadmin`

### 2.2 Créer la base de données

1. Cliquez sur l'onglet **"Bases de données"** en haut
2. Dans le champ **"Créer une base de données"**, entrez : `eps_wordpress`
3. Sélectionnez **"utf8mb4_general_ci"** dans le menu déroulant
4. Cliquez sur **"Créer"**

### 2.3 Créer un utilisateur (Optionnel mais recommandé)

1. Cliquez sur l'onglet **"Comptes d'utilisateurs"**
2. Cliquez sur **"Ajouter un compte d'utilisateur"**
3. Remplissez :
   - **Nom d'utilisateur** : `eps_wp_user`
   - **Nom d'hôte** : `localhost`
   - **Mot de passe** : Choisissez un mot de passe sécurisé (ex: `Eps2024!`)
   - Cochez **"Créer une base de données portant le nom de l'utilisateur"** (optionnel)
4. Dans **"Privilèges de la base de données"**, sélectionnez `eps_wordpress`
5. Cochez **"Tous les privilèges"**
6. Cliquez sur **"Exécuter"**

**Note** : Si vous ne créez pas d'utilisateur, utilisez `root` comme nom d'utilisateur et laissez le mot de passe vide.

---

## ⚙️ Étape 3 : Configurer wp-config.php

### 3.1 Copier le fichier exemple

1. Allez dans le dossier `eps-wp`
2. Copiez le fichier `wp-config-sample.php`
3. Renommez-le en `wp-config.php`

### 3.2 Éditer wp-config.php

Ouvrez `wp-config.php` avec un éditeur de texte et modifiez les valeurs suivantes :

```php
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'eps_wordpress' );

/** Database username */
define( 'DB_USER', 'root' ); // ou 'eps_wp_user' si vous avez créé un utilisateur

/** Database password */
define( 'DB_PASSWORD', '' ); // Laissez vide si vous utilisez root, sinon votre mot de passe

/** Database hostname */
define( 'DB_HOST', 'localhost' );
```

### 3.3 Générer les clés de sécurité

1. Allez sur : https://api.wordpress.org/secret-key/1.1/salt/
2. Copiez tout le bloc de code généré
3. Remplacez les lignes dans `wp-config.php` qui commencent par `define( 'AUTH_KEY'` jusqu'à `define( 'NONCE_SALT'`

### 3.4 Configuration pour le développement local

Ajoutez ces lignes **AVANT** la ligne `/* That's all, stop editing! */` :

```php
// Configuration pour le développement local
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
define( 'SCRIPT_DEBUG', true );

// URL du site (pour le développement local)
define( 'WP_HOME', 'http://localhost/eps-website/eps-wp' );
define( 'WP_SITEURL', 'http://localhost/eps-website/eps-wp' );
```

---

## 🌐 Étape 4 : Configurer Apache (Virtual Host)

### 4.1 Créer un Virtual Host (Recommandé)

1. Ouvrez le fichier `C:\wamp64\bin\apache\apache[version]\conf\extra\httpd-vhosts.conf`
2. Ajoutez à la fin du fichier :

```apache
<VirtualHost *:80>
    ServerName eps-wp.local
    DocumentRoot "C:/wamp64/www/eps-website/eps-wp"
    <Directory "C:/wamp64/www/eps-website/eps-wp">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

3. Ouvrez le fichier `C:\Windows\System32\drivers\etc\hosts` en tant qu'administrateur
4. Ajoutez cette ligne à la fin :
   ```
   127.0.0.1    eps-wp.local
   ```
5. Redémarrez Apache dans WAMP

**Alternative** : Si vous ne voulez pas créer de Virtual Host, utilisez directement :
`http://localhost/eps-website/eps-wp`

---

## 🎯 Étape 5 : Installer WordPress

### 5.1 Lancer l'installation

1. Ouvrez votre navigateur
2. Allez sur : `http://eps-wp.local` (ou `http://localhost/eps-website/eps-wp`)
3. Vous devriez voir la page d'installation WordPress

### 5.2 Remplir le formulaire d'installation

1. **Langue** : Sélectionnez **Français**
2. Cliquez sur **"Continuer"**
3. Remplissez les informations :
   - **Titre du site** : `EPS - CMS`
   - **Nom d'utilisateur** : Choisissez un nom d'admin (ex: `admin`)
   - **Mot de passe** : Choisissez un mot de passe fort
   - **Votre adresse e-mail** : Votre email
   - **Visibilité pour les moteurs de recherche** : Décochez (pour le développement)
4. Cliquez sur **"Installer WordPress"**

### 5.3 Se connecter

1. Une fois l'installation terminée, cliquez sur **"Se connecter"**
2. Connectez-vous avec vos identifiants
3. Vous êtes maintenant dans le tableau de bord WordPress !

---

## 🔌 Étape 6 : Installer les plugins requis

### 6.1 Advanced Custom Fields (ACF)

1. Dans WordPress Admin, allez dans **Extensions → Ajouter**
2. Recherchez **"Advanced Custom Fields"**
3. Cliquez sur **"Installer"** puis **"Activer"**

**Note** : Si vous avez ACF PRO, téléchargez-le depuis le site officiel et uploadez-le manuellement.

### 6.2 Custom Post Type UI

1. Dans **Extensions → Ajouter**
2. Recherchez **"Custom Post Type UI"**
3. Installez et activez

### 6.3 ACF to REST API

1. Dans **Extensions → Ajouter**
2. Recherchez **"ACF to REST API"**
3. Installez et activez

### 6.4 WP REST API - Filter Fields (Optionnel)

1. Dans **Extensions → Ajouter**
2. Recherchez **"WP REST API - Filter Fields"**
3. Installez et activez (utile pour filtrer les champs de l'API)

---

## ⚙️ Étape 7 : Configurer les permaliens

1. Dans WordPress Admin, allez dans **Réglages → Permaliens**
2. Sélectionnez **"Nom de l'article"**
3. Cliquez sur **"Enregistrer les modifications"**

**Important** : Cela active les URLs propres et l'API REST fonctionne mieux.

---

## 🔗 Étape 8 : Configurer Next.js pour WordPress local

### 8.1 Mettre à jour .env.local

Ouvrez ou créez le fichier `.env.local` à la racine du projet et ajoutez :

```env
# WordPress Headless CMS (Local)
NEXT_PUBLIC_WORDPRESS_URL=http://eps-wp.local/wp-json/wp/v2
# ou si vous n'avez pas de Virtual Host :
# NEXT_PUBLIC_WORDPRESS_URL=http://localhost/eps-website/eps-wp/wp-json/wp/v2

# Temps de revalidation du cache (en secondes)
REVALIDATE_TIME=60
```

### 8.2 Tester la connexion

1. Redémarrez votre serveur Next.js :
   ```bash
   npm run dev
   ```

2. Testez l'API WordPress dans votre navigateur :
   ```
   http://eps-wp.local/wp-json/wp/v2
   ```
   Vous devriez voir une réponse JSON.

3. Testez depuis Next.js :
   ```
   http://localhost:3000
   ```

---

## ✅ Vérification finale

### Checklist

- [ ] WAMP est démarré et tous les services sont actifs
- [ ] Base de données `eps_wordpress` créée
- [ ] Fichier `wp-config.php` configuré correctement
- [ ] WordPress installé et accessible
- [ ] Plugins requis installés et activés
- [ ] Permaliens configurés
- [ ] `.env.local` configuré avec l'URL WordPress locale
- [ ] API REST WordPress accessible (`/wp-json/wp/v2`)

---

## 🐛 Problèmes courants et solutions

### Problème 1 : Erreur "Error establishing a database connection"

**Solutions** :
- Vérifiez que MySQL est actif dans WAMP
- Vérifiez les identifiants dans `wp-config.php`
- Vérifiez que la base de données `eps_wordpress` existe

### Problème 2 : Page blanche après installation

**Solutions** :
- Vérifiez les logs d'erreur PHP dans WAMP
- Vérifiez que `WP_DEBUG` est activé dans `wp-config.php`
- Vérifiez les permissions des fichiers

### Problème 3 : Erreur 404 sur les permaliens

**Solutions** :
- Vérifiez que le module `mod_rewrite` est activé dans Apache
- Vérifiez le fichier `.htaccess` dans `eps-wp`
- Vérifiez que `AllowOverride All` est configuré dans Apache

### Problème 4 : CORS errors depuis Next.js

**Solutions** :
- Installez le plugin "CORS Headers" dans WordPress
- Ou ajoutez ce code dans `functions.php` du thème actif :

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

### Problème 5 : Virtual Host ne fonctionne pas

**Solutions** :
- Vérifiez que le Virtual Host est activé dans `httpd.conf`
- Vérifiez que le fichier `hosts` a été modifié correctement
- Redémarrez Apache après les modifications
- Utilisez l'URL directe : `http://localhost/eps-website/eps-wp`

---

## 📚 Prochaines étapes

Une fois WordPress installé et configuré :

1. **Suivez le guide de configuration WordPress** : `GUIDE_CONFIGURATION_WORDPRESS.md`
2. **Créez les Custom Post Types** nécessaires
3. **Configurez les champs ACF** pour chaque type de contenu
4. **Testez l'intégration** avec Next.js

---

## 🔒 Sécurité pour la production

**⚠️ IMPORTANT** : Cette configuration est pour le **développement local uniquement**.

Pour la production :
- Changez `WP_DEBUG` à `false`
- Utilisez des identifiants de base de données sécurisés
- Configurez HTTPS
- Limitez l'accès à `/wp-admin`
- Installez un plugin de sécurité (Wordfence, etc.)

---

**Besoin d'aide ?** Consultez les autres guides :
- `GUIDE_CONFIGURATION_WORDPRESS.md` - Configuration des Custom Post Types
- `WORDPRESS_SETUP.md` - Guide complet WordPress Headless
- `GUIDE_WORDPRESS_RAPIDE.md` - Guide rapide pour ajouter du contenu

