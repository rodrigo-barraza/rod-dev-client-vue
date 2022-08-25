<template>
  <main about-view>
    <div container>
      <div layout>
        <div sidebar>
          <div image></div>
          <!-- <div name>Rodrigo Barraza</div> -->
          <div links>
            <div title>Socials</div>
            <a link v-for="(social, socialIndex) in socials" v-bind:key="socialIndex" :class="social.type" :href="social.url" target="_blank">
              <div logo>{{social.type}}</div>
              <div>{{social.username}}</div>
            </a>
          </div>
        </div>
        <div main>
          <div about>
            <div image>
            </div>
            <div text>
              <div about-info>
                <p><span itemprop="name">Rodrigo Barraza</span> is <span itemprop="description">a software engineer, artist and photographer based out of Vancouver, British Columbia, Canada. He emerged as an internet artist who works in a variety of media but focuses on photography, AI art, film, animation, visual design and illustration.</span></p>
                
                <p>When it comes to software development, Rodrigo began programming in 2004, specializing on front-end web development. After working with many startups and corporations over the years, he eventually came to lead large teams in various companies, and in 2017 started his own tech start-up, Einstein Exchange, with two other co-founders. The company focused on providing customers worldwide with a safe, secure and simple way to buy, trade and invest in virtual currencies. Since 2019, Rodrigo has been a software consultant and contractor for various startups and continues to expand his art practice.</p>
              </div>
              <div actions>
                <div contact>Email Me</div>
              </div>
            </div>
          </div>
          <div bottom>
            <div right>
              <div education>
                <div title>Education</div>
                <div info>
                  <div main>2011 Emily Carr University of Art + Design</div>
                  <div details>Bachelor of Fine Arts in Photography</div>
                </div>
              </div>
              <div group-exhibitions>
                <div title>Group exhibitions</div>
                <div info>
                  <div main>2011 Grand Opening Night</div>
                  <div details>Nomad Gallery, Vancouver, Canada</div>
                </div>
                <div info>
                  <div main>2011 Five Rooms Photography Exhibition</div>
                  <div details>The Waldorf Hotel, Vancouver, Canada</div>
                </div>
                <div info>
                  <div main>2011 Degree Exhibition</div>
                  <div details>Emily Carr University of Art & Design, Vancouver, Canada</div>
                </div>
                <div info>
                  <div main>2010 Selfish Motives and Panchromatic Desires</div>
                  <div details>Anti-Social Gallery, Vancouver, Canada</div>
                </div>
              </div>
            </div>
            <div left>
              <div cinematography>
                <div title>Cinematography</div>
                <div info>
                  <div main>2012 Spotless, Short film</div>
                  <div details>Director</div>
                </div>
                <div info>
                  <div main>2011 Book of Kings, Short film</div>
                  <div details>Cinematographer</div>
                </div>
                <div info>
                  <div main>2010 Rip Apart, Music video</div>
                  <div details>Camera operator</div>
                </div>
                <div info>
                  <div main>2010 TV Date, Music video</div>
                  <div details>Camera operator</div>
                </div>
              </div>
            </div>
          </div>
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
              type: 'instagram',
              username: 'rodrigo.dreams',
              url: 'https://www.instagram.com/rodrigo.dreams/'
            },
            {
              type: 'foundationapp',
              username: '@rodrigobarraza',
              url: 'https://foundation.app/@rodrigobarraza'
            },
            {
              type: 'superrare',
              username: 'rodrigobarraza',
              url: 'https://superrare.com/rodrigobarraza'
            },
            {
              type: 'opensea',
              username: 'rodrigobarraza',
              url: 'https://opensea.io/rodrigobarraza'
            },
            {
              type: 'facebook',
              username: 'barraza.rodrigo',
              url: 'https://www.facebook.com/barraza.rodrigo'
            },
            {
              type: 'behance',
              username: 'rodrigobarraza',
              url: 'https://www.behance.net/rodrigobarraza'
            },
            {
              type: 'deviantart',
              username: 'bioviral',
              url: 'https://www.deviantart.com/bioviral'
            },
            {
              type: 'flickr',
              username: 'rodrigobarraza',
              url: 'https://flickr.com/photos/rodrigobarraza'
            },
            {
              type: 'linkedin',
              username: 'rodrigobarraza',
              url: 'https://www.linkedin.com/in/rodrigobarraza'
            },
            {
              type: 'discord',
              username: 'virus#1337',
            },
            {
              type: 'keybase',
              username: 'rodrigobarraza',
              url: 'https://keybase.io/rodrigobarraza'
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
  position: relative;
  margin-top: 0!important;
  padding-top: 100px;
  [container] {
    flex-direction: column;
    display: flex;
    grid-gap: 24px;
    [layout] {
      gap: inherit;
      display: flex;
      [sidebar] {
        flex: 0 0 250px;
        [image] {
          height: 250px;
          background: red;
          border-radius: 100%;
          background-size: 100%;
          background-position: center center;
          border: 10px solid white;
          box-sizing: border-box;
          background-image: url("@/assets/about-portrait.jpg");
        }
        [name] {
          text-align: left;
          font-size: 28px;
          font-weight: 500;
          margin-top: 12px;
        }
        [links] {
          display: grid;
          gap: 0px;
          [title] {
            font-size: 20px;
            text-align: left;
            font-weight: 500;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            margin-bottom: 12px;
            padding-bottom: 12px;
          }
          [link] {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            [logo] {
              width: 30px;
              height: 30px;
              color: transparent;
              border-radius: 100%;
              margin-right: 8px;
            }
            &.instagram { 
              [logo] {
                background-image: url("@/assets/icons/instagram.png");
                background-size: 100%;
              }
            }
            &.facebook { 
              [logo] {
                background-image: url("@/assets/icons/facebook.png");
                background-size: 100%;
              }
            }
            &.twitter { 
              [logo] {
                background-image: url("@/assets/icons/twitter.png");
                background-size: 100%;
              }
            }
            &.github { 
              [logo] {
                background-image: url("@/assets/icons/github.png");
                background-size: 100%;
              }
            }
            &.deviantart { 
              [logo] {
                background-image: url("@/assets/icons/deviantart.png");
                background-size: 100%;
              }
            }
            &.behance { 
              [logo] {
                background-image: url("@/assets/icons/behance.png");
                background-size: 100%;
              }
            }
            &.flickr { 
              [logo] {
                background-image: url("@/assets/icons/flickr.png");
                background-size: 100%;
              }
            }
            &.foundationapp { 
              [logo] {
                background-image: url("@/assets/icons/foundationapp.png");
                background-size: 100%;
              }
            }
            &.opensea { 
              [logo] {
                background-image: url("@/assets/icons/opensea.png");
                background-size: 100%;
              }
            }
            &.superrare { 
              [logo] {
                background-image: url("@/assets/icons/superrare.png");
                background-size: 100%;
              }
            }
            &.discord { 
              [logo] {
                background-image: url("@/assets/icons/discord.png");
                background-size: 100%;
              }
            }
            &.keybase { 
              [logo] {
                background-image: url("@/assets/icons/keybase.png");
                background-size: 100%;
              }
            }
            &.linkedin { 
              [logo] {
                background-image: url("@/assets/icons/linkedin.png");
                background-size: 100%;
              }
            }
            &:hover {
              text-decoration: none;
              background: rgba(0,0,0,0.05);
              transform: translate(0, -2px);
              color: black;
            }
          }
        }
      }
      [main] {
        display: flex;
        flex-direction: column;
        gap: inherit;
        [education], [cinematography], [group-exhibitions] {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          [info] {
            [details] {
              color: rgba(0,0,0,0.5);
            }
          }
        }
        [about] {
          display: flex;
          gap: inherit;
          flex-direction: column;
          [image] {
            border-radius: 8px;
            flex: 0 0 350px;
            height: 450px;
            background-image: url("@/assets/collections/nature-003.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom;
          }
          [text] {
            gap: inherit;
            display: flex;
            flex-direction: column;
          }
        }
        [about-info] {
          font-size: 18px;
          text-align: left;
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        [about-image] {
          video {
            width: 100%;
          }
        }
        [actions] {
          display: flex;
          justify-content: flex-end;
          [contact] {
            background: black;
            color: white;
            border-radius: 24px;
            padding: 8px 16px;
          }
        }
      }
    }
    [bottom] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: inherit;
      [left] {
        grid-template-rows: repeat(auto-fill, 40px);
        text-align: left;
      }
      [right] {
        text-align: left;
      }
      [title] {
        font-size: 28px;
        text-transform: capitalize;
        color: black;
        font-weight: 500;
        margin-bottom: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 8px;
      }
    }
  }
}
</style>