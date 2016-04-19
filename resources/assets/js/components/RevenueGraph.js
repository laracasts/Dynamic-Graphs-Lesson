import Graph from './Graph';

export default Graph.extend({
    template: `
        <div>
            <div>
                <label>How Many Days?</label>

                <select v-model="range" @change="reload">
                    <option v-for="n in 365">{{ n }}</option>
                </select>
            </div>

            <canvas width="600" height="400" v-el:canvas></canvas>

            {{{ legend }}}
        </div>
    `,

    props: {
        range: { default: 30 }
    },

    methods: {
        fetchData() {
            return this.$http.get(
                this.url, { range: this.range }
            );
        }
    }
});
