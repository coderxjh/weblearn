export const hunhe1 = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('挂载成功!', this.name)
    },
}
export const hunhe2 = {
    data() {
        return {
            x: 1,
            y: 2,
        }
    }
}