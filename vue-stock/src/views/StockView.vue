<script>    
import axios from 'axios';
import { ref, onMounted} from 'vue';

export default {
  name: 'StockView',
  setup() {
    
    const stocks = ref([]);

    const listarStocks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/acciones');
        stocks.value = response.data;
        console.log('Acciones obtenidas:', stocks.value);
      } catch (error) {
        console.error('Error al leer las acciones desde el endpoint:', error);
      }
    };

    onMounted(() => {
      listarStocks();
    });

    return {
      stocks,
      listarStocks
    };
  },
};
</script>

<template>  
    <main>
        <table> 
            <thead>
                <tr>
                    <th>id</th>
                    <th>símbolo</th>
                    <th>Valor anterior</th>
                    <th>Valor actual</th>
                    <th>Empresa</th>
                    <th>accion</th>
                    <th>brokerage</th>
                    <th>Recomendacion Anterior</th>
                    <th>Recomedacion Actual</th>
                    <th>Fecha</th>
                    <th>Detalles</th>    
                </tr>
            </thead>
            <tbody>
                <tr v-for="stocks in stocks" :key="stocks.id">
                    <td>{{ stocks.id }}</td>
                    <td>{{ stocks.ticker }}</td>
                    <td>{{ stocks.target_from }}</td>
                    <td>{{ stocks.target_to }}</td>
                    <td>{{ stocks.company }}</td>
                    <td>{{ stocks.action }}</td>
                    <td>{{ stocks.brokerage }}</td>
                    <td>{{ stocks.rating_from }}</td>
                    <td>{{ stocks.rating_to }}</td>
                    <td>{{ stocks.time }}</td>
                    <td><RouterLink :to="`/detalles/${stocks.id}`">Ver Detalles</RouterLink></td>

                
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style>

</style>