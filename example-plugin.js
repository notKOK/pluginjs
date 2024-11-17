export default {
    id: 'example',
    name: 'Example Plugin',
    init: async (app) => {
        app.showNotification('Example plugin loaded!');
    },
    unload: async () => {
        console.log('Example plugin unloaded');
    },
};