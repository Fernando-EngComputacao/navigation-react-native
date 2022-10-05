import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import useTextos from '../../../../hooks/useTextos';

import VoltarSVG from '../../../../assets/voltar.svg';
import sucesso from '../../../../assets/sucesso.png';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Resumo() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    nome,
    mensagemCompra,
    topoCompra,
    tituloCompra,
    botaoHomeCompra,
    botaoProdutorCompra
  } = useTextos();

  const nomeDaCesta = route.params?.compra.nome;
  const mensagemCompraFinal = mensagemCompra?.replace('$NOME', nomeDaCesta);
  const tituloCompraFinal = tituloCompra + nome + "!";


  return <ScrollView style={estilos.tela}>
    <View style={estilos.topo}>
      <TouchableOpacity
        style={estilos.topoVoltar}
        onPress={() => { }}
      >
        <VoltarSVG />
      </TouchableOpacity>

      <Text style={estilos.topoTexto}>{topoCompra}</Text>
    </View>

    <View style={estilos.conteudo}>
      <Image source={sucesso} style={estilos.sucesso} />

      <View style={estilos.textos}>
        <Text style={estilos.titulo}>{tituloCompraFinal}</Text>
        <Text style={estilos.mensagem}>
          {mensagemCompraFinal}
        </Text>

        <View style={estilos.viewTouchableOpacity}>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => { navigation.navigate('HomeScreen') }}>
            <Text style={estilos.textoBotao}>{botaoHomeCompra}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[estilos.botao, estilos.botaoProdutor]}
            onPress={() => { navigation.navigate('HomeScreen') }}>
            <Text style={[estilos.textoBotao, estilos.textoBotaoProdutor]}>
              {botaoProdutorCompra}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topo: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topoTexto: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topoVoltar: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  conteudo: {
    zIndex: 0,
    backgroundColor: '#EAF5F3',
  },
  sucesso: {
    width: "100%",
    height: undefined,
    aspectRatio: 360 / 351,
  },
  textos: {
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    lineHeight: 42,
    fontWeight: 'bold',
    color: "#464646",
    marginVertical: 8,
  },
  mensagem: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 12,
    width: 160,
    marginBottom: 12,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    marginHorizontal: 12,
  },
  botaoProdutor: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  textoBotaoProdutor: {
    color: "#464646",
  },
  viewTouchableOpacity: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});