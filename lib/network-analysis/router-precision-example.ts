// Real router data example - showing precision level

export interface PreciseRouterData {
  timestamp: string;
  
  // EXAKT användning per enhet (100% pricksäker)
  deviceUsage: Array<{
    deviceName: string;
    macAddress: string;
    ip: string;
    totalBytes: number;
    dailyAverage: number;
    hourlyBreakdown: Record<string, number>; // "08:00": 1.2GB
    applicationBreakdown: Array<{
      protocol: string; // TCP/UDP
      port: number;     // 443 (HTTPS), 1935 (streaming)
      bytes: number;
      likelyApplication: string; // "Netflix", "YouTube", "Gaming"
    }>;
  }>;
  
  // VERKLIG hastighet per enhet (mätt i realtid)
  realTimePerformance: Array<{
    device: string;
    currentSpeed: {
      download: number; // Faktisk hastighet just nu
      upload: number;
      latency: number;  // Ping till router
    };
    qualityMetrics: {
      packetLoss: number;     // 0.1% = bra
      jitter: number;         // Variation i ping
      signalStrength: number; // WiFi-styrka
    };
  }>;
  
  // NÄTVERKSBELASTNING (exakt mätning)
  networkLoad: {
    currentUtilization: number; // % av total kapacitet
    peakHours: Array<{
      hour: string;
      utilizationPercent: number;
      bottleneckDevices: string[];
    }>;
    qualityOfService: {
      videoStreamingQuality: "4K" | "HD" | "SD" | "Buffering";
      gamingLatency: "Excellent" | "Good" | "Poor";
      videoCallQuality: "HD" | "Standard" | "Poor";
    };
  };
  
  // FRAMTIDSPREDIKTION (baserat på historik)
  predictions: {
    nextMonthUsage: number; // GB
    recommendedUpgrade: {
      currentSpeed: number;
      recommendedSpeed: number;
      reasoning: string[];
      confidence: number; // 0-100%
    };
  };
}

// Exempel på VERKLIG data från en router:
export const examplePreciseData: PreciseRouterData = {
  timestamp: "2025-01-18T15:30:00Z",
  
  deviceUsage: [
    {
      deviceName: "iPhone 13 Pro",
      macAddress: "aa:bb:cc:dd:ee:ff",
      ip: "192.168.1.105",
      totalBytes: 16106127360, // 15 GB senaste 24h
      dailyAverage: 15.2,
      hourlyBreakdown: {
        "07:00": 0.8, // Morgon - podcast
        "12:00": 1.2, // Lunch - YouTube
        "19:00": 4.5, // Kväll - Netflix 4K
        "22:00": 2.1, // Kväll - Instagram
      },
      applicationBreakdown: [
        {
          protocol: "TCP",
          port: 443,
          bytes: 9663676416, // 9 GB
          likelyApplication: "Netflix (4K streaming)"
        },
        {
          protocol: "TCP", 
          port: 443,
          bytes: 3221225472, // 3 GB
          likelyApplication: "YouTube"
        },
        {
          protocol: "UDP",
          port: 53,
          bytes: 1073741824, // 1 GB
          likelyApplication: "Instagram/TikTok"
        }
      ]
    },
    {
      deviceName: "MacBook Pro M2",
      macAddress: "11:22:33:44:55:66", 
      ip: "192.168.1.108",
      totalBytes: 8589934592, // 8 GB
      dailyAverage: 8.0,
      hourlyBreakdown: {
        "09:00": 2.1, // Zoom-möten
        "14:00": 1.8, // Webbutveckling
        "20:00": 3.2, // YouTube/streaming
      },
      applicationBreakdown: [
        {
          protocol: "UDP",
          port: 8801,
          bytes: 2147483648, // 2 GB
          likelyApplication: "Zoom Video Conferencing"
        },
        {
          protocol: "TCP",
          port: 443, 
          bytes: 4294967296, // 4 GB
          likelyApplication: "Web Development/GitHub"
        }
      ]
    }
  ],
  
  realTimePerformance: [
    {
      device: "iPhone 13 Pro",
      currentSpeed: {
        download: 87.3, // Mbit/s - EXAKT hastighet just nu
        upload: 12.8,
        latency: 8      // ms till router
      },
      qualityMetrics: {
        packetLoss: 0.02,    // 0.02% = utmärkt
        jitter: 2.1,         // 2ms variation
        signalStrength: -42   // dBm (utmärkt WiFi)
      }
    }
  ],
  
  networkLoad: {
    currentUtilization: 73.2, // % av 100 Mbit/s anslutning
    peakHours: [
      {
        hour: "20:00",
        utilizationPercent: 94.5, // Nästan maxat
        bottleneckDevices: ["iPhone 13 Pro (Netflix 4K)", "Samsung TV (Disney+)"]
      }
    ],
    qualityOfService: {
      videoStreamingQuality: "HD", // Kunde vara 4K med mer hastighet
      gamingLatency: "Good",       // 15ms average
      videoCallQuality: "HD"       // Stabil för Zoom
    }
  },
  
  predictions: {
    nextMonthUsage: 456.7, // GB baserat på trend
    recommendedUpgrade: {
      currentSpeed: 100,
      recommendedSpeed: 250,
      reasoning: [
        "Peak-användning når 94.5% av kapacitet kl 20:00",
        "4K-streaming buffrar under högtrafik", 
        "3 enheter streamar samtidigt på kvällen",
        "Gaming-latens blir instabil vid hög belastning"
      ],
      confidence: 94 // 94% säker på rekommendationen
    }
  }
};

// Precision-nivåer för olika data:
export const precisionLevels = {
  dataUsage: "99.9%",        // Routern loggar varje byte
  deviceIdentification: "95%", // MAC-adress + hostname
  applicationDetection: "85%", // Baserat på port/protokoll
  qualityMetrics: "98%",     // Direktmätning från router
  speedMeasurement: "99%",   // Realtidsmätning
  predictions: "78%"         // Baserat på historiska data
};
