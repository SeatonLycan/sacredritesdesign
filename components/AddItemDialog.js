import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import {useDropzone} from 'react-dropzone'
import AddItemForm from '../forms/AddItem'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import firebase, { db } from '../firebase/firebase'

const useStyles = makeStyles((theme) => ({
  closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(1),
    },
    dropzone: {
      background: 'rgba(90,90,90,.1)',
      width: '100%',
      height: '100%',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px'
    },
    removeImage: {
      position: 'absolute',
      top: 0,
      right: 0,
      color: 'white'
    }
}))

const AddItemDialog = (props) => {
  const classes = useStyles()
  const [imageDropped, setImageDropped] = useState(false)
  const [images, setImages] = useState([])
  const [imageFiles, setImageFiles] = useState([])
  const orderNumber = props.items.length + 1

const onDrop = (files) => {
  files.forEach((file) => {
  setImageDropped(true)
  setImageFiles(tempArray => [...tempArray, file])

  files.forEach((file) => {
    const reader = new FileReader()

    reader.addEventListener('load', function () {
      setImages(tempArray => [...tempArray, reader.result])
    }, false);

    if (file) {
      reader.readAsDataURL(file)
    }
  })
})}

const removeImage = (i) => {
  const tempImages = [...images]
  const tempImageFiles = [...imageFiles]
  tempImages.splice(i, 1)
  tempImageFiles.splice(i, 1)
  setImages(tempImages)
  setImageFiles(tempImageFiles)
  if (tempImages.length === 0){
    setImageDropped(false)
  }
}

const submitItem = async (name, price, details, specs) => {
  const query = name.replace(' ', '-').toLowerCase()
  const images = []
  var i = 0

  const putImages = async () => {
    for (const image of imageFiles){
    await firebase.storage().ref(`shopItems/${query}/${image.name}`).put(image)
      .then(async () => {
        await firebase.storage().ref(`/shopItems/${query}`).child(image.name)
          .getDownloadURL().then(function(imageURL){
            images[i] = imageURL
            i += 1
        })
      })
    }
  }
  putImages().then(() => {
    var doc = db.collection('shop').doc()
    doc.set({
      name,
      query,
      price,
      details,
      specs,
      images,
      created: firebase.firestore.Timestamp.now(),
      order: orderNumber
    })
    }
  )
  .then(() => {
    props.onClose()
    props.itemAdded()
  })
}

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return(
    <>
    <DialogTitle>Add Item</DialogTitle>
    <IconButton
      className={classes.closeButton}
      onClick={() => {
        props.onClose()
      }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent style={{paddingRight: '20px'}}>
      <div {...getRootProps()} className={classes.dropzone}>
        <input {...getInputProps({ accept: 'image/*' })}/>
        {
          isDragActive ?
            <p>Drop file here</p> :
            <Button variant="outlined">Add Item Photo</Button> 
        }
      </div>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {images.map((image, i)=> (
            <GridListTile cols={1} key={i}>
                    <img src={image} key={i}/>
                    <IconButton className={classes.removeImage} onClick={() => {removeImage(i)}}>
                      <CloseIcon />
                    </IconButton>
            </GridListTile>
        ))}
      </GridList>
      <AddItemForm imageDropped={imageDropped} submitItem={submitItem}/>
    </DialogContent>
    </>
  )
}

export default AddItemDialog