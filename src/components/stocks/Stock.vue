<template>
  <div class="col-6 col-sm-6 col-md-4 mt-3">
    <div class="card border-success">
      <div class="card-header bg-success text-white">
        <h5 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency}})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 "
          >Buy</button>
        </div>
      </div>
      <div class="card-footer">
        <p
          :class="{danger: insufficientFunds}"
        >{{insufficientFunds ? 'insufficient funds': price | currency}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },

    price() {
      let value = this.stock.price * parseInt(this.quantity);
      return Number.isInteger(value) ? value : 0;
    },
    insufficientFunds() {
      return this.stock.price * parseInt(this.quantity) > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      console.log(order);
      this.$store.dispatch("buyStock", order);
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


