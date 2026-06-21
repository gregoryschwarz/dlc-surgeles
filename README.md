# DLC Surgelés

PWA de suivi des dates limites de consommation (DLC) pour les produits surgelés — usage interne, synchronisée entre appareils via Google Sheets.

## App en ligne

https://gregoryschwarz.github.io/dlc-surgeles/DLC_Surgeles.html

## Fonctionnalités

- Suivi des DLC avec statuts colorés (expiré / ce mois / prochain / ok)
- Installable comme application (PWA, Android + PC)
- Synchronisation multi-appareils via Google Sheets (Google Apps Script)
- Catégories de produits, tri, historique des actions, export CSV/PDF
- Alerte email quotidienne pour les produits expirés ou proches de l'être

## Configuration

L'URL du script et la clé d'accès se configurent directement dans l'app (menu ⋯ → Configurer Google Sheets). Aucune donnée sensible n'est stockée dans ce dépôt.

## Stack

HTML/CSS/JS (PWA, aucune dépendance), Google Apps Script + Google Sheets comme backend.
