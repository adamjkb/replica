export default {
    config: {
        backend: {
            name: 'git-gateway',
            branch:'main'
        },
        slug: {
            clean_accents: true
        },
        load_config_file: false,
        local_backend: true,
        site_url: 'http://localhost:3000',
        display_url: 'http://localhost:3000',
        media_folder: '/example/assets/images/',
        public_folder: '/',
        label: 'Pages',
        name: 'pages',
        description: '',
        delete: false,
        editor:{ preview: false },
        collections: [
            {

                label: 'Pages',
                name: 'pages',
                description: '',
                delete: false,
                editor:{ preview: false },
                files: [
                    {
                        label           :'Home',
                        name            :'home',
                        delete          :false,
                        file            :'example/data/home.json',
                        extension       :'json',
                        fields: [
                            {
                                label: 'Title',
                                name: 'title',
                                widget: 'string',
                            },
                            // {
                            //     label: 'Select',
                            //     name: 'select',
                            //     widget: 'select',
                            //     options: [
                            //         { label: 'Option 1', value: 'opt-1' },
                            //         { label: 'Option 2', value: 'opt-2' },
                            //         { label: 'Option 3', value: 'opt-3' },
                            //         { label: 'Option 4', value: 'opt-4' },
                            //     ]
                            // },
                            {
                                label: 'Select but external',
                                name: 'select-external',
                                widget: 'select-ext',
                                url: 'https://graphql.myshopify.com/api/graphql',
                                // https://neo-type-foundry.myshopify.com/api/2021-04/graphql.json
                                value_field: 'node.value',
                                display_field: 'node.label',
                                data_path: 'data.products.edges', // path=a.0.b.c
                                refetch_url: true,
                                grouped_options: {
                                    data_path: 'node.options.edges', // data position related to the parent object
                                    value_field: 'node.id',
                                    display_field: 'node.title',
                                },
                                cache_options: true, // react-select option, caches already fetched result to a specific term
                                fetch_options: {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38'
                                    },
                                    method: 'POST',
                                    body: '{"query": "query allProducts{ products(first:10) { edges { node { label: title value: id options: variants(first:3) { edges { node { id title } } } } } } }"}',
                                    // @{type} function
                                    // {params}
                                    /**
                                     *  A function creating the fetch params object
                                     *  @param {Object} opts - Object composed of default or set values
                                     *  @param {string} opts.term - Search term entered to filter results from input field
                                     *  @param {string} opts.url - URL
                                     *  @param {string} opts.headers - Headers | default: {}
                                     *  @param {string} opts.body - Body
                                     *  @param {string} opts.method - Method | default: 'GET'
                                     *  @returns {Object} object of url and options
                                     */
                                    // params_function: ({ term, url, ...rest }) =>
                                    //     ({
                                    //         url,
                                    //         options: {
                                    //             ...rest,
                                    //             body: JSON.stringify({
                                    //                 query: `
                                    //                     query allProducts {
                                    //                         products(first: 100) {
                                    //                         edges {
                                    //                             node {
                                    //                                 label: title
                                    //                                 value: id
                                    //                                 options: variants(first: 20) {
                                    //                                     edges {
                                    //                                         node {
                                    //                                             id
                                    //                                             title
                                    //                                         }
                                    //                                     }
                                    //                                 }
                                    //                             }
                                    //                         }
                                    //                         }
                                    //                     }
                                    //                 `,
                                    //                 variables: {}
                                    //             })
                                    //         }
                                    //     }) // returns a fetch object
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
}
