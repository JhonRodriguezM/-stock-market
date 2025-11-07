<script>  
import { ref, onMounted} from 'vue';
import axios from 'axios';  
import { useRoute } from 'vue-router';
export default {
  setup(){

        const route = useRoute();

        const Detalles = ref({
            id:null,
            ticker: '',
            target_from: '',
            target_to: '',
            company: '',
            action: '',
            brokerage: '',
            rating_from: '',
            rating_to: '',
            time: ''
    }); 

    const DetallesStock = async () => {
       
    };

    const cargarDetalles = async () => {
      const StockId = useRoute().params.id;
        try {
            const response = await axios.get(`http://localhost:3000/acciones/${StockId}`);
            Detalles.value = response.data;
          console.log('Detalles obtenidos:', Detalles.value);
        } catch (error) {
          console.error('Error al leer los detalles desde el endpoint:', error);
        }
    };

    onMounted(() => {   
      cargarDetalles();
    });

    return {
      Detalles,
      cargarDetalles,
      DetallesStock
    };
  }
};
</script>

<template>  
    <main>
        <form @submit.prevent="DetallesStock">
            <div>
                <div>
                    <label for="titulo">ticker</label>
                    <input name="titulo" v-model="Detalles.ticker" type="text"required placeholder="ticker">
                </div>
                <div>
                    <label for="Valor anterior">target_from</label>
                    <input name=""v-model="Detalles.target_from"type="text"required placeholder="target_from">
                </div>
                <div>
                    <label for="Valor actual">target_to</label>
                    <input name=""v-model="Detalles.target_to"type="text"required placeholder="target_to">
                </div>
                <div>
                    <label for="Compañia">company</label>
                    <input name=""v-model="Detalles.company"type="text"required placeholder="company">
                </div>
                <div>
                    <label for="action">action</label>
                    <input name=""v-model="Detalles.action"type="text"required placeholder="action">
                </div>
                <div>
                    <label for="brokerage">brokerage</label>
                    <input name=""v-model="Detalles.brokerage"type="text"required placeholder="brokerage">
                </div>
                <div>
                    <label for="Recomendacion anterior">rating_from</label>
                    <input name=""v-model="Detalles.rating_from"type="text"required placeholder="rating_from">
                </div>
                <div>
                    <label for="Recomendacion actual">rating_to</label>
                    <input name=""v-model="Detalles.rating_to"type="text"required placeholder="rating_to">
                </div>
                <div>
                    <label for="Fecha">time</label>
                    <input name=""v-model="Detalles.time"type="text"required placeholder="time">
                </div>
            </div>
        </form>
    </main>
</template>

<style>

</style>