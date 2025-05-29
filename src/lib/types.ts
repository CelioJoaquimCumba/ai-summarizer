export interface CallAnalysis {
    callId: string;
    timestamp: string;
    duration: number;
    callType: string;
    channel: string;
    languagePreference: string;
    location: string;
    customer: {
      customerId: string;
      msisdn: string;
      customerName: string;
      accountType: string;
      customerSegment: string;
    };
    agent: {
      agentId: string;
      agentName: string;
      department: string;
      languageUsed: string;
    };
    categorization: {
      serviceCategory: string;
      serviceSubcategory: string;
      issueType: string;
      specificIssue: string;
    };
    experience: {
      sentiment: string;
      emotionalTone: string;
      satisfactionIndicator: string;
      csatScore: number;
      npsIntentToRecommend: number;
      feedbackProvided: boolean;
    };
    qualityAssessment: {
      greetingCompliance: boolean;
      closureCompliance: boolean;
      scriptAdherence: string;
      empathyShown: boolean;
      activeListening: boolean;
      problemSolving: string;
      callQualityScore: number;
      qaRemarks: string;
    };
    summary: {
      shortSummary: string;
      fullSummary: string;
    };
    tags: string[];
  }
  