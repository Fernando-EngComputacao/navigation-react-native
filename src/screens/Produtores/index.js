import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './components/Produtor';
import Topo from './components/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [exibirMensagem, setExibirMensagem] = useState(false);

  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores, mensagemCompra } = useTextos();

  const nomeCompra = route.params?.compra.nome;
  const timeStampCompra = route.params?.compra.timestamp;
  const mensagemCompraCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibirMensagem(!!nomeCompra);
    let timeOut = (nomeCompra ? setTimeout(() => { setExibirMensagem(false)},3000) : null);
    return () => clearTimeout(timeOut);
  },[timeStampCompra]);

  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      {exibirMensagem && <Text style={estilos.compraRelizada}> { mensagemCompraCompleta } </Text>}
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item}
        aoPressionar={() => {
            navigation.navigate('Produtor', item)
          }
        } />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compraRelizada: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 15,
    lineHeight: 25,
    textAlign:'justify',
  }
})
