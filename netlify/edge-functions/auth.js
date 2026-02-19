export default async (request, context) => {
  // === DÉFINISSEZ VOS IDENTIFIANTS ICI ===
  const identifiant = "rebalance";
  const motDePasse = "humanity";
  // ========================================

  const authHeader = request.headers.get('authorization');
  
  // Encodage standard pour l'authentification web
  const expectedAuth = `Basic ${btoa(`${identifiant}:${motDePasse}`)}`;

  if (authHeader !== expectedAuth) {
    return new Response('Accès restreint. Veuillez vous identifier.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Dashboard Stratégique Confidentiel"',
      },
    });
  }

  // Si le mot de passe est bon, on laisse passer
  return context.next();
};

// === C'EST ICI QUE LA MAGIE OPÈRE ===
// Cette petite configuration dit à Netlify de s'activer partout, 
// sans avoir besoin du fichier netlify.toml !
export const config = {
  path: "/*"
};