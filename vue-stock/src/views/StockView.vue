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
                    <td class="aliniar">{{ stocks.id }}</td>
                    <td>{{ stocks.ticker }}</td>
                    <td class="aliniar">{{ stocks.target_from }}</td>
                    <td class="aliniar">{{ stocks.target_to }}</td>
                    <td>{{ stocks.company }}</td>
                    <td>{{ stocks.action }}</td>
                    <td>{{ stocks.brokerage }}</td>
                    <td>{{ stocks.rating_from }}</td>
                    <td>{{ stocks.rating_to }}</td>
                    <td>{{ stocks.time }}</td>
                    <div class="boton">
                      <RouterLink class="VerDetalles" :to ="{path:'detalles/'+stocks.id}">Ver Detalles</RouterLink>
                    </div>

                    
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped>
table {
  width: 90%;    
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin: 10px auto;
}
th, td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #e2e2e2;
}
.aliniar {
  text-align: center;
}
.boton {
  display: flex;
  justify-self: center;
  border: solid 1px #000;
}
.VerDetalles {
  display: flex;
  text-align: center;
  text-decoration: none;
  color: #000;
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
  transition: color 0.5s ease-in-out;
  margin: 5px;
}
.VerDetalles:hover {
  background-color: rgba(0, 0, 0, .1);
  color: #5c5b5b;
}

</style>