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
      const resolveIfPlacesReady = async () => {
        try {
          // If base loaded but places missing, try importLibrary (v=beta and newer)
          if (window.google?.maps && !window.google.maps.places && (window.google.maps as any).importLibrary) {
            await (window.google.maps as any).importLibrary('places');
          }
        } catch (e) {
          // ignore; will attempt alternate path below
        }
        if (window.google?.maps?.places) {
          this.isLoaded = true;
          resolve();
          return true;
        }
        return false;
      };

      if (window.google?.maps) {
        // Base maps exists; ensure places is available
        resolveIfPlacesReady().then((ok) => {
          if (ok) return;
          // If still not ok, attempt to add a script with libraries=places
          appendScript();
        });
        return;
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', async () => {
          const ok = await resolveIfPlacesReady();
          if (!ok) appendScript();
        });
        existingScript.addEventListener('error', reject);
        return;
      }

      // Create and load script
      const appendScript = () => {
        const script = document.createElement('script');
        // Use async loading per Google best practices
        const params = new URLSearchParams({
          key: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''),
          libraries: 'places',
          loading: 'async',
          v: 'weekly'
        });
        script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
        script.async = true;
        script.id = 'google-maps-script';
        
        script.onload = async () => {
          await resolveIfPlacesReady();
        };
        
        script.onerror = () => {
          this.loadPromise = null;
          reject(new Error('Failed to load Google Maps'));
        };

        document.head.appendChild(script);
      };

      // Begin by appending script
      appendScript();
    });

    return this.loadPromise;
  }
}

export const googleMapsLoader = GoogleMapsLoader.getInstance();
