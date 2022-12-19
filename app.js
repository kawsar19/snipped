var study = new Vue({
  el: "#vue-app",
  data: {
    title: "Vue.js calculator",
    result: 0,
    first: '',
    last: '',
    html: [],
    types: ['', 'button', 'input'],
    copydata:'',
    coppied:false



  },

  methods: {
    copy(e) {
      copydata=e.target.previousElementSibling.value.replaceAll(`'`,`"`);
      console.log(copydata);
      const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(copydata);
          alert('copied');
        } catch (err) {
          console.log('failed to copy: ' + err);
        }
      }
      
      copyContent()
    },
    ok(event) {



      if (event.target.value == 'input') {

      }


      fetch(`jsons/${event.target.value}.json`)
        .then(res => res.json())
        .then(data => {
          
          this.html = data
        })




    }
  },

  mounted() {
    this.html = '88'
    fetch('jsons/oboj.json')
      .then(res => res.json())
      .then(data => {
        // console.log(this.html);
        this.html = data
      })
  }

});

const multilineString = `
  This is...
  <div>ok bye </div>
  a multiline string.
`

const minify = it => it.replace(/\s+/g, '')

console.log(minify(multilineString));
// Thisis...amultilinestring.