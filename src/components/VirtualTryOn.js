import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
// eslint-disable-next-line
import Webcam from 'react-webcam';
import { Modal, Box, Button, Typography } from '@mui/material';

const VirtualTryOn = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 640,
    height: 480,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const loadFacemesh = async () => {
      const loadedModel = await facemesh.load();
      setModel(loadedModel);
    };
    loadFacemesh();
  }, []);

  useEffect(() => {
    let interval;
    if (open) {
      interval = setInterval(() => {
        detect();
      }, 100);
    }

    return () => clearInterval(interval);
  }, [open, model]);

  const detect = async () => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4 &&
      model
    ) {
      const video = webcamRef.current.video;
      const predictions = await model.estimateFaces(video);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (predictions.length > 0) {
        predictions.forEach(prediction => {
          const keypoints = prediction.scaledMesh;

          // Draw lips using landmarks (roughly 61 to 80)
          ctx.beginPath();
          for (let i = 61; i <= 80; i++) {
            const [x, y] = keypoints[i];
            if (i === 61) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
          ctx.fill();
        });
      }
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" size="small">Try On</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="virtual-try-on"
        aria-describedby="use-camera-for-virtual-try-on"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 1 }}>Virtual Try-On</Typography>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Webcam
              ref={webcamRef}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
              }}
              videoConstraints={{ facingMode: 'user' }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default VirtualTryOn;