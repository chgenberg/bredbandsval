import jsPDF from 'jspdf';

interface RecommendationData {
  provider: string;
  packageName: string;
  speed: number;
  price: number;
  bindingTime?: number;
  features: string[];
  badges?: string[];
  trustScore?: number;
  reasoning?: string;
}

interface UserProfileData {
  address?: string;
  householdSize?: string;
  streamingLevel?: string;
  onlineGaming?: boolean;
  videoMeetings?: boolean;
  workFromHome?: boolean;
  serviceType?: string;
}

export function generateRecommendationPDF(
  recommendations: RecommendationData[],
  userProfile: UserProfileData
): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(37, 99, 235); // Blue color
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  // Logo/Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('Valle AI', 20, 25);
  doc.setFontSize(12);
  doc.text('Din personliga bredbandsrekommendation', 20, 35);
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  
  // Date
  doc.setFontSize(10);
  doc.text(`Skapad: ${new Date().toLocaleDateString('sv-SE')}`, pageWidth - 50, 50);
  
  // User Profile Section
  let yPos = 60;
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('Din profil', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(11);
  doc.setFont(undefined, 'normal');
  
  const profileInfo = [
    `Adress: ${userProfile.address || 'Ej angiven'}`,
    `Hushåll: ${userProfile.householdSize || '1'} personer`,
    `Tjänst: ${userProfile.serviceType === 'both' ? 'Bredband & TV' : userProfile.serviceType === 'tv' ? 'TV-paket' : 'Bredband'}`,
    `Streaming: ${userProfile.streamingLevel === 'heavy' ? 'Mycket' : userProfile.streamingLevel === 'moderate' ? 'Måttlig' : 'Lite'}`,
    `Gaming: ${userProfile.onlineGaming ? 'Ja' : 'Nej'}`,
    `Videomöten: ${userProfile.videoMeetings ? 'Ja' : 'Nej'}`,
    `Hemarbete: ${userProfile.workFromHome ? 'Ja' : 'Nej'}`
  ];
  
  profileInfo.forEach((info) => {
    doc.text(info, 20, yPos);
    yPos += 7;
  });
  
  // Recommendations Section
  yPos += 10;
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('Våra rekommendationer', 20, yPos);
  
  // Top 3 recommendations
  recommendations.slice(0, 3).forEach((rec, index) => {
    yPos += 15;
    
    // Recommendation box
    doc.setDrawColor(200, 200, 200);
    if (index === 0) {
      doc.setFillColor(37, 99, 235, 0.1); // Light blue for top choice
      doc.rect(15, yPos - 5, pageWidth - 30, 45, 'FD');
    } else {
      doc.rect(15, yPos - 5, pageWidth - 30, 45, 'D');
    }
    
    // Rank
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text(`#${index + 1}`, 20, yPos + 10);
    
    // Provider and package
    doc.setFontSize(14);
    doc.text(rec.provider, 40, yPos + 5);
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(rec.packageName, 40, yPos + 11);
    
    // Speed and price
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`${rec.speed} Mbit/s`, 40, yPos + 20);
    doc.text(`${rec.price} kr/mån`, 100, yPos + 20);
    
    // Binding time
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    const bindingText = rec.bindingTime === 0 ? 'Ingen bindning' : `${rec.bindingTime} mån bindning`;
    doc.text(bindingText, 40, yPos + 27);
    
    // Badges
    if (rec.badges && rec.badges.length > 0) {
      const badgesText = rec.badges.slice(0, 3).join(' • ');
      doc.setFontSize(9);
      doc.setTextColor(37, 99, 235);
      doc.text(badgesText, 40, yPos + 34);
      doc.setTextColor(0, 0, 0);
    }
    
    // Trust score
    if (rec.trustScore) {
      const stars = Math.round(rec.trustScore / 20);
      doc.setFontSize(10);
      doc.text(`Betyg: ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}`, pageWidth - 50, yPos + 5);
    }
    
    yPos += 45;
  });
  
  // Footer
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Genererad av Valle AI - Din guide till bästa bredbandet', pageWidth / 2, 280, { align: 'center' });
  doc.text('Besök oss på bredbandsval.se för mer information', pageWidth / 2, 285, { align: 'center' });
  
  // Save the PDF
  doc.save(`valle-ai-rekommendation-${new Date().toISOString().split('T')[0]}.pdf`);
}
