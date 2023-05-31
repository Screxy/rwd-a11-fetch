const { createApp } = Vue;

createApp({
  data() {
    return {
      elements: [],
      formData: "1",
    };
  },
  methods: {
    addToList() {
      this.elements.push({
        text: this.formData,
        date: this.convertDate
      }
        );
      this.formData = "";
    },
  },
  computed: {
    date() {
      return Date.now();
    },
    convertDate() {
      return new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(this.date);
    },
    AvailableSymbolsCount(){
      return 20 - this.symbolsCount;
    },
    symbolsCount() {
      return this.formData.length;
    },
    postsCount() {
      return this.elements.length;
    },
  },
}).mount("#app");