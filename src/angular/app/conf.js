marriageMapApp.config(['uiGmapGoogleMapApiProvider',function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAPa8bSkKaRUKfLaFEfTvPud6wIe1i4dwA',
        v: '3.20',
        libraries: 'weather,geometry,visualization,places'
    });
}])