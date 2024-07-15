import React from 'react'
import styled from 'styled-components'
import photo from '../Assets/1st energy image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <>
        <Footers>
            <Foot1>
                
                    <Container>
                        <Image>
                            <img src={photo} alt=""           style={{ height: '48px' }}
 />
                        </Image>
                        <Icons>
                            <a href="/">
                        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px' }} />

                            </a>
                            <a href="/">

                        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px' }} />
                            </a>
                            <a href="/">
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} />

                            </a>
                        </Icons>
                    </Container>
                
            </Foot1>
            <Break />
            <Foot2>
                <ItemsContainer>
                    <Items>
                        <ul>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="">Help and Support</a>
                            </li>
                            
                        </ul>
                    </Items>
                    <Markright>
                    <span style={{ fontSize: '20px' }}>&copy;</span>

                    {/* <FontAwesomeIcon icon={["fas", "copyright"]} style={{ fontSize: '30px' }} /> */}
                        <p>2024 1st Energy Pty Ltd</p>
                    </Markright>

                </ItemsContainer>
            </Foot2>
        </Footers>
    </>
  )
}

export default Footer


const Footers = styled.div`

`
const Foot1 = styled.div`
//  background: green;
`
const Container = styled.div`
display:flex;
// background: red;
justify-content: space-between;
align-items: center;
// margin: auto 10px;
padding: 24px;
`

const Image = styled.div`

`
const Icons = styled.div`
// background: blue;
width: 150px;
display: flex;
justify-content: space-between;

a {
        color: rgb(102, 102, 102);
    text-decoration: none;
}

a:hover {
    color:#00A0C6; 
    text-decoration:none; 
    cursor:pointer;  
}
`
const Foot2 = styled.div`
// background: green;

`

const ItemsContainer = styled.div`
display:flex;
// background: red;
justify-content: space-between;
align-items: center;
// margin: auto 10px;
padding: 24px;
`
const Items = styled.div`
ul{

    display: flex;
    // background-color: yellow;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    /* width: 327px; */
    width: 500px;
    /* margin-left: -15px; */
    padding-left: 0px;

    li{
       a{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: .1px;
        text-decoration: none;
        color: rgb(102, 102, 102);


            &:hover{
                color: #59aeeb;

            }

       }
    }
    
}
`
const Markright = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: rgb(102, 102, 102);

`

const Break = styled.hr`
border-color: #00000014;
margin: 0 24px;
// padding: 20px 24px;
`
