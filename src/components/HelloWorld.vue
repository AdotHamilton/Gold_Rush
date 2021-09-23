<template>
    <header><h1>Gold Rush</h1></header>
    <div class="gold">
        <h2>Your Gold: <span>{{ gold }}</span></h2>
    </div>
    <div class="flex_container">
      <div>
        <h2>Farm</h2>
        <p>(Earns 10-20 gold)</p>
        <button @click="farm()" >Find Gold!</button>
      </div>
      <div>
        <h2>Cave</h2>
        <p>(Earns 5-10 gold)</p>
        <button @click="cave()" >Find Gold!</button>
      </div>
      <div>
        <h2>House</h2>
        <p>(Earns 2-5 gold)</p>
        <button @click="house()" >Find Gold!</button>
      </div>
      <div>
        <h2>Casino</h2>
        <p>(Win or lose 50 gold)</p>
        <button @click="casino()" >Find Gold!</button>
      </div>
    </div>
    
    
    <div class="messages">
      <ul>
        <li v-for="message in localState.messages" :key="message">
          {{ message }}
        </li>
      </ul>
    </div>
</template>

<script>
import store from '@/store';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        gold: 0,
        localState: {
          messages: ["Welcome to Gold Rush, Let's Play!"]
        }
      }
    },
    methods: {
      farm() {
       let d = new Date();
       let res = store.farm();
       let message = `You earned ${res} golds from the farm at ${d} `
       this.$data.localState.messages = [...this.$data.localState.messages, message]
       this.update();
      },
      cave() {
       let d = new Date();
       let res = store.cave();
       let message = `You earned ${res} golds from the cave at ${d} `
       this.$data.localState.messages = [...this.$data.localState.messages, message]
       this.update();
      },
      house() {
       let d = new Date();
       let res = store.house();
       let message = `You earned ${res} golds from the house at ${d} `
       this.$data.localState.messages = [...this.$data.localState.messages, message]
       this.update();
      },
      casino() {
        let d = new Date();
        let res = store.casino();
        let message = `You ${res > 0 ?  "won" : "lost" } ${res} at the casino on ${d}`
        this.$data.localState.messages = [...this.$data.localState.messages, message]
        this.update();
      },
      update() {
        this.$data.gold = store.state.gold;

      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 10vh;
  background-color: goldenrod;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_container {
  display: flex;
  justify-content: space-around;
}
.flex_container div {
  border: 2px solid black;
  padding: 1%;
}
button {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

button:hover,
button:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}

span {
  border: 2px solid black;
  padding: .5rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
}
.messages {
  position: absolute;
  bottom: 0;
  width: 100%;
}
li {
  display: block;
  height: 5vh;
  margin: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
a {
  color: #42b983;
}
</style>
