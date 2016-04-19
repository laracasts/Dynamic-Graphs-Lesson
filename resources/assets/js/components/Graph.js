import Vue from 'vue';
import Chart from 'chart.js';

export default Vue.extend({
    template: `
        <div>
            <canvas width="600" height="400" v-el:canvas></canvas>

            {{{ legend }}}
        </div>
    `,

    props: {
        url: '',
    },

    data() {
        return {
            chart: '',
            legend: ''
        };
    },

    ready() {
        this.load();
    },

    methods: {
        load() {
            this.fetchData().then(
                response => this.render(response.data)
            );
        },

        fetchData() {
            return this.$http.get(this.url);
        },

        render(data) {
            this.chart = new Chart(
                this.$els.canvas.getContext('2d')
            ).Line({
                labels: Object.keys(data),
                datasets: [
                    {
                        label: "Revenue", // move to a property to make dynamic.
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: Object.keys(data).map(key => data[key])
                    }
                ]
            });

            this.legend = this.chart.generateLegend();
        },

        reload() {
            this.chart.destroy();

            this.load();
        }
    }
});
