import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import React, {useCallback, useState} from 'react'
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
}))

const AddItemDialog = () => {
  const classes = useStyles()
  const [imageDropped, setImageDropped] = useState(false)
  const [images, setImages] = useState([])
  const [imageFiles, setImageFiles] = useState([])

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

// TODO: Fix async function and add redirect after item is posted
const submitItem = async (name, query, price, details, specs) => {
  const tempImageURLs = []
  console.log(tempImageURLs)

  const sendPosts = () => {
    var doc = db.collection('shop').doc()
      doc.set({
        name,
        query,
        price,
        details,
        specs,
        images: tempImageURLs,
        created: firebase.firestore.Timestamp.now(),
      })
  }
  
  const createPosts = async () => { await Promise.all(imageFiles.map(async (image) => {
      await firebase.storage().ref(`shopItems/${query}/${image.name}`).put(image)
        firebase.storage().ref(`/shopItems/${query}/`).child(image.name)
          .getDownloadURL().then(function(imageURL){
            tempImageURLs.push(imageURL)
        })
  }))
  return sendPosts()
}

  createPosts()
}

// imageFiles.map((image) => {
//   firebase.storage().ref(`shopItems/${query}/${image.name}`).put(image)
//   firebase.storage().ref(`/shopItems/${query}`).child(image.name)
//     .getDownloadURL().then(function(imageURL){
//       tempImageURLs.push(imageURL)
//     })
// })

// var doc = db.collection('shop').doc()
//     doc.set({
//       name,
//       query,
//       price,
//       details,
//       specs,
//       images: {tempImageURLs},
//       created: firebase.firestore.Timestamp.now(),
//     })

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return(
    <>
    <DialogTitle>Add Item</DialogTitle>
    <IconButton
      className={classes.closeButton}
      onClick={() => {
        props.onClose(null);
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
            <GridListTile cols={1}>
                    <img src={image} key={i}/>
            </GridListTile>
        ))}
      </GridList>
      <AddItemForm imageDropped={imageDropped} submitItem={submitItem}/>
    </DialogContent>
    </>
  )
}

export default AddItemDialog