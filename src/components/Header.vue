<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/portfolio"
          activeClass="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          to="/stocks"
          activeClass="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-text navbar-right"
        >Funds: {{ funds | currency }}</strong
      >
      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li
          class="dropdown"
          :class="{ show: isDropdownOpen }"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Save & Load</a
          >
          <div
            class="dropdown-menu"
            :class="{ show: isDropdownOpen }"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stocksPortfolio: this.$store.getters.stocksPortfolio,
        stocks: this.$store.getters.stocks,
      };
      this.$http.put("data.json", data);
    },

    loadData() {
      this.fetchData();
    },
  },
};
</script>
