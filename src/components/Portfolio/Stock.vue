<template>
  <div class="col-6 col-sm-6 col-md-4 mt-3">
    <div class="card border-info">
      <div class="card-header bg-info text-white">
        <h5 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} || Quantity: {{ stock.quantity }})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
          >Sell</button>
        </div>
      </div>

      <div class="card-footer">
        <p
          :class="{danger: insufficientQuantity}"
        >{{insufficientQuantity ? 'insufficient Quantity': price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
    price() {
      let value = this.stock.price * parseInt(this.stock.quantity);
      return Number.isInteger(value) ? value : 0;
    }
  },
  methods: {
    ...mapActions({ placeSellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.stock.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
<style scoped>
.danger {
  color: red !important;
}
</style>

