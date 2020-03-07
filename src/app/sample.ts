import { LayoutAlignDirective } from '@angular/flex-layout';

export function sample() {
    const schema = {
        title: "Cesta de Compras",
        type: "object",
        required: [
            "name"
        ],
        properties: {
            id: {
                title: "Código",
                type: "hidden"
            },
            name: {
                title: "Comprador",
                type: "string"
            },
            nickname: {
                title: "Apelido",
                type: "string"
            },
            orders:
            {
                type: "array",
                title: "Pedidos",
                maxItems: 10,
                items: {
                    type: "object",
                    properties: {
                        product: {
                            title: "Produtos",
                            type: "string"
                        },
                        amount: {
                            title: "Quantidade",
                            type: "number"
                        },
                        price: {
                            title: "Preço",
                            type: "number"
                        }

                    }
                }
            }
        }
    };
    const data = {
    };
    const options = {
        loadExternalAssets: true,
    };
    const widgets = {};
    const layout = ["*", 
        { type: "submit", title: "Salvar" },
        { type: "array",  }
    ];

    return {
        schema: schema,
        layout: layout,
        data: data,
        options: options,
        widgets: widgets,
        language: 'ptbr'
    }

};