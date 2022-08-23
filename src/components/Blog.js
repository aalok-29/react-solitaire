import React from 'react';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import Navbar from './Navbar';


const Blog = () => {

const myList = [{title:'Blog1', Desc:'Blog1 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image1}, 
{title:'Blog2', Desc:'Blog2 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image2},
{title:'Blog3', Desc:'Blog3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image3},
{title:'Blog3', Desc:'Blog3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image3},
{title:'Blog3', Desc:'Blog3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image3},
{title:'Blog3', Desc:'Blog3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image3},
{title:'Blog3', Desc:'Blog3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image3},
{title:'Blog3', Desc:'Blog3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium voluptate eligendi fugit, vero consectetur dicta pariatur numquam doloremque assumenda dolor blanditiis vitae fuga quae earum, consequuntur sint unde rerum.', Img:Image3}];
  return (
    <div>
        <Navbar />

        <div className='col-sm-4  col-sm-offset-4'>
            {myList.map((row)=>(
                <div className='col-lg-12' key={row.title}>
                    <h3>{row.title}</h3>

                    <img src={row.Img} className="img-responsive"/>


                    <p>{row.Desc}</p>


                    <div className='col-lg-12 form-group'>
                    <button className='btn btn-danger'>
                        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>hey
                    </button>

                        <button className='btn btn-success'><span className='glyphicon glyphicon-comment'></span>hi</button>



                    </div>
                </div>

            ))}
        </div>
      
    </div>
  )
}

export default Blog;