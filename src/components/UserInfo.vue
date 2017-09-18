<template>
  <div class="user-info">
    <md-layout md-align="end" md-gutter="16">
        <md-layout md-flex="25">
            <md-card>
                <md-card-media>
                    <img src="https://xn--b1aew.xn--p1ai/upload/site1/kursant.jpg" alt="">
                </md-card-media>
                <md-card-content>
                    <p id="armname">Лейтенант</p>
                </md-card-content>
                <md-card-content>
                    {{firstname}}
                </md-card-content>
                <md-card-content>
                    {{lastname}}
                </md-card-content>
            </md-card>
        </md-layout>
    </md-layout>
    <md-layout>
        <md-layout>
        <md-table v-once>
            <md-table-header>
                <md-table-row>
                <md-table-head>Dessert (100g serving)</md-table-head>
                <md-table-head md-numeric>Calories (g)</md-table-head>
                <md-table-head md-numeric>Fat (g)</md-table-head>
                <md-table-head md-numeric>Carbs (g)</md-table-head>
                <md-table-head md-numeric>Protein (g)</md-table-head>
                </md-table-row>
            </md-table-header>

            <md-table-body>
                <md-table-row v-for="(row, index) in 5" :key="index">
                <md-table-cell>Dessert Name</md-table-cell>
                <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
    </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data () {
    return {
      firstname: 'Misha',
      lastname: 'Epifanov',
      avatar: ''
    }
  }
}
</script>
<style>
#armname{
    text-align: center;
}
</style>

