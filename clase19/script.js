const personas = [
    {
        id:1,
        edad: 34,
        nombre: "carlos",
        apellido: "lopez",
        direccion:{
            calle: "siempre alto",
            altura: 1234
        },
        salario: 55000
    },
    {
        id:2,
        edad: 26,
        nombre: "alejandro",
        apellido: "Balcarve",
        direccion:{
            calle: "siempre viva",
            altura: 123
        },
        salario: 50000
    }
];

const filtrado = personas.filter(x => x.salario> 1);

console.log(filtrado);


const mapeo = personas.map(x=> x.id);
   
console.log(mapeo);


const mapeados = personas.map( (x)=>{
    const nuevo = {
        id: x.id,
        salario: x.salario
    }
    return nuevo
}
);

console.log(mapeados)

const lista =[
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
},
{
    id: 8,
    id: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
},
{
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
},
{
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
   avatar: "https://reqres.in/img/faces/10-image.jpg"
},
{
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
},
{
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
}
]

const filtrados = lista.filter(x => x.id > 7)

const mapeon = filtrados.map((aux) => {
    const obj = {
     Id: aux.id,
     Email: aux.email,
     Nombre: aux.first_name,
     
    }   
    return obj;
});

console.log('filtrados: +', filtrados);
console.log('mapeados: + ', mapeon);


//developers.mercadolibre

mercadolibre = {
    "id": "MLA5725",
    "name": "Accesorios para Vehículos",
    "picture": "http://resources.mlstatic.com/category/images/6fc20d84-2ce6-44ee-8e7e-e5479a78eab0.png",
    "permalink": "https://www.mercadolibre.com.ar/c/accesorios-para-vehiculos",
    "total_items_in_this_category": 9975492,
    "path_from_root": [
        {
            "id": "MLA5725",
            "name": "Accesorios para Vehículos"
        }
    ],
    "children_categories": [
        {
            "id": "MLA4711",
            "name": "Acc. para Motos y Cuatriciclos",
            "total_items_in_this_category": 130703
        },
        {
            "id": "MLA417044",
            "name": "Acc. y Repuestos Náuticos",
            "total_items_in_this_category": 25390
        },
        {
            "id": "MLA6520",
            "name": "Accesorios de Auto y Camioneta",
            "total_items_in_this_category": 278415
        },
        {
            "id": "MLA86360",
            "name": "Accesorios para Camiones",
            "total_items_in_this_category": 16235
        },
        {
            "id": "MLA3381",
            "name": "Audio para Vehículos",
            "total_items_in_this_category": 42554
        },
        {
            "id": "MLA455216",
            "name": "Dispositivos para TelePASE",
            "total_items_in_this_category": 0
        },
        {
            "id": "MLA4610",
            "name": "GNC",
            "total_items_in_this_category": 3001
        },
        {
            "id": "MLA2227",
            "name": "Herramientas",
            "total_items_in_this_category": 45217
        },
        {
            "id": "MLA86838",
            "name": "Limpieza de Vehículos",
            "total_items_in_this_category": 41662
        },
        {
            "id": "MLA6537",
            "name": "Llantas",
            "total_items_in_this_category": 26879
        },
        {
            "id": "MLA8531",
            "name": "Navegadores GPS",
            "total_items_in_this_category": 4677
        },
        {
            "id": "MLA400928",
            "name": "Neumáticos",
            "total_items_in_this_category": 101691
        },
        {
            "id": "MLA402999",
            "name": "Performance",
            "total_items_in_this_category": 14438
        },
        {
            "id": "MLA1747",
            "name": "Repuestos Autos y Camionetas",
            "total_items_in_this_category": 8357634
        },
        {
            "id": "MLA419936",
            "name": "Repuestos de Línea Pesada",
            "total_items_in_this_category": 47335
        },
        {
            "id": "MLA1771",
            "name": "Repuestos Motos y Cuatriciclos",
            "total_items_in_this_category": 606564
        },
        {
            "id": "MLA86080",
            "name": "Seguridad Vehicular",
            "total_items_in_this_category": 48531
        },
        {
            "id": "MLA377674",
            "name": "Servicio Programado",
            "total_items_in_this_category": 14188
        },
        {
            "id": "MLA4589",
            "name": "Tuning",
            "total_items_in_this_category": 95490
        },
        {
            "id": "MLA6177",
            "name": "Otros",
            "total_items_in_this_category": 74615
        }
    ],
    "attribute_types": "attributes",
    "settings": {
        "adult_content": false,
        "buying_allowed": true,
        "buying_modes": [
            "auction",
            "buy_it_now"
        ],
        "catalog_domain": "MLA-VEHICLE_ACCESSORIES",
        "coverage_areas": "not_allowed",
        "currencies": [
            "ARS"
        ],
        "fragile": false,
        "immediate_payment": "required",
        "item_conditions": [
            "used",
            "not_specified",
            "new"
        ],
        "items_reviews_allowed": false,
        "listing_allowed": false,
        "max_description_length": 50000,
        "max_pictures_per_item": 12,
        "max_pictures_per_item_var": 10,
        "max_sub_title_length": 70,
        "max_title_length": 60,
        "maximum_price": null,
        "maximum_price_currency": "ARS",
        "minimum_price": 33,
        "minimum_price_currency": "ARS",
        "mirror_category": null,
        "mirror_master_category": null,
        "mirror_slave_categories": [],
        "price": "required",
        "reservation_allowed": "not_allowed",
        "restrictions": [],
        "rounded_address": false,
        "seller_contact": "not_allowed",
        "shipping_profile": "optional",
        "show_contact_information": false,
        "simple_shipping": "optional",
        "stock": "required",
        "sub_vertical": "vehicle_parts_accessories",
        "subscribable": false,
        "tags": [],
        "vertical": "vehicle_parts_accessories",
        "vip_subdomain": "articulo",
        "buyer_protection_programs": [
            "delivered",
            "undelivered"
        ],
        "status": "enabled"
    },
    "channels_settings": [],
    "meta_categ_id": null,
    "attributable": false,
    "date_created": "2018-04-25T08:12:56.000Z"
}