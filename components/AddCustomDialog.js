import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import {useDropzone} from 'react-dropzone'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import firebase, { db } from '../firebase/firebase'

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: '50%',
  },
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

const AddCustomDialog = (props) => {
  const classes = useStyles()
  const [imageDropped, setImageDropped] = useState(false)
  const [images, setImages] = useState([])
  const [imageFiles, setImageFiles] = useState([])
  const orderNumber = props.customItems.length + 1

const onDrop = (files) => {
  files.forEach((file) => {
  setImageDropped(true)
  setImageFiles(file)

  files.forEach((file) => {
    const reader = new FileReader()

    reader.addEventListener('load', function () {
      setImages(reader.result)
    }, false);

    if (file) {
      reader.readAsDataURL(file)
    }
  })
})}

const removeImage = () => {
  setImages([])
  setImageFiles([])
  setImageDropped(false)
}

const submitItem = async () => {
  const tempImages = []
  var i = 0

  const putImages = async () => {
    await firebase.storage().ref(`customItems/${imageFiles.name}`).put(imageFiles)
      .then(async () => {
        await firebase.storage().ref('customItems/').child(imageFiles.name)
          .getDownloadURL().then(function(imageURL){
            tempImages[i] = imageURL
            i += 1
          })
      })
  }
  putImages().then(() => {
    var doc = db.collection('customItems').doc()
      doc.set({
        order: orderNumber,
        image: tempImages,
        name: imageFiles.name
      })
  }).then(() => {
    props.onClose()
    props.itemAdded()
  })
}

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return(
    <>
    <DialogTitle>Add Custom Item</DialogTitle>
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
            <Button variant="outlined">Add Custom Item Photo</Button> 
        }
      </div>
      {images.length ?
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <GridList className={classes.gridList} spacing={3} cellHeight={225} cols={1}>
        <GridListTile>
          <img src={images} />
          <IconButton className={classes.removeImage} onClick={() => {removeImage()}}>
            <CloseIcon />
          </IconButton>
        </GridListTile>
      </GridList>
      </div>  : null }
        <div style={{paddingTop: '10px'}}>
          <Button
            fullWidth
            size="large"
            color="secondary"
            type="submit"
            disabled={imageDropped === false}
            label="Continue"
            variant="contained"
            onClick={submitItem}
            >
            Add Custom Item
          </Button>
        </div>
    </DialogContent>
    </>
  )
}

export default AddCustomDialog