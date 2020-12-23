<template>
  <div class="container">
    <div class="header">
      <h1>韓国語単語帳<span class="small">beta</span></h1>
    </div>
    <div>
      <button type="button" @click="init(dictionary.season)">スタート</button>
      <button type="button" @click="move(-1)">前へ</button>
      <button type="button" @click="move(1)">次へ</button>
      <a v-if="translator()" :href="translator()" target="translator">翻訳を見る</a>
    </div>
    <div>{{shuffled[stage]}}</div>
  </div>
</template>

<script>
import dictionary from '~/dictionary'

export default {
  data() {
    return {
      shuffled: [],
      stage: 0,
      page: 0,
      mode: 1
    };
  },
  computed: {
    dictionary() {
      return dictionary;
    }
  },
  methods: {
    init(target) {
      this.shuffled = this.shuffle(target.list);
      this.stage = 0;
    },
    shuffle(list) {
      const array = [].concat(list)
      for (let i = 0; i < array.length; i++) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
      }
      return array;
    },
    move(n) {
      if (this.shuffled[this.stage + n] === undefined) {
        return;
      }
      this.stage += n;
    },
    translator(text) {
      if (!text && this.shuffled && this.shuffled[this.stage]) {
        text = this.shuffled[this.stage][1];
      }
      if (!text) {
        return null;
      }
      return `https://translate.google.com/?sl=ko&tl=ja&text=${text}&op=translate&hl=ja`;
    }
  },
  mounted() {
    // window.addEventListener("beforeunload", (e) => {
    //   e.returnValue = ' '
    // })
  }
};
</script>
