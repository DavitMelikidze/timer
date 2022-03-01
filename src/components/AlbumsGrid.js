import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import ImagesView from "../views/ImagesView";

const AlbumCard = ({changeUserId,id,userId,title}) =>{
    const changeUserIdHandler = ()=>{
        changeUserId(id);
    }
    return(
        <Button style={{width:'18rem'}}
                className="m-2 p-0 border-0"
                onClick={changeUserIdHandler}>
            <Card key={id} bg='info' className="h-100">
                <Card.Header>ალბომი {id}</Card.Header>
                <Card.Body>
                    <Card.Title>userId {userId}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Button>
    )
}

function AlbumsGrid({data}) {
    const [showModal,setShowModal] = useState(false);
    const [albumId,setAlbumId] = useState(0);

    const hideModal = () => setShowModal(false);

    const changeUserId = (user)=>{
        setAlbumId(user);
        setShowModal(true);
    }

    return (
      <>
          <h3 className="text-center ">Best ever gallery in the world</h3>
          {
              data.map(album=>
                  <AlbumCard key={album.id}
                      changeUserId={changeUserId}
                      {...album}
                  />
              )
          }
          <Modal show={showModal} onHide={hideModal} size="lg">
              <Modal.Header closeButton >
                  <Modal.Title>Using grid in modal</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <ImagesView id={albumId}/>
              </Modal.Body>

              <Modal.Footer>
                  <Button variant="primary" onClick={hideModal}>Close</Button>
              </Modal.Footer>
          </Modal>
      </>
    );
}

export default AlbumsGrid;