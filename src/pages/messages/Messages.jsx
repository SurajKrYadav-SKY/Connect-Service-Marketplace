import React from 'react';
import "./Messages.scss";
import { Link } from 'react-router-dom';

const Messages = () => {

  const currentUser = {
    id : 1,
    username : 'SKY',
    isSeller : true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint exercitationem, maxime ratione porro distinctio quia cum assumenda atque. Nisi!`


  return (
    <div className='messages'>
            <div className="container">
        <div className="title">
          <h1>Messages</h1>

        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              SKY
            </td>
            <td>
              <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr className='active'>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>2 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>2 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>3 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>4 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>5 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

          <tr>
            <td>
              SKY
            </td>
            <td>
            <Link to="/message/123" className='link'> {message.substring(0,100)}...</Link>
            </td>
            <td>6 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Messages
