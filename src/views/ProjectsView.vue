<template>
  <main about-view>
    <div container>
      <div layout>
        <div main>
          <div about>
            <div text>
              <div about-info>
                <h1 title>Inscriptor <span>2023</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/inscriptor" target="_blank">Github</a></p>
                <p>Image captioning using in Python using <a href="https://github.com/salesforce/LAVIS" target="_blank">Salesforce's LAVIS BLIP2</a>: a generic and efficient pre-training strategy that easily harvests development of pretrained vision models and large language models (LLMs) for vision-language pretraining. Can be used to caption single images or as many as hundreds of thousands of images in a dataset in a single run.</p>
                <p>🔵<span language>Python</span></p>
              </div>
            </div>
          </div>
          <div about>
            <div text>
              <div about-info>
                <h1 title>Eye of Providence <span>2023</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/eye-of-providence" target="_blank">Github</a></p>
                <p>Image and file sorting using <a href="https://github.com/spotify/annoy" target="_blank">Spotify's Annoy</a>: a C++ library with Python bindings to search for points in space that are close to a given query point. It also creates large read-only file-based data structures that are <a href="https://en.wikipedia.org/wiki/Mmap" target="_blank">mmapped</a> into memory so that many processes may share the same data. Sorts images by similarity based on a textual or image query.</p>
                <p>🔵<span language>Python</span></p>
              </div>
            </div>
          </div>
          <div about>
            <div text>
              <div about-info>
                <h1 title>Spatula <span>2023</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/spatula" target="_blank">Github</a></p>
                <p>An image scraper using <a href="https://github.com/apify/crawlee" target="_blank">Apify's Crawlee</a>: a web scraping and browser automation library for Node.js that helps you build reliable and fast web-crawlers.</p>
                <p>🟡<span language>JavaScript</span></p>
              </div>
            </div>
          </div>
          <div about>
            <div text>
              <div about-info>
                <h1 title>Pristine Diffusion <span>2022</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/pristine-disco-diffusion" target="_blank">Github</a>, <a href="https://colab.research.google.com/github/rodrigo-barraza/pristine-disco-diffusion/blob/master/rodrigos-pristine-disco-diffusion.ipynb" target="_blank">Google Colab</a></p>
                <p>A modification of a clip-guided diffusion model that can generate amazing images from text prompts. Great at generating abstract art that is vivid in color and sharp in details, written in Python. Inspired by <a href="https://github.com/crowsonkb" target="_blank">Katherine Crowson's</a> fined tuned diffusion model that was optimized by many other developers and utilizes <a href="https://github.com/openai/CLIP" target="_blank">OpenAI's CLIP</a> and the open-source alternative <a href="https://github.com/mlfoundations/open_clip" target="_blank">OpenClip</a>.</p>
                <p>🔴<span language>Jupyter Notebook</span></p>
              </div>
            </div>
          </div>
          <div about>
            <div text>
              <div about-info>
                <h1 title>Wakanda <span>2020</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/wakanda" target="_blank">Github</a></p>
                <p>This <a href="https://flexepin.com/" target="_blank">Directpay Flexepin</a> project is designed to streamline the acquisition and exchange of diverse cryptocurrencies, digital currencies, and digital assets by leveraging text messaging technology. This innovative approach enables individuals to conveniently employ their mobile phone minutes as a viable currency for conducting transactions. By integrating <a href="https://www.twilio.com/" target="_blank">Twilio's Communication APIs</a>, Directpay provides customers with access to the Flexepin service, facilitating swift, user-friendly, and secure online payment solutions.</p>
                <p>🟡<span language>JavaScript</span></p>
              </div>
            </div>
          </div>
          <div about>
            <div text>
              <div about-info>
                <h1 title>EXE Cash <span>2019</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/exe-cash" target="_blank">Github</a></p>
                <p>EXE Cash, a state-of-the-art ERC20 Smart Contract designed to facilitate the efficient tracking and management of fungible tokens. This groundbreaking solution opens up a world of possibilities for various applications, such as serving as a medium of exchange for digital currencies, providing voting rights, enabling staking, and much more. Einstein Cash leverages the Ethereum blockchain's capabilities to implement a secure and transparent platform for the issuance and management of digital assets. By adhering to the ERC20 token standard, EXE Cash ensures seamless interoperability with other Ethereum-based decentralized applications (dApps) and services.</p>
                <p>⚫<span language>Solidity</span></p>
              </div>
            </div>
          </div>
          <div about>
            <div text>
              <div about-info>
                <h1 title>AI Fraud Detection Model <span>2018</span></h1>
                <p><a href="https://github.com/rodrigo-barraza/ai-fraud-detection-model" target="_blank">Github</a></p>
                <p>A robust and self-contained fraud detection model that harnesses the power of the Intrusion Detection System (IDS) package, specifically tailored for software developers. This sophisticated model can be effortlessly deployed within a containerized environment, seamlessly integrating with your existing MongoDB infrastructure. The primary objective of this project was to develop a minimum viable product (MVP) that demonstrates its core functionality and potential for future enhancements. The fraud detection model has been meticulously engineered to analyze vast amounts of data, identifying patterns and anomalies indicative of fraudulent activities. By leveraging advanced machine learning algorithms, the model continuously adapts and refines its detection capabilities, ensuring an ever-evolving defense against emerging threats. The integration with MongoDB allows for efficient storage, retrieval, and management of the data necessary for the model's operations, further streamlining the process and enhancing performance. Moreover, the containerized deployment ensures scalability, portability, and ease of maintenance, making it an ideal solution for developers seeking to incorporate cutting-edge fraud detection capabilities into their projects.</p>
                <p>🔴<span language>Jupyter Notebook</span></p>
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
import AboutCollection from '@/collections/AboutCollection';
import UtilityLibrary from '@/libraries/UtilityLibrary';

export default {
    name: 'WorkView',
    components: {
    },
    data() {
        return {
          renderAssetPath: UtilityLibrary.renderAssetPath,
          portraitRotateDegrees: 0,
          socials: SocialsCollection,
          aboutCollection: AboutCollection,
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
          [title] {
          }
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
          h1 {
            font-size: 28px;
            text-transform: capitalize;
            color: black;
            font-weight: 500;
            margin-bottom: 12px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding-bottom: 8px;
            span {
              font-weight: 100!important;
            }
          }
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
          [language] {
            font-size: 16px;
            color: rgba(75,75,75,1);
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