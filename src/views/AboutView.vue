<template>
  <main about-view>
    <div container>
      <div top>
        <div left>
          <div image></div>
          <div>Rodrigo Barraza</div>
          <div>Links</div>
          <div v-for="(social, socialIndex) in socials" v-bind:key="socialIndex" >{{social.type}}: {{social.username}}</div>
        </div>
        <div right>
          Rodrigo Barraza is a Vancouver-based Web Developer, Graphic Designer and Photographer. Experienced in the analog and digital mediums of photography and film, background in visual design, web development and illustration. Graduate of the Emily Carr University of Art + Design.
        </div>
      </div>
      <div bottom>
        <div right>
          <div>Education</div>
          <div>2011 Emily Carr University of Art + Design, Bachelor of Fine Arts in Photography</div>
          <div>Group exhibitions</div>
          <div>2011 Grand Opening Night, Nomad Gallery, Vancouver, Canada</div>
          <div>2011 Five Rooms Photography Exhibition, The Waldorf Hotel, Vancouver, Canada</div>
          <div>2011 Degree Exhibition, Emily Carr University of Art & Design, Vancouver, Canada</div>
          <div>2010 Selfish Motives and Panchromatic Desires, Anti-Social Gallery, Vancouver, Canada</div>
        </div>
        <div left>
          <div>Cinematography</div>
          <div>2012 Spotless, Short film, Director</div>
          <div>2012 Spotless, Short film, Director</div>
          <div>2010 Rip Apart, Music video, Camera operator</div>
          <div>2010 TV Date, Music video, Camera operator</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
    name: 'WorkView',
    components: {
    },
    data() {
        return {
          socials: [
            {
              type: 'Instagram',
              username: 'rodrigo.dreams',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Foundation',
              username: '@rodrigobarraza',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Superrare',
              username: 'rodrigobarraza',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Opeansea',
              username: 'rodrigobarraza',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Facebook',
              username: 'barraza.rodrigo',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Behance',
              username: 'rodrigobarraza',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Deviantart',
              username: 'bioviral',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'Flickr',
              username: 'rodrigobarraza',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
          ]
        }
    },
    created() {
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
[about-view] {
  [container] {
    flex-direction: column;
    display: flex;
    grid-gap: 24px;
    [top] {
      display: grid;
      grid-template-columns: 300px 1fr;
      grid-template-rows: 500px;
      grid-gap: inherit;
      [left] {
        background-color: rgba(0,0,0,0.1);
        display: grid;
        grid-template-rows: repeat(auto-fill, 40px);
      }
      [right] {
        background-color: rgba(0,0,0,0.2);
      }
    }
    [bottom] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 250px;
      grid-gap: inherit;
      [left] {
        background-color: rgba(0,0,0,0.1);
        display: grid;
        grid-template-rows: repeat(auto-fill, 40px);
      }
      [right] {
        background-color: rgba(0,0,0,0.2);
      }
    }
  }
}
</style>