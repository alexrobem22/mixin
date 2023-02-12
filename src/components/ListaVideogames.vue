<template>
    <div class="div">
        <h3>{{titulo}}</h3>

        <label for="">
            <input type="text" name="" id="" placeholder="Nome da pessoa" v-model="item">
            <button type="button" class="form-control" @click="adicionarItem">Adicionar</button>
        </label>
        
        <ul>
            <li v-for="(item,index) in itens" :key="index">{{item}} <button type="button" @click="removerItem(index)"><i class="bi bi-trash"></i></button></li>
        </ul>
    </div>
</template>

<script>
import ListaMixin from './mixins/ListaMixin';
import RemoverItemListaMixin from './mixins/RemoverItemListaMixin'

export default{
    name: 'ListaVideogames',
    data:() => ({
     titulo: 'Lista Videogames'   
    }),
    mixins: [ListaMixin, RemoverItemListaMixin]
}
</script>

<style scoped>
.form-control{
    width: 100px !important;
}
.div label{
    display: flex;
    align-items: center;
}
</style>