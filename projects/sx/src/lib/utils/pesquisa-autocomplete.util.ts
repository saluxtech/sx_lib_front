
export function pesquisaSelectteUtil(pesquisa: string, lista: any[], atributo?: string): string[] {
  let listaFiltrada = lista;
  if (pesquisa) {
    listaFiltrada = lista.filter(item => {
      if (atributo) {
        return item[atributo].toUpperCase().includes(pesquisa.toUpperCase());
      } else {
        return item.toUpperCase().includes(pesquisa.toUpperCase());
      }
    });
  }
  if (atributo) {
    return listaFiltrada.map(item => item[atributo]);
  } else {
    return listaFiltrada.map(item => item);
  }
}

export function pesquisaAutocompleteUtil(lista: any[], atributo: string): string[] {  
  return lista.map(item => {
    return item[atributo]
  });
}

export function pesquisaAutoCompleteEFiltro(lista: any[], atributo: string, pesquisa: string): string[] {
  const valoresFiltrados = lista.filter(item => {
    const valorAtributo = item[atributo].toUpperCase();
    const pesquisaFormatada = pesquisa.toUpperCase();
    return valorAtributo.includes(pesquisaFormatada);
  });
  return valoresFiltrados.map(item => item[atributo]);
}

export function pesquisaAutoCompleteTagEFiltro(lista: {Codigo:number, Nome:string}[], atributo: string, pesquisa: string): {Codigo:number, Nome:string}[] {
  const valoresFiltrados = lista.filter(item => {
    const valorAtributo = item[atributo].toUpperCase();
    const pesquisaFormatada = pesquisa.toUpperCase();
    return valorAtributo.includes(pesquisaFormatada);
  });
  return valoresFiltrados;
}


export function pegarValorItemSelecionado() {

}
