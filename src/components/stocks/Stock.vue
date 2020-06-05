<template>
  <div class="col-6 col-sm-6 col-md-4 mt-3">
    <div class="card border-success">
      <div class="card-header bg-success text-white">
        <h5 class="card-title">
          {{ stock.name }} <small>(Price: {{ stock.price }})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>
