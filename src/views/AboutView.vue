<template>
  <main about-view itemprop="creator" itemscope itemtype="http://schema.org/Person">
    <div container>
      <div layout>
        <div sidebar>
          <img v-on:mouseover="hoverPortrait" :style="{ 'transform': `rotate(${portraitRotateDegrees}deg)`}" :src="require(`@/assets/about-portrait.jpg`)"
            alt="A black and white photograph of Rodrigo Barraza"
            title="A black and white photograph of Rodrigo Barraza"
            itemprop="image"/>
          <!-- <div name>Rodrigo Barraza</div> -->
          <div socials>
            <div title>Socials</div>
            <a social v-for="(social, socialIndex) in socials" v-bind:key="socialIndex" :class="social.type" :href="social.url" target="_blank">
              <div logo>{{social.type}}</div>
              <!-- <div social-name>{{social.username}}</div> -->
              <div social-name>{{social.name}}</div>
            </a>
          </div>
        </div>
        <div main>
          <div about>
            <!-- <div image> -->
              <!-- <video id="background-video" autoplay loop muted>
                  <source :src="require('@/assets/ai-art-video-done.mp4')" type="video/mp4">
              Your browser does not support the video tag.
              </video> -->
            <!-- </div> -->
            <div text>
              <div about-info>
                <p><span full-name><span itemprop="givenName">Rodrigo</span> <span itemprop="familyName">Barraza</span></span> is <span itemprop="description">a <span itemprop="jobTitle">software engineer</span>, <span itemprop="jobTitle">artist</span> and <span itemprop="jobTitle">photographer</span> based out of <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"><span itemprop="addressLocality">Vancouver</span>, <span itemprop="addressRegion">British Columbia</span>, <span itemprop="addressCountry">Canada</span></span></span>. He emerged as an internet artist who works in a variety of media and focuses on photography, AI art, film, animation, visual design and illustration.</p>

                <p>Rodrigo grew up with an interest in visual media and started out as a young animator and illustrator in 2001. He soon started experimenting with film photography, videography, game development and graphic design. In recent years, he has focused on the analog and digital photographic arts. Combining his passion for software development, and with the rise of artificial intelligence media since 2017, he has pivoted his practice to algorithmic and generative art, and generative artificial media through the use of CLIP-driven image synthesis. Rodrigo holds a BFA in Photography from the Emily Carr University of Art + Design in Vancouver, Canada.</p>

                <p>When it comes to software development, Rodrigo began programming in 2004, specializing on front-end web development and Flash web applications. After graduating from University, and working with many startups and corporations over the years, he eventually came to lead large teams in various companies, and in 2017 started his own tech start-up, Einstein Exchange, with two other co-founders. The company focused on providing worldwide clients with a safe, secure and simple way to buy, trade and invest in virtual currencies. Since 2019, Rodrigo has been a software consultant and contractor for various startups.</p>
              </div>
              <!-- <div actions>
                <div contact>Email Me</div>
              </div> -->
            </div>
          </div>
          <div bottom>
            <div extra-info>
              <div collection v-for="(collection, collectionIndex) in aboutCollections" v-bind:key="collectionIndex" :itemprop="collection.name == 'institutions' ? 'alumniOf' : null" itemscope :itemtype="collection.name == 'institutions' ? 'https://schema.org/CollegeOrUniversity' : null">
                <div title>{{collection.name}}</div>
                <div object 
                v-for="(object, objectIndex) in collection.collections" v-bind:key="objectIndex">
                  <p v-if="object.url">
                    <a object-title :href="object.url" target="_blank">{{object.name}}</a>
                    <span>{{object.year}}</span>
                  </p>
                  <p v-if="!object.url">
                    <span object-title>{{object.name}}</span>
                    <span>{{object.year}}</span>
                  </p>
                  <p>
                    <span :itemprop="collection.name == 'institutions' ? 'name' : null" v-if="object.venue">{{object.venue}}</span>
                    <span v-if="object.location">{{object.location}}</span>
                  </p>
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
import SocialsCollection from '@/collections/SocialsCollection';

export default {
    name: 'WorkView',
    components: {
    },
    data() {
        return {
          portraitRotateDegrees: 0,
          socials: SocialsCollection,
          aboutCollections: [
            {
              name: 'institutions',
              collections: [
                {
                  name: 'Bachelor of Fine Arts in Photography',
                  year: '2011',
                  venue: 'Emily Carr University of Art + Design',
                  location: 'Vancouver, Canada'
                },
              ]
            },
            {
              name: 'Recent Code',
              collections: [
                {
                  name: 'Pristine Disco Diffusion',
                  year: 'Ongoing',
                  venue: 'Google Colab Notebook',
                  url: 'https://colab.research.google.com/github/rodrigo-barraza/pristine-disco-diffusion/blob/master/rodrigos-pristine-disco-diffusion.ipynb',
                },
              ]
            },
            {
              name: 'Group Exhibitions',
              collections: [
                {
                  name: 'Fotografías del Mundo',
                  year: '2019',
                  venue: 'Museo de Arte de Lima',
                  location: 'Lima, Peru',
                },
                {
                  name: 'Five Rooms Photography Exhibition',
                  year: '2011',
                  venue: 'The Waldorf Hotel',
                  location: 'Vancouver, Canada',
                },
                {
                  name: 'Graduation Degree Exhibition',
                  year: '2011',
                  venue: 'Emily Carr University of Art & Design',
                  location: 'Vancouver, Canada',
                },
                {
                  name: 'Selfish Motives and Panchromatic Desires',
                  year: '2010',
                  venue: 'Anti-Social Gallery',
                  location: 'Vancouver, Canada',
                },
              ]
            },
            {
              name: 'cinematography',
              collections: [
                {
                  name: 'Spotless',
                  year: '2012',
                  venue: 'director',
                  location: 'short film',
                  url: '/collections/spotless',
                },
                {
                  name: 'Book of Kings',
                  year: '2011',
                  venue: 'cinematographer',
                  location: 'short film',
                },
                {
                  name: 'Rip Apart',
                  year: '2010',
                  venue: 'lighting technician',
                  location: 'music video',
                },
                {
                  name: 'TV Date',
                  year: '2010',
                  venue: 'lighting technician',
                  location: 'music video',
                },
              ]
            },
          ],
        }
    },
    created() {
    },
    methods: {
        hoverPortrait() {
          const randomNumber = Math.floor(Math.random() * 20) + 1;
          const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
          this.portraitRotateDegrees = this.portraitRotateDegrees + (randomNumber * plusOrMinus);
        }
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
    padding: 0;
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
        img {
          height: 250px;
          width: 250px;
          background: rgba(0,0,0,0.05);
          border-radius: 100%;
          background-size: 100%;
          background-position: center center;
          color: #f0f0f0;
          border: 10px solid;
          box-sizing: border-box;
          object-fit: cover;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            color: #9ceaff;
          }
          &:active {
            color: yellow;
          }
        }
        [name] {
          text-align: left;
          font-size: 28px;
          font-weight: 500;
          margin-top: 12px;
        }
        [socials] {
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
          [social] {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 4px;
            [logo] {
              width: 30px;
              height: 30px;
              color: transparent;
              border-radius: 100%;
              margin-right: 8px;
              filter: grayscale(1) opacity(0.8);
            }
            &:hover {
              text-decoration: none;
              background: #3390ff;
              transform: translate(0, -2px);
              color: black;
              [logo] {
                filter: none;
                pointer-events: none;
              }
              [social-name] {
                color: white;
                pointer-events: none;
              }
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
        [collection] {
          background-color: white;
          padding: 32px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          position: relative;
          [title] {}
          [object] {
            p {
              display: flex;
              flex-wrap: wrap;
              gap: 0 4px;
              &:nth-of-type(2) {
                color: rgba(0,0,0,0.85);
                margin: 0;
                span:nth-of-type(1) {
                  font-weight: 400;
                }
                span:nth-of-type(2) {
                  font-style: italic;
                }
              }
              [object-title] {
                font-weight: 400;
              }
            }
          }
          [info] {
            [details] {
              color: rgba(0,0,0,0.5);
              margin: 0;
              line-height: 15px;
              font-size: calc(0.2vw + 14px);
            }
          }
          [main] {
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
            border-radius: 2px 2px 0 0;
            flex: 0 0 24px;
            height: 450px;
            background-color: black;
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
            padding: 3px;
            background-color: #3390ff;
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
        gap: 24px;
        [collection] {
          &:nth-of-type(1) {
            [title] {
              color: #ff4e4e;
            }
          }
          &:nth-of-type(2) {
            [title] {
              color: #758aff;
            }
          }
          &:nth-of-type(3) {
            [title] {
              color: #46d85d;
            }
          }
          &:nth-of-type(4) {
            [title] {
              color: #fec010;
            }
          }
        }
        @media (max-width: 1200px) {
          grid-template-columns: 1fr;
        }
      }
      [title] {
        font-size: 28px;
        text-transform: capitalize;
        color: black;
        font-weight: 500;
        margin-bottom: 12px;
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
          img {
            height: 150px;
            width: 150px;
          }
          [socials] {
            // width: 100%;
            [title] {
              // text-align: center;
            }
            [social] {
              // justify-content: center;
              // display: grid;
              // grid-template-columns: 30px 100px;
              // gap: 8px;
              
            }
            [social-name] {
              // text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>