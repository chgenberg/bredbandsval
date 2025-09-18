// Singleton to ensure Google Maps is only loaded once
class GoogleMapsLoader {
  private static instance: GoogleMapsLoader;
  private loadPromise: Promise<void> | null = null;
  private isLoaded = false;

  private constructor() {}

  static getInstance(): GoogleMapsLoader {
    if (!GoogleMapsLoader.instance) {
      GoogleMapsLoader.instance = new GoogleMapsLoader();
    }
    return GoogleMapsLoader.instance;
  }

  async load(): Promise<void> {
    // If already loaded, return immediately
    if (this.isLoaded && window.google?.maps?.places) {
      return Promise.resolve();
    }

    // If currently loading, return the existing promise
    if (this.loadPromise) {
      return this.loadPromise;
    }

    // Start loading
    this.loadPromise = new Promise((resolve, reject) => {
      // Check if already loaded by another component
      if (window.google?.maps?.places) {
        this.isLoaded = true;
        resolve();
        return;
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          this.isLoaded = true;
          resolve();
        });
        existingScript.addEventListener('error', reject);
        return;
      }

      // Create and load script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.id = 'google-maps-script';
      
      script.onload = () => {
        this.isLoaded = true;
        resolve();
      };
      
      script.onerror = () => {
        this.loadPromise = null;
        reject(new Error('Failed to load Google Maps'));
      };

      document.head.appendChild(script);
    });

    return this.loadPromise;
  }
}

export const googleMapsLoader = GoogleMapsLoader.getInstance();
