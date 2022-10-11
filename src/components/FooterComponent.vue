<template>
  <footer>
    <div bar1>
    </div>
    <div bar2>
    </div>
    <div container>
        <!-- <ul socials>
            <li social v-for="(social, socialIndex) in socials" v-bind:key="socialIndex" :class="social.type">
                <a :href="social.url" target="_blank"><div logo></div></a>
            </li>
        </ul>
        <ul socials>
            <li social v-for="(social, socialIndex) in socials" v-bind:key="socialIndex" :class="social.type">
                <a :href="social.url" target="_blank"><div logo></div></a>
            </li>
        </ul> -->
        <div footer-menu>
          <div>
            <div>
              <div>
                <div brand>
                  <div logo></div>
                  <h3>RODRIGO BARRAZA</h3>
                </div>
                <p>Vancouver, Canada</p>
              </div>
              <p>© 2022 Rodrigo Barraza</p>
            </div>
          </div>
          <div photography>
            <div>
              <h1>Photography</h1>
              <ul>
                <li
                v-for="(collection, collectionIndex) in collectionsPhotography" v-bind:key="collectionIndex">
                  <router-link image :to="`/collections/${collection.path}`">{{ collection.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div film>
            <div>
              <h1>Film</h1>
              <ul>
                <li
                v-for="(collection, collectionIndex) in collectionsFilm" v-bind:key="collectionIndex">
                  <router-link image :to="`/collections/${collection.path}`">{{ collection.title }}</router-link>
                </li>
              </ul>
            </div>
            <div ai>
              <h1>AI Art</h1>
              <ul>
                <li
                v-for="(collection, collectionIndex) in collectionsAI" v-bind:key="collectionIndex">
                  <router-link image :to="`/collections/${collection.path}`">{{ collection.title }}</router-link>
                </li>
              </ul>
            </div>
            <div animation>
              <h1>AI Animation</h1>
              <ul>
                <li
                v-for="(collection, collectionIndex) in collectionsAnimation" v-bind:key="collectionIndex">
                  <router-link image :to="`/collections/${collection.path}`">{{ collection.title }}</router-link>
                </li>
              </ul>
            </div>
            <div installation>
              <h1>Installation</h1>
              <ul>
                <li
                v-for="(collection, collectionIndex) in collectionsOther" v-bind:key="collectionIndex">
                  <router-link image :to="`/collections/${collection.path}`">{{ collection.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div socials-new>
            <div>
              <h1>Socials</h1>
              <ul>
                <li social
                v-for="(social, socialIndex) in socials" v-bind:key="socialIndex" :class="social.type">
                  <a :href="social.url" target="_blank"><div logo></div>{{ social.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <!-- https://rod.dev is the portfolio of Rodrigo Barraza, Software Engineer & Artist
      2005-2020 -->
    </div>
  </footer>
</template>

<script>
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';
import SocialsCollection from '@/collections/SocialsCollection';

export default {
    name: 'FooterComponent',
    props: {
    },
    data() {
        return {
          socials: SocialsCollection,
            collections: ArtCollectionsCollection,
            collectionsPhotography: [],
            collectionsFilm: [],
            collectionsAI: [],
            collectionsAnimation: [],
            collectionsOther: [],
        }
    },
    methods: {
      createCollections(collection) {
        if (collection.type === 'photography') {
          this.collectionsPhotography.push(collection);
        } else if (collection.type === 'film') {
          this.collectionsFilm.push(collection);
        } else if (collection.type === 'ai') {
          this.collectionsAI.push(collection);
        } else if (collection.type === 'animation') {
          this.collectionsAnimation.push(collection);
        } else {
          this.collectionsOther.push(collection);
        }
      },
    },
    created() {
      ArtCollectionsCollection.forEach(this.createCollections);
    },
}
</script>

<style scoped lang="scss">
p {
  color: white;
}
[footer-menu] {
  padding: 64px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: left;
  gap: 24px 0;
  > div {
    display: grid;
    gap: 8px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    &:first-of-type {
      > div {
        justify-content: space-between;
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    [logo] {
      width: 20px;
      height: 20px;
      display: inline-block;
      filter: grayscale(1) opacity(0.8);
    }
    &:hover {
      [logo] {
        filter: grayscale(0) opacity(1);
      }
    }
  }
  [brand] {
    display: flex;
    gap: 4px;
    cursor: pointer;
    [logo] {
      flex: 0 0 20px;
      height: 20px;
      background-size: 100%;
      image-rendering: pixelated;
      pointer-events: none;
    }
    h3 {
      font-weight: 400;
    }
    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
  ul {
    font-size: 16px;
    gap: 4px;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 500;
    font-size: 16px;
  }
  @media (max-width: 1432px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    > div:first-of-type {
      grid-column: 1/4;
    }
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    > div:first-of-type {
      grid-column: 1/2;
    }
    h1, ul {
      font-size: 5vw;
    }
  }
  @media (max-width: 400px) {
  }
  [photography] {
    h1 {
      color: #46d85d;
    }
  }
  [film] {
    h1 {
      color: #fec010;
    }
  }
  [ai] {
    h1 {
      color: #ff4e4e;
    }
  }
  [animation] {
    h1 {
      color: #758aff;
    }
  }
  [installation] {
    h1 {
      color: #e97300;
    }
  }
  [socials-new] {
    h1 {
      color: #ffe50c;
    }
  }
}
footer {
  margin-top: 50px;
  overflow: hidden;
  position: relative;
  [bar1] {
    background-color: #f0f0f0;;
    position: absolute;
    width: 100%;
    height: 40px;
    transform: skewY(-3deg) translateY(-5px);
    z-index: 2;
    transform-origin: 100% 0;
  }
  [bar2] {
    background-color: black;
    width: 100%;
    height: 100%;
    transform-origin: 100% 0;
    transform: skewY(-3deg);
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  [container] {
    // position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: white;
    padding-top: calc(calc(calc(100vw - 17px) * 0.106) + calc(0*1px) - 0.106 * calc(calc(100vw - 17px) / 2 - 1080px / 2));
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }
  [socials] {
      list-style: none;
      display: flex;
      flex-direction: row;
      bottom: 20px;
      background-color: #e8e8e8;
      padding: 8px 32px;
      border-radius: 30px;
      gap: 0;
      [social] {
          a {
              display: block;
              border-radius: 8px;
              padding: 8px;
              [logo] {
                  display: block;
                  height: 30px;
                  width: 30px;
                  filter: grayscale(1) opacity(0.9);
              }
              &:hover {
                  text-decoration: none;
                  background: #3390ff;
                  transform: translate(0, -2px);
                  color: black;
              }
          }
      }
  }
}
</style>
