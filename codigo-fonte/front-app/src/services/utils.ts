export const optionsFiller = (array: any, name: string, options: any) =>
  array.map((x: any) => {
    if (x.name === name) {
      x = {
        ...x,
        options
      }
    }
    return x
  })


export const handleFiller = (array: any, field: any, value: any) =>
  array.map((x: any) => {
    if (x.id === field.id) {
      x = {
        ...field,
        error: false,
        value
      }
    }
    return x
  })

export const inputValidation = (fields: any) =>
  fields.map((field: any) => {
    field.error = field.validation ? field.validation(field.value) : false
    return field
  })

  export const clinicFooterLinks = [{
    id: 1,
    link: "Buscar Vagas",
    path: "/encontaremprego"
  },
  {
    id: 2,
    link: "Postar Vagas",
    path: "/upload-job"
  },{
    id: 3,
    link: "Vagas encerradas",
    path: "/"
  }]

  export const professionalFooterLinks = [{
    id: 1,
    link: "Buscar Vagas",
    path: "/"
  },
]