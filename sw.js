self.addEventListener('fetch', event => {

    const offlineResp = new Response(`
        Bienvenido a mi pagina web
        
        ocupas internet
    `);

    const resp = fetch(event.request).catch( () => offlineResp);

    event.respondWith( resp );

});