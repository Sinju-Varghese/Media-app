import React , { useEffect, useState }from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VedioCard from './VedioCard';
import { getVedioAPI } from '../Services/allAPIs';


function ViewVedio({uploadVedioResponse}) {
   //to hold all video details
   const [Vedio, setVedio] = useState([]);

   const getVedio = async () => {
    try {
        const response = await getVedioAPI();
        console.log(response.data); // Ensure this is always an array
        if (Array.isArray(response.data)) {
            setVedio(response.data);
        } else {
            console.error('Expected an array but got:', response.data);
        }
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
};

console.log(Vedio)//array of video

useEffect(()=>{
  getVedio()

},[uploadVedioResponse])


return (
  <div>
    <Row className='border border-white p-3'>
      {
        Vedio.length!=0?  Vedio.map(item =>
          (
      <Col>
      <VedioCard VedioDetails={item}/>
      </Col>
      )):"Not found"
    }
    </Row>
  </div>
)
}


export default ViewVedio