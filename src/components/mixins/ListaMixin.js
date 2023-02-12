export default{

    data: () => ({
        itens:[],
        item: ''
    }),
    methods:{
        adicionarItem(){
            console.log('chegamos ate aqui:', this.item)
            this.itens.push(this.item)
            this.item = ''
        }
    }
}