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

    const listarDetalles = async () => {
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
      listarDetalles();
    });

    return {
      Detalles,
      listarDetalles,
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

<style scoped>
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 20px;
  border: solid 1px #000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
label   {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1rem;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
    font-size: 1rem;    
}
input:focus {
  outline: none;
}       
</style>