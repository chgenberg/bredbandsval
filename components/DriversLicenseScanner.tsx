'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Upload, Scan, Check, AlertCircle } from 'lucide-react';
import Tesseract from 'tesseract.js';

interface ScannedData {
  firstName: string;
  lastName: string;
  personalNumber: string;
}

interface DriversLicenseScannerProps {
  onDataScanned: (data: ScannedData) => void;
  onClose: () => void;
}

export default function DriversLicenseScanner({ onDataScanned, onClose }: DriversLicenseScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Bakre kamera på mobil
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
      setShowCamera(true);
    } catch (err) {
      setError('Kunde inte komma åt kameran. Kontrollera behörigheter.');
      console.error('Camera error:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return null;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (!context) return null;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    
    return canvas.toDataURL('image/jpeg', 0.8);
  };

  const parseSwedishDriversLicense = (text: string): ScannedData | null => {
    console.log('OCR Text:', text);
    
    // Svenska körkort har specifika mönster
    const lines = text.split('\n').map(line => line.trim());
    
    // Försök hitta personnummer (YYMMDD-XXXX eller YYYYMMDD-XXXX)
    const personalNumberMatch = text.match(/(\d{6,8}[-\s]?\d{4})/);
    
    // Försök hitta namn (ofta på specifika rader eller efter "1." och "2.")
    let firstName = '';
    let lastName = '';
    
    // Metod 1: Sök efter numrerade rader
    const firstNameMatch = text.match(/1\.\s*([A-ZÅÄÖ][a-zåäö\s]+)/);
    const lastNameMatch = text.match(/2\.\s*([A-ZÅÄÖ][a-zåäö\s]+)/);
    
    if (firstNameMatch) firstName = firstNameMatch[1].trim();
    if (lastNameMatch) lastName = lastNameMatch[1].trim();
    
    // Metod 2: Fallback - sök efter namn i text
    if (!firstName || !lastName) {
      const nameMatches = text.match(/([A-ZÅÄÖ][a-zåäö]+)\s+([A-ZÅÄÖ][a-zåäö]+)/g);
      if (nameMatches && nameMatches.length > 0) {
        const names = nameMatches[0].split(/\s+/);
        if (names.length >= 2) {
          firstName = names[0];
          lastName = names.slice(1).join(' ');
        }
      }
    }
    
    if (personalNumberMatch && (firstName || lastName)) {
      return {
        firstName: firstName || '',
        lastName: lastName || '',
        personalNumber: personalNumberMatch[1].replace(/\s/g, '') // Ta bort mellanslag
      };
    }
    
    return null;
  };

  const processImage = async (imageData: string | File) => {
    setIsScanning(true);
    setScanProgress(0);
    setError(null);
    
    try {
      const result = await Tesseract.recognize(
        imageData,
        'swe', // Svenska språket
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              setScanProgress(Math.round(m.progress * 100));
            }
          }
        }
      );
      
      const parsedData = parseSwedishDriversLicense(result.data.text);
      
      if (parsedData) {
        onDataScanned(parsedData);
        stopCamera();
      } else {
        setError('Kunde inte läsa körkortsdata. Försök ta en tydligare bild.');
      }
    } catch (err) {
      setError('Fel vid scanning. Försök igen.');
      console.error('OCR error:', err);
    } finally {
      setIsScanning(false);
      setScanProgress(0);
    }
  };

  const handleCapture = () => {
    const imageData = captureImage();
    if (imageData) {
      processImage(imageData);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  const handleClose = () => {
    stopCamera();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Scanna körkort</h3>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Instructions */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Tips för bästa resultat:</strong>
          </p>
          <ul className="text-sm text-blue-700 mt-2 space-y-1">
            <li>• Håll körkortet plant och stabilt</li>
            <li>• Se till att texten är tydlig och välbelyst</li>
            <li>• Undvik reflex och skuggor</li>
          </ul>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-700">{error}</span>
          </div>
        )}

        {/* Scanning progress */}
        {isScanning && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Scan className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Läser körkort...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{scanProgress}% klart</p>
          </div>
        )}

        {/* Camera view */}
        {showCamera && (
          <div className="mb-6">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-64 object-cover"
              />
              <canvas ref={canvasRef} className="hidden" />
              
              {/* Capture button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={handleCapture}
                  disabled={isScanning}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <Camera className="w-8 h-8 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="space-y-3">
          {!showCamera && (
            <>
              <button
                onClick={startCamera}
                disabled={isScanning}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#101929] text-white rounded-lg hover:bg-[#1a2332] transition-colors disabled:opacity-50"
              >
                <Camera className="w-5 h-5" />
                Öppna kamera
              </button>
              
              <div className="relative">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isScanning}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <Upload className="w-5 h-5" />
                  Ladda upp bild
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </>
          )}
          
          {showCamera && (
            <button
              onClick={stopCamera}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Stäng kamera
            </button>
          )}
        </div>

        {/* Privacy notice */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            🔒 <strong>Integritet:</strong> Bilden bearbetas lokalt i din webbläsare och skickas aldrig till våra servrar.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
