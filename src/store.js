export default {
    state: {
        gold: 0,
    },
    farm() {
        let val = Math.floor(Math.random() * ( 20 - 10 ) ) + 10;
        this.state.gold += val
        return val;
    },
    cave() {
        let val = Math.floor(Math.random() * ( 10-5 ) ) + 5
        this.state.gold += val;
        return val;
    },
    house() {
        let val =  Math.floor(Math.random() * ( 5 - 2 ) ) + 2;
        this.state.gold += val;
        return val;
    },
    casino() {
        let val = Math.floor(Math.random() * 101) - 50
        this.state.gold += val;
        return val;
    }
}