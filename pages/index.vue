<template>
  <div class="container">
    <div class="header">
      <h1>
        <span style="color: blue;">韓</span
        ><span style="color: red;">国</span>語クエスト<span class="small"
          >0.2</span
        >
      </h1>
      <div
        class="ham-menu-btn"
        :class="isShowHamMenu ? 'on' : 'off'"
        @click="isShowHamMenu = !isShowHamMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div v-show="isShowHamMenu" class="ham-menu">
      <div v-for="(category, ck) in dictionary" :key="ck" class="nav">
        <div class="category_title">
          {{ category.titlej }} - {{ category.titlek }}
        </div>
        <div
          v-for="(theme, tk) in category.map"
          class="nav-btn theme"
          :key="tk"
          @click="init(theme)"
        >
          {{ theme.titlej }}
        </div>
      </div>
    </div>
    <template v-if="page === 0">
      <template v-if="quest && quests.length > 0">
        <div class="theme-name">
          {{ currentTheme.titlej }} - {{ currentTheme.titlek }} ({{
            stage + 1
          }}
          / {{ quests.length }})
        </div>
        <div class="nav">
          <div class="nav-btn" @click="move(-1)" :disabled="isExists(-1)">
            前へ
          </div>
          <div class="nav-btn" @click="move(1)" :disabled="isExists(1)">
            次へ
          </div>
          <ul class="web-btn">
            <li>
              <a :href="webTranslator" target="web">翻訳を見る</a>
            </li>
            <li>
              <a :href="webDictionary" target="web">辞書を見る</a>
            </li>
          </ul>
        </div>
        <div class="quest">
          <div class="question">
            <span :style="`font-size: ${currentTheme.fontSize}`"
              >{{ quest.question }}
            </span>
          </div>
          <ul class="choices">
            <li
              v-for="choice in quest.choices"
              :key="choice"
              @click="selectAnswer(choice)"
            >
              {{ choice }}
            </li>
          </ul>
        </div>
      </template>
    </template>
    <template v-else-if="page === 1">
      <div class="clear">
        <div class="inner">
          <p>よくできました！！！</p>
          <div class="nav">
            <div class="nav-btn" @click="page = 0">戻る</div>
            <div class="nav-btn" @click="init()">続ける</div>
          </div>
        </div>
      </div>
    </template>
    <div class="toast-container" :class="toastFlag ? 'show' : 'hide'">
      <div class="toast-box" :class="toastClass">{{ toastMessage }}</div>
    </div>
  </div>
</template>

<script>
import dictionary from "~/dictionary";

const JP = 0;
const KR = 1;

export default {
  data() {
    return {
      themes: {},
      quests: [],
      stage: 0,
      page: 0,
      mode: 1,
      currentTheme: {},
      toastFlag: false,
      toastMessage: "",
      toastClass: null,
      toastTimeOut: null,
      webTranslator: null,
      webDictionary: null,
      isShowHamMenu: false
    };
  },
  watch: {
    quest: function(nv) {
      if (!nv) {
        return;
      }
      this.webTranslator = `https://translate.google.com/?sl=ko&tl=ja&text=${nv.question}&op=translate&hl=ja`;
      this.webDictionary = `https://krdict.korean.go.kr/m/jpn/searchResult?nationCode=7&nation=jpn&mainSearchWord=${nv.question}`;
    }
  },
  computed: {
    dictionary() {
      return dictionary;
    },
    quest: {
      get() {
        return this.quests[this.stage];
      }
    }
  },
  methods: {
    init(theme) {
      if (theme === undefined) {
        const keys = Array.from(Object.keys(this.themes));
        theme = this.themes[keys[Math.floor(Math.random() * keys.length)]];
      }
      this.currentTheme = theme;
      const shuffled = this.shuffle(theme.list);
      this.quests = this.makeQuests(shuffled);
      this.stage = 0;
      this.page = 0;
      this.isShowHamMenu = false;
    },
    shuffle(array) {
      array = [].concat(array);
      for (let i = 0; i < array.length; i++) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
      }
      return array;
    },
    showToast(msg, type, time = 10000) {
      this.toastMessage = msg;
      this.toastClass = type;
      this.toastFlag = true;
      clearTimeout(this.toastTimeOut);
      this.toastTimeOut = setTimeout(() => {
        this.toastFlag = false;
      }, time);
    },
    selectAnswer(choice) {
      this.quest.selected = choice;
      if (this.quest.answer === choice) {
        this.showToast(
          `正解! (${this.quest.question}: ${this.quest.answer})`,
          "ok"
        );
        if (!this.move(1)) {
          this.page = 1;
        }
      } else {
        this.showToast("ぶぶー", "ng");
      }
    },
    makeQuests(array) {
      const quests = [];
      for (let i = 0; i < array.length; i++) {
        const quest = {};
        quest.question = array[i][KR];
        quest.answer = array[i][JP];
        const choices = [quest.answer];
        while (choices.length < 4) {
          const rand = Math.floor(Math.random() * array.length);
          const randJp = array[rand][JP];
          if (!choices.includes(randJp)) {
            choices.push(randJp);
          }
        }
        for (let i = 0; i < choices.length; i++) {
          let rand = Math.floor(Math.random() * (i + 1));
          [choices[i], choices[rand]] = [choices[rand], choices[i]];
        }
        quest.choices = choices;
        quests.push(quest);
      }
      return quests;
    },
    isExists(n) {
      return this.quests[this.stage + n] === undefined;
    },
    move(n) {
      if (this.isExists(n)) {
        return false;
      }
      this.stage += n;
      return true;
    }
  },
  mounted() {
    for (const key of Object.keys(dictionary)) {
      this.themes = Object.assign(this.themes, dictionary[key].map);
    }
    this.init();
    // window.addEventListener("beforeunload", (e) => {
    //   e.returnValue = ' '
    // })
  }
};
</script>
