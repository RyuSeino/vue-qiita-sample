const vm = new Vue({
    el: '#app',
    data: {
        results: [
        ],
        tag: ''
    },
    mounted() {
        axios
            .get("https://qiita.com/api/v2/items")
            .then(response => ( this.results = response.data ) )
    },
    methods: {
        reloadPage: async function () {

            if(tag = '') {
                url = "https://qiita.com/api/v2/items";
            } else {
                url = "https://qiita.com/api/v2/tags/" + this.tag + "/items";
            }
            try {
                let res = await axios.get(url);
                this.results = res.data;
            } catch(e) {
                console.error(e)
            }


        }

    }

});


