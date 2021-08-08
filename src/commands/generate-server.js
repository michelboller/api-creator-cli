module.exports = {
    name: 'generate-server',
    description: 'Cria o arquivo server.js de uma API dentro de api/src',
    run: async toolbox => {
        const {
            template,
            print: {
                success
            }
        } = toolbox
        await template.generate({
            template: 'server.js.ejs',
            target: 'api/src/server.js',
        })

        success('Server da API criado com sucesso!')
    }
}