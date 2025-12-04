# 📧 Guide de Configuration Email pour les Candidatures

Ce guide vous explique comment configurer l'envoi d'emails pour recevoir les candidatures avec les CVs.

## 🔧 Configuration

### 1. Variables d'environnement

Ajoutez ces variables dans votre fichier `.env.local` :

```env
# Configuration SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-application
EMAIL_SERVICE_FROM=noreply@eps.mr

# Email de l'administrateur (pour recevoir les candidatures)
ADMIN_EMAIL=admin@eps.mr
```

### 2. Configuration Gmail

Si vous utilisez Gmail, vous devez :

#### Option A : Mot de passe d'application (Recommandé)

1. Activez la **validation en deux étapes** sur votre compte Google
2. Allez dans [Gestion de votre compte Google](https://myaccount.google.com/)
3. Sélectionnez **Sécurité** → **Validation en deux étapes**
4. En bas de la page, cliquez sur **Mots de passe des applications**
5. Créez un nouveau mot de passe d'application pour "Mail"
6. Utilisez ce mot de passe dans `SMTP_PASSWORD`

#### Option B : OAuth2 (Avancé)

Pour une sécurité maximale, vous pouvez utiliser OAuth2. Consultez la [documentation nodemailer](https://nodemailer.com/using-gmail/).

### 3. Autres fournisseurs SMTP

#### Outlook / Office 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=votre-email@outlook.com
SMTP_PASSWORD=votre-mot-de-passe
```

#### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=votre-email@yahoo.com
SMTP_PASSWORD=votre-mot-de-passe
```

#### Serveur SMTP personnalisé
```env
SMTP_HOST=smtp.votre-domaine.com
SMTP_PORT=587
SMTP_USER=contact@votre-domaine.com
SMTP_PASSWORD=votre-mot-de-passe
```

## 📋 Format de l'email reçu

L'administrateur recevra un email HTML avec :

- **Sujet** : `Nouvelle candidature : [Poste] - [Prénom] [Nom]`
- **Contenu** :
  - Informations du candidat (nom, email, téléphone, adresse)
  - Expérience professionnelle
  - Lettre de motivation
  - **CV en pièce jointe**

## ✅ Test de la configuration

Pour tester si l'email fonctionne :

1. Remplissez le formulaire de candidature sur le site
2. Soumettez la candidature
3. Vérifiez votre boîte email (et les spams)

Si l'email n'arrive pas :

1. Vérifiez les logs du serveur pour les erreurs
2. Vérifiez que les variables d'environnement sont correctes
3. Vérifiez que le port SMTP n'est pas bloqué par le firewall
4. Pour Gmail, assurez-vous d'utiliser un mot de passe d'application

## 🔒 Sécurité

### Bonnes pratiques

1. **Ne commitez JAMAIS** le fichier `.env.local` dans Git
2. Utilisez des **mots de passe d'application** plutôt que votre mot de passe principal
3. Limitez les permissions du compte email utilisé
4. Utilisez HTTPS en production

### Variables sensibles

Ces variables ne doivent **JAMAIS** être dans le code source :
- `SMTP_PASSWORD`
- `SMTP_USER` (si sensible)
- `ADMIN_EMAIL`

## 🐛 Dépannage

### Erreur "Invalid login"

- Vérifiez que `SMTP_USER` et `SMTP_PASSWORD` sont corrects
- Pour Gmail, utilisez un mot de passe d'application

### Erreur "Connection timeout"

- Vérifiez que le port SMTP n'est pas bloqué
- Vérifiez que `SMTP_HOST` est correct
- Essayez le port 465 avec `secure: true`

### Emails dans les spams

- Configurez SPF, DKIM et DMARC pour votre domaine
- Utilisez un email professionnel plutôt que Gmail personnel
- Ajoutez l'email de l'expéditeur dans les contacts

### Erreur "ECONNREFUSED"

- Vérifiez que le serveur SMTP est accessible
- Vérifiez le port (587 pour TLS, 465 pour SSL)
- Vérifiez les paramètres de firewall

## 📝 Exemple de configuration complète

```env
# .env.local

# Site
NEXT_PUBLIC_SITE_NAME="EPS - El Baraka Prestations de Service"
NEXT_PUBLIC_EMAIL=contact@eps.mr

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@eps.mr
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
EMAIL_SERVICE_FROM=noreply@eps.mr

# Admin Email
ADMIN_EMAIL=rh@eps.mr
```

## 🔄 Alternative : Services d'email tiers

Si vous préférez utiliser un service d'email tiers :

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=votre-api-key-sendgrid
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@votre-domaine.mailgun.org
SMTP_PASSWORD=votre-api-key-mailgun
```

### AWS SES
```env
SMTP_HOST=email-smtp.region.amazonaws.com
SMTP_PORT=587
SMTP_USER=votre-access-key
SMTP_PASSWORD=votre-secret-key
```

## 📞 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs du serveur Next.js
2. Testez la configuration SMTP avec un client email externe
3. Consultez la documentation de votre fournisseur SMTP

---

**Note** : Les candidatures sont également sauvegardées dans `data/applications.json` et les CVs dans `public/uploads/cvs/` comme backup, même si l'email échoue.

