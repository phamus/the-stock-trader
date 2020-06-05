<template>
  <div class="jumbotron">
    <h1 class="display-4">Trade or View your porfolio</h1>
    <p class="lead">You may Save & Load your Data.</p>
    <p class="lead">Click on 'End Day' to begin a New Day</p>
    <hr class="my-4" />
    <p>Your Funds: {{funds | currency}}</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>