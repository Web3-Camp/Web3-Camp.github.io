import React, {ReactNode, useEffect, useState, useRef, ChangeEvent, ReactElement, ComponentType} from "react";
import type { NextPage } from 'next'
import styled from "styled-components";
import {Row, Col, Card,Container,Button} from 'react-bootstrap';
import Layout from "../components/layout";
import ListJson from '../public/json/list.json';

const CardBox = styled(Card)`
  border:0;
  box-shadow: 0 0 5px #eee;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0!important;
  .firstTR{
    display: flex;
    align-content: stretch;
  }
  .iconbox{
    width: 30%;
    display: flex;
    flex-shrink: 0;
    img{
      width: 100%;
      align-self: center;
    }
  }
   .middlebox{
     flex-grow: 1;
     padding: 20px;
   }
  .title{
    font-size: 22px;
    margin:10px 0  12px;
    color: #2D1D0A;
    line-height: 37px;
    font-weight: bolder;
    font-family: "PingFang-Medium";
    
  }
  .content{
    opacity: 0.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: rgba(45, 29, 10, 0.6);
    font-weight: 400;
    font-size: 16px;
    font-family: "PingFang-SC-Regular";
  }
 
  .card{
    display: flex;
  }
  .card-body{
    height: 100%;
  }
`
const ColBox = styled(Col)`
  display: flex;
  align-content: stretch;
  a{
    display: flex;
    align-content: stretch;
  }
`
const MainBox = styled.div`
  background: url("/assets/images/TopBg.gif") no-repeat center -100px;
  background-size: 1250px ;
  padding-top: 30px;
`
const BannerBox = styled(Container)`
  .mainTitle{
    font-family: "AdobeGurmukhi-Bold";
    font-size: 80px;
    text-align: center;
    line-height: 1.2em;
    color: #2f1e0a;
    margin: 60px 0 15px;
  }
  .subTitle{
    text-align: center;
    font-size: 28px;
  }
`
const LogoBox = styled.div`
    img{
      width: 200px;
    }
`
const ButtonBox = styled("div")`
    text-align: center;
  margin: 60px 0;
  .centerBtn{
    background:#2f1e0a!important;
    border: 2px solid #2f1e0a ;
    font-family: "PingFang-SC-Regular";
    font-size: 20px;
    padding: auto 20px;
    &:hover{
      background: transparent!important;
      color: #2f1e0a;
    }
    &:focus{
      outline: none!important;
    }
  }
`
interface listObj{
    name: string;
    logo: string;
    href: string;
    description: string;
}
export default function  Home<NextPage>() {
   const [list,setList] = useState<listObj[]>([])

    useEffect(()=>{
        setList(ListJson)
    },[])
  return (
      <MainBox>
          <BannerBox>
              <LogoBox>
                  <img src="/assets/images/web3logo.png" alt=""/>
              </LogoBox>
                <div>
                    <div className="mainTitle">Tools and resources for all<br />  Web 3.0 enthusiasts</div>
                    <div className="subTitle">Sharpen your weapon and get started with Web 3.0 from here.</div>
                    <ButtonBox>
                        {/*<button>Get Started</button>*/}
                        <Button className="centerBtn">Submit  requirements</Button>
                    </ButtonBox>
                </div>
          </BannerBox>
          <Container>
              <Row>
                  {
                      list.map((item,index)=>(<ColBox md={4} xs={12} key={index}>
                              <a href={item.href} target="_blank" rel="noreferrer">
                                  <CardBox body>
                                      <div className="firstTR">
                                          <div className="iconbox" >
                                              <img src={item.logo} alt=""/>
                                          </div>
                                          <div className="middlebox">
                                              <div className="title">{item.name}</div>
                                              <div className="content">{item.description}</div>
                                          </div>
                                      </div>
                                  </CardBox>
                              </a>
                          </ColBox>

                      ))
                  }
              </Row>
          </Container>

      </MainBox>
  )
}



interface LayoutProps {
  children: ReactNode;
}


Home.getLayout = function getLayout(page:LayoutProps) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}
