import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.prod.min.js";

const app = createApp({
    data() {
        return {
            bsModal: ''
        };
    },
    methods: {
        getComponentInfo() {
            //取得元件資訊，直接操作
            this.$refs.card.title = '被更新的元件標題'
        },
        openModal() {
            this.bsModal.show()
        }
    },
    mounted() {
        //畫面渲染完成後focus在input上
        this.$refs.inputDOM.focus()

        //綁定modal
        this.bsModal = new bootstrap.Modal(this.$refs.modal)
    },
});

app.component('card', {
    data() {
        return {
            title: '文件標題',
            content: '文件內文'
        }
    },
    template: `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{content}}</p>
        </div>
    </div>
    `,
    props: ['item']
})

app.mount("#app");
