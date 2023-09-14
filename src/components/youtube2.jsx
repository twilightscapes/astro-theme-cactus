import React from "react"
// import { Link } from "gatsby"
// import { Layout } from "../components/layout"
// import { ProductListing } from "../components/product-listing"
// import GoBack from "../components/goBack"
// import styled from "styled-components"
// import ShareSocial from '../components/share' 
// import { StaticImage } from "gatsby-plugin-image"
// import { Helmet } from "react-helmet"
// import { Seo } from "../components/seo"
// import { FaRegPlusSquare } from 'react-icons/fa';
// import { IoShareOutline } from 'react-icons/io5';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import { StaticImage } from "gatsby-plugin-image"
// import { ImPlay } from "react-icons/im"
// import { RiSendPlane2Line } from "react-icons/ri"
// import Install from "../components/install-discount"
// import SVG from "../../static/assets/crude-addiction.svg"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../components/giftshop"
// import PhotoMenu from "../components/animated-photos-menu"
// import CommentBox from "../components/commentbox"
import ReactPlayer from 'react-player/lazy'
// import {CopyToClipboard} from 'react-copy-to-clipboard'
// import ReactPlayer from '../components/react-player'
// const CustomBox = styled.div`
// @media (max-width: 48em) {
// }
// @media (min-width: 58em) {
// }
// `



// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "feature" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `

// export default function nftPage({ data: { products } }) {




export default class IndexPage extends React.Component {







  render() {





    return (


      <>


        {/* <RiSendPlane2Line /> */}

        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        {/* <ReactPlayer
          allow="web-share"
          className='react-player'
          style={{ position: 'absolute', top: '0', border: '1px solid red' }}
          url="https://youtu.be/sOdlDyolhr0?si=PeOGxF0I1p6ES3_T"
          width='100vw'
          height='100vh'
          config={{
            youtube: {
              playerVars: { showinfo: 1, controls: 1, mute: 1, }
            },
          }}
          playing
          color="white"

          playIcon={<button aria-label="Click To Play" className="clickplay" style={{ position: 'absolute', zIndex: '5', top: '0', border: '0px solid red', width: '100vw', height: '100vh', background: '#111', color: '#fff', fontSize: '18px', textAlign: 'center', display: 'flex', flexDirection: 'columh', verticalAlign: 'center', justifyContent: 'center', paddingTop: '5%' }}>




            <div className="" style={{ textAlign: 'center', animation: 'fadeIn 3s' }}>
              <div style={{ textAlign: 'center', fontSize: '30px' }}>
                Ads Removed!</div>
              <ImPlay style={{ margin: '0 auto', width: '50%', fontSize: '60px' }} />
              <span style={{ fontWeight: 'bold', padding: '0 0 0 1rem', fontSize: '60px' }}>Click To Play</span>

            </div>
          </button>}
        // light="../static/assets/transparent.png"
        /> */}



      </>

    )
  }
}