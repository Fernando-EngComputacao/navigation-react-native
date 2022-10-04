import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import useTextos from '../../hooks/useTextos';
import Cesta from "./components/Cesta";
import Topo from '../../components/Topo';
import imgTopo from '../../assets/produtores/topo.png';

export default function Produtor() {
    const route = useRoute();
    const {tituloProdutor, tituloCestas} = useTextos();
    const {nome, imagem, cestas} = route.params;

    const TopoLista = () => {
        return <>
            <Topo titulo={tituloProdutor} imagem={imgTopo} nome={nome} altura={150}/>
            <View style={styles.conteudo}>
                <View style={styles.logo}>
                    <Image source={imagem} style={styles.produtorImage}/>
                    <Text style={styles.produtor}>{ nome }</Text>
                </View>
                <Text style={styles.cestas}>{ tituloCestas }</Text>
            </View>
        </>
    }

    return <FlatList 
        ListHeaderComponent={TopoLista}
        data={cestas}
        renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
        style={styles.lista}
    />
}

const styles = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});