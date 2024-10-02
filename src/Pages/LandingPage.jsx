import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgGif from '../assets/music.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <>
      <Container fluid="md p-4">
        <Row>
          <Col>
            <h1 className='my-4'>Welcome To  <p className='text-warning'>MUSIC Player</p></h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum veritatis laudantium atque vel. Ut quas eveniet harum natus molestias consectetur reiciendis nulla maxime fuga eos reprehenderit quam, incidunt nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit unde, praesentium quasi nostrum et placeat, minima tempora natus nihil sunt repudiandae. Dolorem sint, laborum dolorum illum excepturi adipisci unde!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugit expedita illo officia maiores voluptas neque dicta, iste obcaecati quod! Doloribus harum, quam repudiandae est hic repellendus expedita vero officiis.</p>
            <Link to={'/home'}>
              <Button variant="warning">Get Started</Button>{' '}
            </Link>
          </Col>

          <Col style={{ marginLeft: "80px" }}><img src={imgGif} className='p-5' alt="" />
          </Col>
        </Row>
      </Container>

      <Container className='w-75 p-5'>

        <Row>
          <h1 className='text-center text-warning p-4 pt-6'>Features</h1>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/007/655/372/small/animation-earphones-neon-light-isolate-on-green-background-video.jpg" />
              <Card.Body>
                <Card.Title>Beats</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRuWmczxsSJXPwiOHYEsWRKoRa392JtvJPQ&s" width="20px"  height="150px"/>
              <Card.Body>
                <Card.Title>rhythm</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Explore</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-AVmjViCgvwJ7Q6wt_K5H47SE3C8UKXUJA&s" width="20px"  height="150px"/>
              <Card.Body>
                <Card.Title>sounds</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container className='border border-light p-2 border-rounded'>
        <Row className=' text-warning'><h4>Simple Fast and Powerfull</h4></Row>
      <Row>
        <Col>
         <p><span>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis modi odit totam sint eius molestias officia nisi adipisci, neque ab illum eum maiores nobis ea accusamus veniam earum magni!</p><br />

         <p><span>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis modi odit totam sint eius molestias officia nisi adipisci, neque ab illum eum maiores nobis ea accusamus veniam earum magni!</p><br />

         <p><span>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis modi odit totam sint eius molestias officia nisi adipisci, neque ab illum eum maiores nobis ea accusamus veniam earum magni!</p>
        </Col>
        <Col className='mb-5 p-4'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Bl6mNxLDVcM?si=g6fl0T1wn9BNiWjH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
    </Container>


    </>
  )
}

export default LandingPage