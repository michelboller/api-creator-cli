module.exports = {
    name: 'generate-route',
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

        if (!parameters.first && !parameters.second) {
            error('Sua rota deve conter um nome e um verbo http')
            return
        }

        await template.generate({
            template: 'routes.js.ejs',
            target: `api/src/router/route.${parameters.second}.js`,
            props: {
                verb: parameters.first,
                name: parameters.second
            }
        })

        success(`[${(parameters.first).toUpperCase()}] A rota ${parameters.second} foi criada com sucesso!`)
    }
}