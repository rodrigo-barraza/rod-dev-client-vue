<template>
  <main about-view itemprop="creator" itemscope itemtype="http://schema.org/Person">
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
              <!-- <video id="background-video" autoplay loop muted>
                  <source :src="require('@/assets/ai-art-video-done.mp4')" type="video/mp4">
              Your browser does not support the video tag.
              </video> -->
            </div>
            <div text>
              <div about-info>
                <p><span full-name><span itemprop="givenName">Rodrigo</span> <span itemprop="familyName">Barraza</span></span> is <span itemprop="description">a <span itemprop="jobTitle">software engineer</span>, <span itemprop="jobTitle">artist</span> and <span itemprop="jobTitle">photographer</span> based out of <span itemprop="homeLocation">Vancouver, British Columbia, Canada</span></span>. He emerged as an internet artist who works in a variety of media and focuses on photography, AI art, film, animation, visual design and illustration.</p>

                <p>Rodrigo grew up with an interest in visual media and started out as a young animator and illustrator in 2001. He soon started experimenting with film photography, videography, game development and graphic design. In recent years, he has focused on the analog and digital photographic arts. Combining his passion for software development, and with the rise of artificial intelligence media since 2017, he has pivoted his practice to algorithmic and generative art, and generative artificial media through the use of CLIP-driven image synthesis. Rodrigo <span itemprop="description">holds a BFA in Photography from the <span itemprop="alumniOf">Emily Carr University of Art + Design</span> in Vancouver, Canada.</span></p>

                <p>When it comes to software development, Rodrigo began programming in 2004, specializing on front-end web development and Flash web applications. After graduating from University, and working with many startups and corporations over the years, he eventually came to lead large teams in various companies, and in 2017 started his own tech start-up, <span itemprop="worksFor">Einstein Exchange</span>, with two other co-founders. The company focused on providing worldwide clients with a safe, secure and simple way to buy, trade and invest in virtual currencies. Since 2019, Rodrigo has been a software consultant and contractor for various startups.</p>
              </div>
              <!-- <div actions>
                <div contact>Email Me</div>
              </div> -->
            </div>
          </div>
          <div bottom>
            <div extra-info>
              <div education>
                <div title>Education</div>
                <div info>
                  <div main><span itemprop="affiliation">Emily Carr University of Art + Design, 2011</span></div>
                  <div details>Bachelor of Fine Arts in Photography</div>
                </div>
              </div>
              <div group-exhibitions>
                <div title>Recent Code</div>
                <div info>
                  <div main><a href="https://colab.research.google.com/github/rodrigo-barraza/pristine-disco-diffusion/blob/master/rodrigos-pristine-disco-diffusion.ipynb" target="_blank">Pristine Disco Diffusion</a></div>
                  <div details>Google Colab Notebook</div>
                </div>
              </div>
              <div group-exhibitions>
                <div title>Group exhibitions</div>
                <div info>
                  <div main>Grand Opening Night, 2011</div>
                  <div details>Nomad Gallery, Vancouver, Canada</div>
                </div>
                <div info>
                  <div main>Five Rooms Photography Exhibition, 2011</div>
                  <div details>The Waldorf Hotel, Vancouver, Canada</div>
                </div>
                <div info>
                  <div main>Degree Exhibition, 2011</div>
                  <div details>Emily Carr University of Art & Design, Vancouver, Canada</div>
                </div>
                <div info>
                  <div main>Selfish Motives and Panchromatic Desires, 2010</div>
                  <div details>Anti-Social Gallery, Vancouver, Canada</div>
                </div>
              </div>
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
  [container] {
    flex-direction: column;
    display: flex;
    grid-gap: 24px;
    [layout] {
      gap: inherit;
      display: flex;
      align-items: flex-start;
      [sidebar] {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        flex: 0 0 250px;
        border-radius: 8px;
        background: white;
        padding: 20px;
        box-shadow: 0px 15px 30px -35px black;
        [image] {
          height: 250px;
          width: 250px;
          background: red;
          border-radius: 100%;
          background-size: 100%;
          background-position: center center;
          border: 10px solid #f0f0f0;
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
              background: #9ceaff;
              transform: translate(0, -2px);
              color: black;
            }
            &:active {
              text-decoration: none;
              background: #9ceaff;
              transform: translate(0);
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
          background-color: white;
          padding: 32px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          [info] {
            [details] {
              color: rgba(0,0,0,0.5);
            }
          }
          [main] {
            font-size: 18px;
            a {
              color: #655ffa;
              font-weight: 400;
              text-decoration: none;
              &:hover {
                color: #f10000;
              }
              &:active {
                color: #00b83e;
              }
            }
          }
        }
        [about] {
          display: flex;
          flex-direction: column;
          background-color: white;
          border-radius: 4px;
          [image] {
            border-radius: 2px;
            flex: 0 0 24px;
            height: 450px;
            background-color: black;
            // background-image: url("@/assets/collections/nature-003.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
          }
          [text] {
            padding: 32px;
            gap: inherit;
            display: flex;
            flex-direction: column;
          }
        }
        [about-info] {
          text-align: left;
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: justify;
          [full-name] {
            background-color: black;
            color: white;
          }
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
      [extra-info] {
        text-align: left;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        
        @media (max-width: 1200px) {
          grid-template-columns: 1fr;
        }
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
  @media (max-width: 640px) {
    [container] {
      [layout] {
        flex-direction: column;
        [sidebar] {
          width: 100%;
          [image] {
            height: 175px;
            width: 175px;
          }
          [links] {
            width: 100%;
            [title] {
              text-align: center;
            }
            [link] {
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
</style>