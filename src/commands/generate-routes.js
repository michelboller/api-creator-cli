module.exports = {
    name: 'generate-routes',
    description: 'Cria ao aquivo routes.js de uma API dentro de api/src',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: {
                success,
                error
            }
        } = toolbox

        if (!parameters.first) {
            error('Sua rota deve conter um nome')
            return
        }

        await template.generate({
            template: 'routes.js.ejs',
            target: 'api/src/routes.js',
            props: {
                name: parameters.first
            }
        })

        success(`A rota ${parameters.first} foi criada com sucesso!`)
    }
}