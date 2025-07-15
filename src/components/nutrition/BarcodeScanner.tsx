
import React, { useRef, useEffect, useState } from 'react';
import { ScanLine, X, Camera } from 'lucide-react';
import { BrowserMultiFormatReader } from '@zxing/library';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useHealthStore } from '@/store/healthStore';
import { useIsMobile } from '@/hooks/use-mobile';

interface BarcodeScannerProps {
  onScanResult: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onScanResult }) => {
  const { toast } = useToast();
  const { geminiTier } = useHealthStore();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReader = useRef<BrowserMultiFormatReader | null>(null);
  const controls = useRef<any>(null);

  // Define stopScanning function using function declaration so it's hoisted
  function stopScanning() {
    if (controls.current) {
      controls.current.stop();
      controls.current = null;
    }
    
    if (codeReader.current) {
      codeReader.current.reset();
      codeReader.current = null;
    }
    
    setIsScanning(false);
    setError(null);
  }

  // Cleanup effect
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      stopScanning();
    };
  }, []);

  // Only show on mobile and pro tier
  if (!isMobile || geminiTier !== 'pro') {
    return null;
  }

  const startScanning = async () => {
    if (!videoRef.current) return;

    try {
      setError(null);
      setIsScanning(true);

      // Create a new code reader
      codeReader.current = new BrowserMultiFormatReader();

      // Get video devices
      const videoInputDevices = await codeReader.current.listVideoInputDevices();
      
      if (videoInputDevices.length === 0) {
        throw new Error('No camera devices found');
      }

      // Use the back camera if available (usually the first one on mobile)
      const selectedDeviceId = videoInputDevices[0]?.deviceId;

      // Start decoding from the video element
      controls.current = await codeReader.current.decodeFromVideoDevice(
        selectedDeviceId,
        videoRef.current,
        (result, error) => {
          if (result) {
            const barcodeText = result.getText();
            console.log('Barcode scanned:', barcodeText);
            
            onScanResult(barcodeText);
            
            toast({
              title: "Barcode Scanned",
              description: `Found barcode: ${barcodeText}`,
              variant: "default",
            });
            
            stopScanning();
            setIsOpen(false);
          }
          
          if (error && error.name !== 'NotFoundException') {
            console.error('Scanning error:', error);
          }
        }
      );
    } catch (err) {
      console.error('Error starting barcode scanner:', err);
      setError(err instanceof Error ? err.message : 'Failed to start camera');
      setIsScanning(false);
      
      toast({
        title: "Camera Error",
        description: "Failed to access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
    // Start scanning when dialog opens
    setTimeout(() => {
      startScanning();
    }, 500); // Small delay to ensure video element is ready
  };

  const handleCloseDialog = () => {
    stopScanning();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleOpenDialog}
        className="h-10 w-10 rounded-full hover:bg-accent"
        title="Scan Barcode"
      >
        <ScanLine className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan Barcode</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              {isScanning ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <Camera className="h-12 w-12 mb-2" />
                  <p className="text-sm">Camera not active</p>
                </div>
              )}
              
              {/* Scanner overlay */}
              {isScanning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-primary border-dashed rounded-lg animate-pulse" />
                </div>
              )}
            </div>

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="text-sm text-muted-foreground text-center">
              Position the barcode within the frame to scan
            </div>

            <div className="flex gap-2">
              <Button
                onClick={startScanning}
                disabled={isScanning}
                className="flex-1"
              >
                {isScanning ? 'Scanning...' : 'Start Scanning'}
              </Button>
              
              <Button
                variant="outline"
                onClick={handleCloseDialog}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BarcodeScanner;
